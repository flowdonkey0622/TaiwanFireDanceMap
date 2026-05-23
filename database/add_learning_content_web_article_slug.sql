alter table public.learning_contents
  add column if not exists web_article_slug text;

alter table public.learning_contents
  drop constraint if exists learning_contents_article_link_target_check;

alter table public.learning_contents
  add constraint learning_contents_article_link_target_check
  check (
    content_type <> 'article_link'
    or nullif(btrim(coalesce(external_url, '')), '') is not null
    or nullif(btrim(coalesce(original_url, '')), '') is not null
    or nullif(btrim(coalesce(web_article_slug, '')), '') is not null
  ) not valid;

update public.learning_contents
set web_article_slug = 'body-tracing-framework'
where slug = 'body-tracing-framework';
