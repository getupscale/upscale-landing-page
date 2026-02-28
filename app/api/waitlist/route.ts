import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { getResend, getResendFrom } from "@/lib/resend/server";

export const runtime = "nodejs";

const schema = z
  .object({
    email: z.string().email(),
    name: z.string().max(120).optional(),
    company: z.string().min(1).max(160),
    role: z.string().min(1).max(80),
    company_size: z.string().min(1).max(40),
    use_cases: z.array(z.string().max(80)).max(12).default([]),
    notes: z.string().max(1200).optional()
  })
  .strict();

type RateState = { count: number; resetAt: number };
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 12;

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function ratelimit(ip: string) {
  const store = (globalThis as unknown as { __waitlistRate?: Map<string, RateState> }).__waitlistRate;
  const map = store ?? new Map<string, RateState>();
  (globalThis as unknown as { __waitlistRate?: Map<string, RateState> }).__waitlistRate = map;

  const now = Date.now();
  const state = map.get(ip);
  if (!state || state.resetAt <= now) {
    map.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { ok: true } as const;
  }

  if (state.count >= RATE_MAX) return { ok: false, retryAfterMs: state.resetAt - now } as const;

  state.count += 1;
  map.set(ip, state);
  return { ok: true } as const;
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const gate = ratelimit(ip);
  if (!gate.ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(gate.retryAfterMs / 1000))
        }
      }
    );
  }

  let input: unknown;
  try {
    input = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 422 });
  }

  const payload = parsed.data;
  const email = payload.email.trim().toLowerCase();

  let supabaseAdmin: ReturnType<typeof getSupabaseAdmin>;
  try {
    supabaseAdmin = getSupabaseAdmin();
  } catch {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const { data: existing, error: existingError } = await supabaseAdmin
    .from("waitlist_signups")
    .select("id,email,email_sent_at")
    .eq("email", email)
    .maybeSingle();

  if (existingError) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  const ensureConfirmationEmail = async () => {
    const { data: record } = await supabaseAdmin
      .from("waitlist_signups")
      .select("email,email_sent_at")
      .eq("email", email)
      .maybeSingle();

    if (!record || record.email_sent_at) return;

    let resend: ReturnType<typeof getResend>;
    let from: string;
    try {
      resend = getResend();
      from = getResendFrom();
    } catch {
      return;
    }

    const { data, error } = await resend.emails.send({
      from,
      to: [email],
      subject: "You’re on the Upscale waitlist",
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.5; color: #2E2E2E;">
          <h2 style="margin:0 0 12px; font-weight: 700;">You’re on the waitlist.</h2>
          <p style="margin:0 0 12px;">Thanks for joining Upscale early access. We’ll email you when your slot opens.</p>
          <p style="margin:0; color:#666; font-size: 13px;">If you didn’t request this, you can ignore this email.</p>
        </div>
      `,
    });

    if (error || !data?.id) {
      await supabaseAdmin
        .from("waitlist_signups")
        .update({ email_status: "error", email_error: error?.message ?? "Resend failed" })
        .eq("email", email);
      return;
    }

    await supabaseAdmin
      .from("waitlist_signups")
      .update({
        email_status: "sent",
        email_sent_at: new Date().toISOString(),
        resend_message_id: data.id,
        email_error: null
      })
      .eq("email", email);
  };

  if (existing) {
    await ensureConfirmationEmail();
    return NextResponse.json({ ok: true, created: false }, { status: 200 });
  }

  const { error: insertError } = await supabaseAdmin.from("waitlist_signups").insert({
    email,
    name: payload.name?.trim() || null,
    company: payload.company.trim(),
    role: payload.role,
    company_size: payload.company_size,
    use_cases: payload.use_cases,
    notes: payload.notes?.trim() || null,
    email_status: "pending",
    email_sent_at: null,
    resend_message_id: null,
    email_error: null
  });

  if (insertError) {
    if (insertError.code === "23505") {
      await ensureConfirmationEmail();
      return NextResponse.json({ ok: true, created: false }, { status: 200 });
    }
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  await ensureConfirmationEmail();

  return NextResponse.json({ ok: true, created: true }, { status: 201 });
}
