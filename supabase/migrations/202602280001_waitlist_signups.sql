create extension if not exists citext;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email citext not null,
  name text null,
  company text not null,
  role text not null,
  company_size text not null,
  use_cases text[] not null default '{}',
  notes text null,
  email_status text not null default 'pending',
  email_sent_at timestamptz null,
  resend_message_id text null,
  email_error text null
);

create unique index if not exists waitlist_signups_email_uidx on public.waitlist_signups (email);

alter table public.waitlist_signups enable row level security;
