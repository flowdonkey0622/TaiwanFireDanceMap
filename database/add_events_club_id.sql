alter table public.events
  add column if not exists club_id uuid references public.clubs(id) on delete set null;

create index if not exists events_club_id_idx
  on public.events (club_id);
