-- ============================================================
-- ColabRoom Schema v3 — Storage bucket + social_links for brands
-- Run in Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- 1. Create the 'avatars' storage bucket (public, so images are accessible)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  true,
  5242880,  -- 5MB max
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update set public = true;

-- 2. Storage RLS policies for avatars bucket
create policy "Anyone can view avatars"
  on storage.objects for select
  using (bucket_id = 'avatars');

create policy "Authenticated users can upload avatars"
  on storage.objects for insert
  with check (bucket_id = 'avatars' and auth.uid() is not null);

create policy "Users can update their own avatars"
  on storage.objects for update
  using (bucket_id = 'avatars' and auth.uid() is not null);

create policy "Users can delete their own avatars"
  on storage.objects for delete
  using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);

-- 3. Add social_links JSONB to brands table (creators already have it from schema_v2)
alter table public.brands
  add column if not exists social_links jsonb default '[]'::jsonb;

-- 4. Add location to brands table if missing
alter table public.brands
  add column if not exists location text;

-- 5. Add website to creators table if missing (for linking personal site)
alter table public.creators
  add column if not exists website text;
