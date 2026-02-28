import "server-only";

import { Resend } from "resend";

let cached: Resend | null = null;

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export function getResend() {
  if (cached) return cached;
  cached = new Resend(requireEnv("RESEND_API_KEY"));
  return cached;
}

export function getResendFrom() {
  return requireEnv("RESEND_FROM");
}
