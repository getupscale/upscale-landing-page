# Upscale Website

Minimal Next.js marketing site with a waitlist flow.

## Local development (Bun)

1. Install dependencies:

```bash
bun install
```

2. Copy env template and fill values:

```bash
cp .env.example .env.local
```

Required server env vars:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_PROJECT_REF`
- `RESEND_API_KEY`
- `RESEND_FROM`

3. Start dev server:

```bash
bun run dev
```

4. Build locally:

```bash
bun run build
```

## Vercel notes

- Set the same environment variables in Vercel Project Settings.
- Keep server-only keys (`SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`) as protected values.
- Deploy with Vercel from this branch once checks pass.
