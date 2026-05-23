import { supabase } from "../lib/supabase";
import type { ArticleLink } from "../data/articles";
import { getWebArticleBySlug } from "../data/webArticles";

export type ContentStatus = "draft" | "published" | "archived";
export type ContentType = "playlist" | "article_link";

export type ContentCategory = {
  id: string;
  name: string;
  slug: string;
  status: ContentStatus;
};

export type ManagedLearningContent = {
  id: string;
  categoryId: string;
  categorySlug: string;
  contentType: ContentType;
  title: string;
  summary: string;
  externalUrl: string;
  originalUrl: string;
  youtubePlaylistId: string;
  thumbnailUrl: string;
  webArticleSlug: string;
  status: ContentStatus;
  sortOrder: number;
  slug: string;
  source: string;
  publishedLabel: string;
  tags: string[];
  accent: string;
};

export type LearningContentInput = Omit<ManagedLearningContent, "id">;

type LearningContentRow = {
  id: string;
  category_id: string | null;
  content_type: string;
  title: string;
  summary: string;
  external_url: string | null;
  original_url: string | null;
  youtube_playlist_id: string | null;
  thumbnail_url: string | null;
  web_article_slug: string | null;
  status: string;
  sort_order: number;
  slug: string | null;
  category_slug: string | null;
  source: string | null;
  published_label: string | null;
  tags: string[] | null;
  accent: string;
};

type ContentCategoryRow = {
  id: string;
  name: string;
  slug: string;
  status: string;
};

type PublishedArticleRow = {
  id: string;
  slug: string | null;
  title: string;
  summary: string;
  external_url: string | null;
  original_url: string | null;
  web_article_slug: string | null;
  source: string | null;
  published_label: string | null;
  tags: string[] | null;
  accent: string;
};

const contentStatuses: ContentStatus[] = ["draft", "published", "archived"];
const contentTypes: ContentType[] = ["playlist", "article_link"];
const articleAccents: ArticleLink["accent"][] = ["ember", "sky", "sun"];

function getTrimmedText(value: string, label: string, maxLength: number): string {
  const trimmedValue = value.trim();

  if (trimmedValue.length > maxLength) {
    throw new Error(`${label} 最多 ${maxLength} 個字。`);
  }

  return trimmedValue;
}

function isContentStatus(status: unknown): status is ContentStatus {
  return contentStatuses.includes(status as ContentStatus);
}

function isContentType(type: unknown): type is ContentType {
  return contentTypes.includes(type as ContentType);
}

function getSafeExternalUrl(url: string | null): string | null {
  if (!url) {
    return null;
  }

  const trimmedUrl = url.trim();

  if (!trimmedUrl) {
    return null;
  }

  try {
    const parsedUrl = new URL(trimmedUrl);
    return parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:"
      ? parsedUrl.toString()
      : null;
  } catch {
    return null;
  }
}

function getInputExternalUrl(url: string, label: string): string | null {
  const safeUrl = getSafeExternalUrl(url);

  if (url.trim() && !safeUrl) {
    throw new Error(`${label} 只允許 http 或 https URL。`);
  }

  return safeUrl;
}

function isArticleAccent(accent: unknown): accent is ArticleLink["accent"] {
  return articleAccents.includes(accent as ArticleLink["accent"]);
}

function toContentCategory(row: ContentCategoryRow): ContentCategory {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    status: isContentStatus(row.status) ? row.status : "draft",
  };
}

function toManagedLearningContent(row: LearningContentRow): ManagedLearningContent {
  return {
    id: row.id,
    categoryId: row.category_id ?? "",
    categorySlug: row.category_slug ?? "",
    contentType: isContentType(row.content_type) ? row.content_type : "article_link",
    title: row.title,
    summary: row.summary,
    externalUrl: getSafeExternalUrl(row.external_url) ?? "",
    originalUrl: getSafeExternalUrl(row.original_url) ?? "",
    youtubePlaylistId: row.youtube_playlist_id ?? "",
    thumbnailUrl: getSafeExternalUrl(row.thumbnail_url) ?? "",
    webArticleSlug: row.web_article_slug ?? "",
    status: isContentStatus(row.status) ? row.status : "draft",
    sortOrder: row.sort_order,
    slug: row.slug ?? "",
    source: row.source ?? "",
    publishedLabel: row.published_label ?? "",
    tags: row.tags ?? [],
    accent: row.accent,
  };
}

function toArticleLink(row: PublishedArticleRow): ArticleLink | null {
  const url = getSafeExternalUrl(row.external_url);
  const webArticleSlug = row.web_article_slug?.trim() ?? "";
  const webArticle = webArticleSlug ? getWebArticleBySlug(webArticleSlug) : null;
  const id = row.slug ?? row.id;

  if (!url && !webArticleSlug && !getSafeExternalUrl(row.original_url)) {
    return null;
  }

  return {
    id,
    title: row.title,
    description: row.summary,
    url: url ?? undefined,
    originalUrl: getSafeExternalUrl(row.original_url) ?? undefined,
    webArticleSlug: webArticleSlug || undefined,
    webArticleTitle: webArticle?.title ?? undefined,
    source: row.source ?? "文章",
    publishedLabel: row.published_label ?? "文章連結",
    tags: row.tags ?? [],
    accent: isArticleAccent(row.accent) ? row.accent : "ember",
  };
}

function toLearningContentRow(input: LearningContentInput) {
  if (!isContentType(input.contentType)) {
    throw new Error("內容類型不正確。");
  }

  if (!isContentStatus(input.status)) {
    throw new Error("內容狀態不正確。");
  }

  const externalUrl = getInputExternalUrl(input.externalUrl, "外部連結");
  const originalUrl = getInputExternalUrl(input.originalUrl, "原文連結");
  const webArticleSlug = getTrimmedText(input.webArticleSlug, "網頁文章", 120);

  if (input.contentType === "article_link" && !externalUrl && !originalUrl && !webArticleSlug) {
    throw new Error("文章需填寫閱讀文章連結、原文連結或選擇網頁文章。");
  }

  return {
    category_id: input.categoryId || null,
    content_type: input.contentType,
    title: getTrimmedText(input.title, "標題", 160),
    summary: getTrimmedText(input.summary, "摘要", 2000),
    external_url: externalUrl,
    original_url: originalUrl,
    youtube_playlist_id: getTrimmedText(input.youtubePlaylistId, "YouTube 播放清單 ID", 160) || null,
    thumbnail_url: getInputExternalUrl(input.thumbnailUrl, "縮圖連結"),
    web_article_slug: webArticleSlug || null,
    status: input.status,
    sort_order: input.sortOrder,
    slug: getTrimmedText(input.slug, "Slug", 120) || null,
    category_slug: getTrimmedText(input.categorySlug, "分類 Slug", 120) || null,
    source: getTrimmedText(input.source, "來源", 80) || null,
    published_label: getTrimmedText(input.publishedLabel, "發布標籤", 80) || null,
    tags: input.tags.map((tag) => getTrimmedText(tag, "標籤", 40)).filter(Boolean),
    accent: getTrimmedText(input.accent, "色調", 32),
  };
}

export async function getContentCategories(): Promise<ContentCategory[]> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("content_categories")
    .select("id, name, slug, status")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map(toContentCategory);
}

export async function getManagedLearningContents(): Promise<ManagedLearningContent[]> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("learning_contents")
    .select(
      "id, category_id, content_type, title, summary, external_url, original_url, youtube_playlist_id, thumbnail_url, web_article_slug, status, sort_order, slug, category_slug, source, published_label, tags, accent",
    )
    .order("sort_order", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map(toManagedLearningContent);
}

export async function getPublishedArticleLinks(): Promise<ArticleLink[]> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("learning_contents")
    .select(
      "id, slug, title, summary, external_url, original_url, web_article_slug, source, published_label, tags, accent",
    )
    .eq("status", "published")
    .eq("content_type", "article_link")
    .order("sort_order", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map(toArticleLink).filter((article) => article !== null);
}

export async function getPublishedArticleBySlug(slug: string): Promise<ArticleLink | null> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("learning_contents")
    .select(
      "id, slug, title, summary, external_url, original_url, web_article_slug, source, published_label, tags, accent",
    )
    .eq("status", "published")
    .eq("content_type", "article_link")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data ? toArticleLink(data) : null;
}

export async function createLearningContent(input: LearningContentInput): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase
    .from("learning_contents")
    .insert(toLearningContentRow(input));

  if (error) {
    throw error;
  }
}

export async function updateLearningContent(
  id: string,
  input: LearningContentInput,
): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase
    .from("learning_contents")
    .update(toLearningContentRow(input))
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function archiveLearningContent(id: string): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase
    .from("learning_contents")
    .update({ status: "archived" })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
