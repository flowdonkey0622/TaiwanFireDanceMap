-- Static content seed for the current Fire Dance Map site.
-- This prepares database data only; the frontend still reads local TypeScript data.

create extension if not exists pgcrypto;

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  title text not null,
  event_date date not null,
  county text not null,
  venue text not null default '',
  type text not null default 'performance',
  summary text not null default '',
  link text not null default '',
  calendar_title text,
  calendar_tone text,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.events
  add column if not exists slug text,
  add column if not exists title text not null default '',
  add column if not exists event_date date,
  add column if not exists county text not null default '',
  add column if not exists venue text not null default '',
  add column if not exists type text not null default 'performance',
  add column if not exists summary text not null default '',
  add column if not exists link text not null default '',
  add column if not exists calendar_title text,
  add column if not exists calendar_tone text,
  add column if not exists status text not null default 'draft',
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'events'
      and column_name = 'id'
      and data_type = 'uuid'
  ) then
    execute 'alter table public.events alter column id set default gen_random_uuid()';
  elsif exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'events'
      and column_name = 'id'
      and data_type = 'text'
  ) then
    execute 'alter table public.events alter column id set default gen_random_uuid()::text';
  end if;
end $$;

create unique index if not exists events_slug_key
  on public.events (slug);

create index if not exists events_status_event_date_idx
  on public.events (status, event_date);

create index if not exists events_county_event_date_idx
  on public.events (county, event_date);

create table if not exists public.content_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  sort_order integer not null default 0,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.content_categories
  add column if not exists name text not null default '',
  add column if not exists slug text not null default '',
  add column if not exists sort_order integer not null default 0,
  add column if not exists status text not null default 'draft',
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

create unique index if not exists content_categories_slug_key
  on public.content_categories (slug);

create index if not exists content_categories_status_sort_idx
  on public.content_categories (status, sort_order);

create table if not exists public.learning_contents (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  category_id uuid references public.content_categories(id) on delete set null,
  content_type text not null default 'article_link',
  category_slug text,
  title text not null,
  summary text not null default '',
  external_url text,
  original_url text,
  youtube_playlist_id text,
  thumbnail_url text,
  body text,
  web_article_slug text,
  source text,
  published_label text,
  tags text[] not null default '{}',
  accent text not null default 'ember',
  sort_order integer not null default 0,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.learning_contents
  add column if not exists slug text,
  add column if not exists category_id uuid references public.content_categories(id) on delete set null,
  add column if not exists content_type text not null default 'article_link',
  add column if not exists category_slug text,
  add column if not exists title text not null default '',
  add column if not exists summary text not null default '',
  add column if not exists external_url text,
  add column if not exists original_url text,
  add column if not exists youtube_playlist_id text,
  add column if not exists thumbnail_url text,
  add column if not exists body text,
  add column if not exists web_article_slug text,
  add column if not exists source text,
  add column if not exists published_label text,
  add column if not exists tags text[] not null default '{}',
  add column if not exists accent text not null default 'ember',
  add column if not exists sort_order integer not null default 0,
  add column if not exists status text not null default 'draft',
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'learning_contents'
      and column_name = 'id'
      and data_type = 'uuid'
  ) then
    execute 'alter table public.learning_contents alter column id set default gen_random_uuid()';
  elsif exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'learning_contents'
      and column_name = 'id'
      and data_type = 'text'
  ) then
    execute 'alter table public.learning_contents alter column id set default gen_random_uuid()::text';
  end if;
end $$;

create unique index if not exists learning_contents_slug_key
  on public.learning_contents (slug);

create index if not exists learning_contents_status_sort_idx
  on public.learning_contents (status, sort_order);

create index if not exists learning_contents_category_id_idx
  on public.learning_contents (category_id);

do $$
begin
  alter table public.learning_contents
    drop constraint if exists learning_contents_article_link_target_check;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'learning_contents_article_link_target_check'
      and conrelid = 'public.learning_contents'::regclass
  ) then
    alter table public.learning_contents
      add constraint learning_contents_article_link_target_check
      check (
        content_type <> 'article_link'
        or nullif(btrim(coalesce(external_url, '')), '') is not null
        or nullif(btrim(coalesce(original_url, '')), '') is not null
        or nullif(btrim(coalesce(web_article_slug, '')), '') is not null
      ) not valid;
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'learning_contents_published_slug_check'
      and conrelid = 'public.learning_contents'::regclass
  ) then
    alter table public.learning_contents
      add constraint learning_contents_published_slug_check
      check (
        status <> 'published'
        or nullif(btrim(coalesce(slug, '')), '') is not null
      ) not valid;
  end if;
end $$;

create table if not exists public.online_activities (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  title text not null,
  description text not null default '',
  period text,
  primary_link_label text not null,
  primary_link_url text not null,
  secondary_link_label text,
  secondary_link_url text,
  accent text not null default 'ember',
  sort_order integer not null default 0,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.online_activities
  add column if not exists slug text,
  add column if not exists title text not null default '',
  add column if not exists description text not null default '',
  add column if not exists period text,
  add column if not exists primary_link_label text not null default '',
  add column if not exists primary_link_url text not null default '',
  add column if not exists secondary_link_label text,
  add column if not exists secondary_link_url text,
  add column if not exists accent text not null default 'ember',
  add column if not exists sort_order integer not null default 0,
  add column if not exists status text not null default 'draft',
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'online_activities'
      and column_name = 'id'
      and data_type = 'uuid'
  ) then
    execute 'alter table public.online_activities alter column id set default gen_random_uuid()';
  elsif exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'online_activities'
      and column_name = 'id'
      and data_type = 'text'
  ) then
    execute 'alter table public.online_activities alter column id set default gen_random_uuid()::text';
  end if;
end $$;

create unique index if not exists online_activities_slug_key
  on public.online_activities (slug);

create index if not exists online_activities_status_sort_idx
  on public.online_activities (status, sort_order);

insert into public.events (
  slug,
  title,
  event_date,
  county,
  venue,
  type,
  summary,
  link,
  calendar_title,
  calendar_tone,
  status
) values
  ('tmucyfdc-2026-recital', '臺北醫學大學炙陽火舞社成果發表會', '2026-05-14', '臺北市', '臺北醫學大學', 'performance', '臺北醫學大學炙陽火舞社 2026 上半年成果發表會。IG：@tmucyfdc', 'https://www.instagram.com/tmucyfdc/', '北醫火舞', 'blue', 'published'),
  ('yanyifiresoul-2026-recital', '虎科炎藝火舞社成果發表會', '2026-05-22', '雲林縣', '國立虎尾科技大學', 'performance', '虎科炎藝火舞社 2026 上半年成果發表會。IG：@yanyifiresoul', 'https://www.instagram.com/yanyifiresoul/', '虎科炎藝', 'red', 'published'),
  ('nycu-fire-dance-2026-recital', '交大火舞社成果發表會', '2026-05-23', '新竹市', '國立陽明交通大學光復校區', 'performance', '交大火舞社 2026 上半年成果發表會。IG：@nycu_fire_dance', 'https://www.instagram.com/nycu_fire_dance/', '交大火舞', 'blue', 'published'),
  ('nthu-light-dance-2026-recital', '清華大學光舞藝術社成果發表會', '2026-05-24', '新竹市', '國立清華大學', 'performance', '清華大學光舞藝術社 2026 上半年成果發表會。IG：@nthu_light_dance_2014', 'https://www.instagram.com/nthu_light_dance_2014/', '清大光舞', 'blue', 'published'),
  ('ncue-fire-2026-recital', '彰師大白沙火舞社成果發表會', '2026-05-25', '彰化縣', '國立彰化師範大學', 'performance', '彰師大白沙火舞社 2026 上半年成果發表會。IG：@ncue_fire', 'https://www.instagram.com/ncue_fire/', '彰師白沙', 'red', 'published'),
  ('ncufd-official-2026-recital', '中央大學火舞藝術研究社成果發表會', '2026-05-26', '桃園市', '國立中央大學', 'performance', '中央大學火舞藝術研究社 2026 上半年成果發表會。IG：@ncufd_official', 'https://www.instagram.com/ncufd_official/', '中央火舞', 'blue', 'published'),
  ('ccu-fire-2026-recital', '中正火藝2026大成表演 – 【同歸】', '2026-05-26', '嘉義縣', '國立中正大學', 'performance', '中正大學火舞藝術社 2026 上半年成果發表會。IG：@ccu_fire', 'https://www.instagram.com/ccu_fire/', '中正火藝', 'orange', 'published'),
  ('nanhua-fire-2026-recital', '南華大學火舞藝術表演社成果發表會', '2026-05-27', '嘉義縣', '南華大學', 'performance', '南華大學火舞藝術表演社 2026 上半年成果發表會。IG：@nanhua_fire', 'https://www.instagram.com/nanhua_fire/', '南華火舞', 'orange', 'published'),
  ('fjulf-2026-recital', '114-2輔大光火夏季成發「與十炬進」', '2026-05-27', '新北市', '輔仁大學', 'performance', '輔大光火藝術社 FJULF 10th 成果發表會。時間: 2026/5/27 (三)；18:30入場；19:00正式開始；地點:中美堂前', 'https://www.instagram.com/fjulf_feellafire/', '輔大光火', 'blue', 'published'),
  ('yuntechfire-2026-recital', '雲科熾舞社 YuntechFire 成果發表會', '2026-05-28', '雲林縣', '國立雲林科技大學', 'performance', '雲科熾舞社 YuntechFire 2026 上半年成果發表會。IG：@yuntechfire', 'https://www.instagram.com/yuntechfire/', '雲科熾舞', 'red', 'published'),
  ('ndhu-firedance-2026-recital', '東華火舞社成果發表會', '2026-05-28', '花蓮縣', '國立東華大學', 'performance', '東華火舞社 2026 上半年成果發表會。IG：@ndhu.firedance', 'https://www.instagram.com/ndhu.firedance/', '東華火舞', 'purple', 'published'),
  ('cycu-light-flow-arts-2026-recital', '中原火舞(光)社成果發表會', '2026-05-30', '桃園市', '中原大學', 'performance', '中原火舞(光)社 2026 上半年成果發表會。IG：@cycu_light_flow_arts', 'https://www.instagram.com/cycu_light_flow_arts/', '中原火舞', 'blue', 'published'),
  ('nchu-flowart-2026-recital', '中興大學光舞藝術社夏季成發《失焦光圈》', '2026-06-01', '臺中市', '國立中興大學', 'performance', '夏季成發《失焦光圈》 ；6/1晚上7:00，就在中興大學小禮堂！', 'https://www.instagram.com/nchu_flowart/', '中興光舞', 'red', 'published'),
  ('nccu-firedance-2026-recital', '政大火舞社第11屆夏季成發ー《窩咬焰牌》', '2026-06-02', '臺北市', '國立政治大學', 'performance', '時間：6/2 Tue. 19:00～ ；地點：政大四維堂前廣場', 'https://www.instagram.com/nccu.firedance_/', '政大火舞', 'blue', 'published'),
  ('nkust-kfa-2026-recital', '高雄科技大學第一火舞藝術表演社成果發表會', '2026-06-03', '高雄市', '國立高雄科技大學第一校區', 'performance', '高雄科技大學第一火舞藝術表演社 2026 上半年成果發表會。IG：@nkust_k.f.a', 'https://www.instagram.com/nkust_k.f.a/', '高科火藝', 'orange', 'published'),
  ('stust-fire-2026-recital', '南臺科技大學熾炎火舞社成果發表會', '2026-06-03', '臺南市', '南臺科技大學', 'performance', '南臺科技大學熾炎火舞社 2026 上半年成果發表會。IG：@chi_yan_fire', 'https://www.instagram.com/chi_yan_fire/', '南臺火舞', 'orange', 'published'),
  ('thu-firedance-2026-recital', '東海大學火舞藝術社成果發表會', '2026-06-03', '臺中市', '東海大學', 'performance', '東海大學火舞藝術社 2026 上半年成果發表會。IG：@thu_firedance', 'https://www.instagram.com/thu_firedance/', '東海火舞', 'red', 'published'),
  ('ncku-firedance-2026-recital', '成大火舞【 2026夏季成發 狄燠尼索燍】', '2026-06-04', '臺南市', '國立成功大學', 'performance', '18:30開始入場；19:00正式開始；地點：國立成功大學未來館前廣場', 'https://www.instagram.com/ncku_firedance/', '成大火舞', 'orange', 'published'),
  ('ntut-firedance-2026-recital', '北科火舞藝術研究社成果發表會', '2026-06-04', '臺北市', '國立臺北科技大學', 'performance', '北科火舞藝術研究社 2026 上半年成果發表會。IG：@ntut_firedance', 'https://www.instagram.com/ntut_firedance/', '北科火舞', 'blue', 'published'),
  ('stu-fireflow-2026-recital', '樹德火舞流動藝術社成果發表會', '2026-06-17', '高雄市', '樹德科技大學', 'performance', '樹德火舞流動藝術社 2026 上半年成果發表會。IG：@stu_fireflow', 'https://www.instagram.com/stu_fireflow/', '樹德火流', 'orange', 'published'),
  ('ntu-ntust-ntnu-fd-2026-recital', '臺大臺科師大火舞社 Fire Dance Club 成果發表會', '2026-06-27', '臺北市', '臺大、臺科大、臺師大', 'performance', '臺大臺科師大火舞社 Fire Dance Club 2026 上半年成果發表會。IG：@ntu_ntust_ntnu_fd', 'https://www.instagram.com/ntu_ntust_ntnu_fd/', '臺大臺科臺師大三校火舞', 'blue', 'published'),
  ('cgu-light-fire-2026-recital', '長庚大學光火藝術社成果發表會', '2026-05-26', '桃園市', '長庚大學', 'performance', '長庚大學光火藝術社 2026 上半年成果發表會。IG：@cgu_light.fire', 'https://www.instagram.com/cgu_light.fire/', '長庚光火', 'blue', 'published')
on conflict (slug) do update set
  title = excluded.title,
  event_date = excluded.event_date,
  county = excluded.county,
  venue = excluded.venue,
  type = excluded.type,
  summary = excluded.summary,
  link = excluded.link,
  calendar_title = excluded.calendar_title,
  calendar_tone = excluded.calendar_tone,
  status = excluded.status,
  updated_at = now();

insert into public.learning_contents (
  slug,
  content_type,
  category_slug,
  title,
  summary,
  external_url,
  original_url,
  youtube_playlist_id,
  thumbnail_url,
  body,
  web_article_slug,
  source,
  published_label,
  tags,
  accent,
  sort_order,
  status
) values
  ('playlist-poi-pltwryfmhqgcn4rspofjsb-ltwydhzrxz3', 'playlist', 'poi', 'Poi 教學', '從基礎手感、平面控制到常見招式組合的 Poi 練習播放清單。', 'https://www.youtube.com/playlist?list=PLtwryFmhqGCN4RSPoFJSB-lTwYDHzrXz3', null, 'PLtwryFmhqGCN4RSPoFJSB-lTwYDHzrXz3', null, null, null, null, null, array[]::text[], 'ember', 10, 'published'),
  ('playlist-poi-plilsed4zmytuu28rto1b6wm48mpmpugvu', 'playlist', 'poi', 'Poi 教學', '由松火流建立，基礎 Poi 練習&概念教學播放清單。', 'https://www.youtube.com/playlist?list=PLILSeD4ZMYtuu28RTO1B6wM48mPMpuGvU', null, 'PLILSeD4ZMYtuu28RTO1B6wM48mPMpuGvU', null, null, null, null, null, array[]::text[], 'ember', 20, 'published'),
  ('playlist-meteor-pltwryfmhqgcn7qi3ks00c9c60aarq4lj_', 'playlist', 'meteor', '流星教學', '整理流星道具的入門操作、轉換與節奏練習內容。', 'https://www.youtube.com/playlist?list=PLtwryFmhqGCN7QI3Ks00c9C60AaRq4LJ_', null, 'PLtwryFmhqGCN7QI3Ks00c9C60AaRq4LJ_', null, null, null, null, null, array[]::text[], 'sky', 30, 'published'),
  ('playlist-staff-pltwryfmhqgcopna-boongv3nevzsntv4w', 'playlist', 'staff', '短棍教學', '短棍控制、旋轉、拋接與火舞基礎動作的教學播放清單。', 'https://www.youtube.com/playlist?list=PLtwryFmhqGCOPna-boongv3NeVZsnTV4w', null, 'PLtwryFmhqGCOPna-boongv3NeVZsnTV4w', null, null, null, null, null, array[]::text[], 'sun', 40, 'published'),
  ('playlist-staff-plilsed4zmytsbda4wyc1txfy92wv7zkoa', 'playlist', 'staff', '長棍教學', '由松火流建立，基礎長棍練習&概念教學播放清單。', 'https://www.youtube.com/playlist?list=PLILSeD4ZMYtsbDA4WYC1TXfy92Wv7zkOa', null, 'PLILSeD4ZMYtsbDA4WYC1TXfy92Wv7zkOa', null, null, null, null, null, array[]::text[], 'ember', 50, 'published'),
  ('contact-staff-semiotics-a0', 'article_link', null, '接觸棍符號學 a₀', '以接觸棍的動作、路徑與符號感作為切入，整理流動藝術中的觀察方式與概念筆記。', 'https://medium.com/@spider1239999/接觸棍符號學-a₀-33c33aef7a98', null, null, null, null, null, 'Medium', '文章連結', array['接觸棍', '符號學', 'Flow Arts']::text[], 'ember', 60, 'published'),
  ('body-tracing-framework', 'article_link', null, 'Body Tracing Framework', '將 reels、weaves、windmills、crossers、腰繞與 meltdowns 等動作，依據位置與時序節奏整理進同一套框架，並透過 schemes 與 beat graphs 分析說明。雖然最初為 poi 設計，也能作為其他 Flow Arts 道具的參考。', null, 'https://antispinner.gitbook.io/btf', null, null, null, 'body-tracing-framework', 'GitBook', '框架文章', array['Poi', 'Body Tracing', 'Flow Arts']::text[], 'sky', 70, 'published'),
  ('Fire Fan Techniques Instruction and Overview by Pineapple', 'article_link', null, '包鳳梨中部粽火扇技巧教學及概論', '將 reels、weaves、windmills、crossers、腰繞與 meltdowns 等動作，依據位置與時序節奏整理進同一套框架，並透過 schemes 與 beat graphs 分析說明。雖然最初為 poi 設計，也能作為其他 Flow Arts 道具的參考。', 'https://www.pineappletetrapod.com/zh/archive/tutorial', null, null, null, null, null, 'Website', '框架文章', array['Fan', '火扇', 'Flow Arts']::text[], 'ember', 80, 'published')
on conflict (slug) do update set
  content_type = excluded.content_type,
  category_slug = excluded.category_slug,
  title = excluded.title,
  summary = excluded.summary,
  external_url = excluded.external_url,
  original_url = excluded.original_url,
  youtube_playlist_id = excluded.youtube_playlist_id,
  thumbnail_url = excluded.thumbnail_url,
  body = excluded.body,
  web_article_slug = excluded.web_article_slug,
  source = excluded.source,
  published_label = excluded.published_label,
  tags = excluded.tags,
  accent = excluded.accent,
  sort_order = excluded.sort_order,
  status = excluded.status,
  updated_at = now();

insert into public.online_activities (
  slug,
  title,
  description,
  period,
  primary_link_label,
  primary_link_url,
  secondary_link_label,
  secondary_link_url,
  accent,
  sort_order,
  status
) values
  ('taiwan-poi-challenge', 'Poi 挑戰', '台灣 poi 練習者的線上挑戰與作品分享活動。', null, '前往 Instagram', 'https://www.instagram.com/taiwan.poi.challenge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', null, null, 'ember', 10, 'published'),
  ('double-long-staff-2026', '2026 雙長手大集合 影片招募', '募集雙長手相關影片，透過線上投稿一起整理與分享台灣 Flow Arts 社群作品。', '影片招募期間：5/10 ～ 7/10', '查看活動貼文', 'https://www.instagram.com/p/DYJhkoDEYg6/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==', '填寫表單', 'https://forms.gle/hvizqCPVYDY5DT587', 'sun', 20, 'published')
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description,
  period = excluded.period,
  primary_link_label = excluded.primary_link_label,
  primary_link_url = excluded.primary_link_url,
  secondary_link_label = excluded.secondary_link_label,
  secondary_link_url = excluded.secondary_link_url,
  accent = excluded.accent,
  sort_order = excluded.sort_order,
  status = excluded.status,
  updated_at = now();
