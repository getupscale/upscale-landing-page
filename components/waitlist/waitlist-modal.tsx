"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { WAITLIST_EVENTS, WAITLIST_MODAL_TESTIDS } from "@/lib/waitlist-config";
import { cn } from "@/lib/utils";

type WaitlistPayload = {
  email: string;
  name?: string;
  company: string;
  role: string;
  company_size: string;
  use_cases: string[];
  notes?: string;
};

const ROLES = ["Finance", "RevOps", "COO", "Founder", "Ops", "Other"];
const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-1k", "1k+"];
const USE_CASES = [
  "Reduce DSO",
  "Recover failed payments",
  "Forecast accuracy",
  "Audit readiness",
  "Churn risk detection",
  "RevOps automation"
];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function WaitlistModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [useCases, setUseCases] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const totalSteps = 4;
  const progress = useMemo(() => {
    const safeStep = Math.min(totalSteps - 1, Math.max(0, step));
    return Math.round(((safeStep + 1) / totalSteps) * 100);
  }, [step]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    window.addEventListener(WAITLIST_EVENTS.open, onOpen);
    window.addEventListener(WAITLIST_EVENTS.close, onClose);
    return () => {
      window.removeEventListener(WAITLIST_EVENTS.open, onOpen);
      window.removeEventListener(WAITLIST_EVENTS.close, onClose);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    setError(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.setTimeout(() => {
      firstFieldRef.current?.focus();
      dialogRef.current?.scrollTo({ top: 0 });
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        window.dispatchEvent(new Event(WAITLIST_EVENTS.close));
      }

      if (event.key !== "Enter") return;
      const active = document.activeElement;
      if (active && active.tagName === "TEXTAREA") return;
      if ((active as HTMLElement | null)?.getAttribute("data-waitlist-enter") === "disabled") return;

      event.preventDefault();
      void onNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, step]);

  useEffect(() => {
    if (!open) {
      setStep(0);
      setSubmitting(false);
      setSubmitted(false);
      setError(null);
      return;
    }
  }, [open]);

  const payload: WaitlistPayload = useMemo(
    () => ({
      email: email.trim(),
      name: name.trim() || undefined,
      company: company.trim(),
      role,
      company_size: companySize,
      use_cases: useCases,
      notes: notes.trim() || undefined
    }),
    [email, name, company, role, companySize, useCases, notes]
  );

  const canGoNext = useMemo(() => {
    if (submitted || submitting) return false;

    if (step === 0) return isValidEmail(payload.email);
    if (step === 1) return Boolean(payload.company) && Boolean(payload.role);
    if (step === 2) return Boolean(payload.company_size);
    if (step === 3) return true;
    return false;
  }, [payload, step, submitted, submitting]);

  const onClose = () => {
    setOpen(false);
    window.dispatchEvent(new Event(WAITLIST_EVENTS.close));
  };

  const onBack = () => {
    setError(null);
    setStep((s) => Math.max(0, s - 1));
    window.setTimeout(() => firstFieldRef.current?.focus(), 0);
  };

  const onNext = async () => {
    setError(null);
    if (!canGoNext) return;

    if (step < totalSteps - 1) {
      setStep((s) => Math.min(totalSteps - 1, s + 1));
      window.setTimeout(() => firstFieldRef.current?.focus(), 0);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || `Request failed (${response.status})`);
      }

      setSubmitted(true);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Something went wrong";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleUseCase = (value: string) => {
    setUseCases((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  if (!open) return null;

  return (
    <div
      data-testid={WAITLIST_MODAL_TESTIDS.overlay}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-4 backdrop-blur-[2px] sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        data-testid={WAITLIST_MODAL_TESTIDS.dialog}
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/30 bg-background-light shadow-2xl dark:border-white/10 dark:bg-surface-dark"
      >
        <div className="flex items-center justify-between px-6 pb-4 pt-5">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Waitlist</div>
            <div className="font-serif text-2xl text-primary dark:text-text-dark">Get early access</div>
          </div>
          <button
            type="button"
            data-testid={WAITLIST_MODAL_TESTIDS.close}
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-black/5 hover:text-gray-800 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="px-6 pb-2">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800" data-testid={WAITLIST_MODAL_TESTIDS.progress}>
              <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="w-12 text-right text-xs font-medium text-gray-500 dark:text-gray-400">{progress}%</div>
          </div>
        </div>

        <div className="px-6 pb-6">
          {submitted ? (
            <div className="rounded-xl border border-secondary/40 bg-secondary/20 p-5">
              <div className="mb-2 flex items-center gap-2 text-primary dark:text-text-dark">
                <span className="material-symbols-outlined text-accent">check_circle</span>
                <div className="font-serif text-xl">You’re on the list.</div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We’ll email you when your slot opens. If you’re a good fit, we’ll also offer a short demo.
              </p>
              <div className="mt-4">
                <button type="button" onClick={onClose} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800">
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {error ? (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/30 dark:bg-red-950/30 dark:text-red-200">
                  {error}
                </div>
              ) : null}

              {step === 0 ? (
                <div>
                  <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">What’s your work email?</div>
                  <input
                    ref={firstFieldRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-4 dark:border-gray-700 dark:bg-[#161616]"
                    placeholder="name@company.com"
                    autoComplete="email"
                  />
                  <div className="mt-4">
                    <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Name (optional)</div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-4 dark:border-gray-700 dark:bg-[#161616]"
                      placeholder="Jane Doe"
                      autoComplete="name"
                      data-waitlist-enter="disabled"
                    />
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div>
                  <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Company</div>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-4 dark:border-gray-700 dark:bg-[#161616]"
                    placeholder="TechFlow"
                    autoComplete="organization"
                  />

                  <div className="mt-4">
                    <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Role</div>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {ROLES.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={cn(
                            "rounded-xl border px-3 py-2 text-sm transition-colors",
                            role === r
                              ? "border-accent bg-accent/10 text-primary dark:text-text-dark"
                              : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-[#161616] dark:text-gray-200 dark:hover:bg-white/5"
                          )}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div>
                  <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Company size</div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {COMPANY_SIZES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setCompanySize(s)}
                        className={cn(
                          "rounded-xl border px-3 py-2 text-sm transition-colors",
                          companySize === s
                            ? "border-accent bg-accent/10 text-primary dark:text-text-dark"
                            : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-[#161616] dark:text-gray-200 dark:hover:bg-white/5"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Use cases (optional)</div>
                    <div className="flex flex-wrap gap-2">
                      {USE_CASES.map((u) => {
                        const active = useCases.includes(u);
                        return (
                          <button
                            key={u}
                            type="button"
                            onClick={() => toggleUseCase(u)}
                            className={cn(
                              "rounded-full border px-3 py-1.5 text-xs transition-colors",
                              active
                                ? "border-accent bg-accent/10 text-primary dark:text-text-dark"
                                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-[#161616] dark:text-gray-200 dark:hover:bg-white/5"
                            )}
                          >
                            {u}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div>
                  <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Anything else? (optional)</div>
                  <textarea
                    ref={(node) => {
                      if (node) firstFieldRef.current = node as unknown as HTMLInputElement;
                    }}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-4 dark:border-gray-700 dark:bg-[#161616]"
                    placeholder="Tell us what you want Upscale to automate first..."
                  />
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    We’ll never share your email. This is a launch waitlist.
                  </p>
                </div>
              ) : null}

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  data-testid={WAITLIST_MODAL_TESTIDS.back}
                  onClick={onBack}
                  disabled={step === 0 || submitting}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium",
                    step === 0 || submitting
                      ? "cursor-not-allowed text-gray-400"
                      : "text-gray-700 hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
                  )}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => void onNext()}
                  data-testid={step === totalSteps - 1 ? WAITLIST_MODAL_TESTIDS.submit : WAITLIST_MODAL_TESTIDS.next}
                  disabled={!canGoNext}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors",
                    canGoNext ? "bg-primary hover:bg-gray-800" : "cursor-not-allowed bg-gray-300 dark:bg-gray-700"
                  )}
                >
                  {submitting ? "Submitting..." : step === totalSteps - 1 ? "Join waitlist" : "Next"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
