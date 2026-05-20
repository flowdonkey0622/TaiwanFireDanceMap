import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  archiveLearningContent,
  createLearningContent,
  getContentCategories,
  getManagedLearningContents,
  updateLearningContent,
  type ContentCategory,
  type ContentStatus,
  type ContentType,
  type LearningContentInput,
  type ManagedLearningContent,
} from "../services/learningContents";

type LearningContentFormState = Omit<LearningContentInput, "tags"> & {
  tagsText: string;
};

const emptyLearningContentForm: LearningContentFormState = {
  categoryId: "",
  categorySlug: "",
  contentType: "playlist",
  title: "",
  summary: "",
  externalUrl: "",
  originalUrl: "",
  youtubePlaylistId: "",
  thumbnailUrl: "",
  body: "",
  status: "draft",
  sortOrder: 0,
  slug: "",
  source: "",
  publishedLabel: "",
  tagsText: "",
  accent: "ember",
};

function statusLabel(status: ContentStatus): string {
  if (status === "published") {
    return "已發布";
  }

  if (status === "archived") {
    return "已封存";
  }

  return "草稿";
}

function toFormState(content: ManagedLearningContent): LearningContentFormState {
  return {
    categoryId: content.categoryId,
    categorySlug: content.categorySlug,
    contentType: content.contentType,
    title: content.title,
    summary: content.summary,
    externalUrl: content.externalUrl,
    originalUrl: content.originalUrl,
    youtubePlaylistId: content.youtubePlaylistId,
    thumbnailUrl: content.thumbnailUrl,
    body: content.body,
    status: content.status,
    sortOrder: content.sortOrder,
    slug: content.slug,
    source: content.source,
    publishedLabel: content.publishedLabel,
    tagsText: content.tags.join(", "),
    accent: content.accent,
  };
}

function toInput(formState: LearningContentFormState): LearningContentInput {
  return {
    ...formState,
    tags: formState.tagsText
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
  };
}

export function AdminLearningContents() {
  const [contents, setContents] = useState<ManagedLearningContent[]>([]);
  const [categories, setCategories] = useState<ContentCategory[]>([]);
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null);
  const [formState, setFormState] = useState<LearningContentFormState>(
    emptyLearningContentForm,
  );
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedContent = useMemo(
    () => contents.find((content) => content.id === selectedContentId) ?? null,
    [contents, selectedContentId],
  );
  const isCreatingContent = selectedContentId === null;

  useEffect(() => {
    loadLearningContents();
  }, []);

  async function loadLearningContents() {
    setErrorMessage("");

    try {
      const [nextContents, nextCategories] = await Promise.all([
        getManagedLearningContents(),
        getContentCategories(),
      ]);
      setContents(nextContents);
      setCategories(nextCategories);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "教學與文章資料讀取失敗。",
      );
    }
  }

  function handleSelectContent(content: ManagedLearningContent) {
    if (isCreatingContent) {
      return;
    }

    setSelectedContentId(content.id);
    setFormState(toFormState(content));
    setMessage("");
    setErrorMessage("");
  }

  function handleNewContent() {
    setSelectedContentId(null);
    setFormState(emptyLearningContentForm);
    setMessage("");
    setErrorMessage("");
  }

  function handleCancelNewContent() {
    const firstContent = contents[0] ?? null;
    setSelectedContentId(firstContent?.id ?? null);
    setFormState(firstContent ? toFormState(firstContent) : emptyLearningContentForm);
    setMessage("");
    setErrorMessage("");
  }

  async function handleSaveContent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");
    setErrorMessage("");

    try {
      if (selectedContentId) {
        await updateLearningContent(selectedContentId, toInput(formState));
        setMessage("教學與文章資料已更新。");
      } else {
        await createLearningContent(toInput(formState));
        setMessage("教學與文章資料已新增。");
      }

      await loadLearningContents();
      handleNewContent();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "教學與文章資料儲存失敗。",
      );
    } finally {
      setIsSaving(false);
    }
  }

  async function handleArchiveContent() {
    if (!selectedContentId) {
      return;
    }

    setIsSaving(true);
    setMessage("");
    setErrorMessage("");

    try {
      await archiveLearningContent(selectedContentId);
      await loadLearningContents();
      handleNewContent();
      setMessage("教學與文章資料已封存。");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "教學與文章資料封存失敗。",
      );
    } finally {
      setIsSaving(false);
    }
  }

  function handleSelectCategory(categoryId: string) {
    const category = categories.find((item) => item.id === categoryId);
    setFormState({
      ...formState,
      categoryId,
      categorySlug: category?.slug ?? formState.categorySlug,
    });
  }

  return (
    <>
      <section className="admin-card">
        <div className="admin-card__title">
          <h2>教學與文章列表</h2>
          <button type="button" onClick={handleNewContent} disabled={isCreatingContent}>
            新增內容
          </button>
        </div>
        <div className="admin-list">
          {contents.map((content) => (
            <button
              className={
                selectedContent?.id === content.id
                  ? "admin-list-item is-active"
                  : "admin-list-item"
              }
              type="button"
              key={content.id}
              onClick={() => handleSelectContent(content)}
              disabled={isCreatingContent}
            >
              <span>{content.title}</span>
              <small>
                {content.contentType} / {statusLabel(content.status)}
              </small>
            </button>
          ))}
        </div>
      </section>

      <section className="admin-card">
        <h2>{selectedContent ? "編輯內容" : "新增內容"}</h2>
        <form className="admin-form" onSubmit={handleSaveContent}>
          <label>
            類型
            <select
              value={formState.contentType}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  contentType: event.target.value as ContentType,
                })
              }
            >
              <option value="playlist">教學影片</option>
              <option value="article_link">文章連結</option>
            </select>
          </label>
          <label>
            分類
            <select
              value={formState.categoryId}
              onChange={(event) => handleSelectCategory(event.target.value)}
            >
              <option value="">未分類</option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            標題
            <input
              value={formState.title}
              onChange={(event) =>
                setFormState({ ...formState, title: event.target.value })
              }
              required
            />
          </label>
          <label>
            摘要
            <textarea
              rows={4}
              value={formState.summary}
              onChange={(event) =>
                setFormState({ ...formState, summary: event.target.value })
              }
              required
            />
          </label>
          <label>
            外部連結
            <input
              type="url"
              value={formState.externalUrl}
              onChange={(event) =>
                setFormState({ ...formState, externalUrl: event.target.value })
              }
            />
          </label>
          <label>
            原文連結
            <input
              type="url"
              value={formState.originalUrl}
              onChange={(event) =>
                setFormState({ ...formState, originalUrl: event.target.value })
              }
            />
          </label>
          <label>
            YouTube 播放清單 ID
            <input
              value={formState.youtubePlaylistId}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  youtubePlaylistId: event.target.value,
                })
              }
            />
          </label>
          <label>
            縮圖連結
            <input
              type="url"
              value={formState.thumbnailUrl}
              onChange={(event) =>
                setFormState({ ...formState, thumbnailUrl: event.target.value })
              }
            />
          </label>
          <label>
            內文
            <textarea
              rows={5}
              value={formState.body}
              onChange={(event) =>
                setFormState({ ...formState, body: event.target.value })
              }
            />
          </label>
          <label>
            Slug
            <input
              value={formState.slug}
              onChange={(event) =>
                setFormState({ ...formState, slug: event.target.value })
              }
            />
          </label>
          <label>
            分類 Slug
            <input
              value={formState.categorySlug}
              onChange={(event) =>
                setFormState({ ...formState, categorySlug: event.target.value })
              }
            />
          </label>
          <label>
            來源
            <input
              value={formState.source}
              onChange={(event) =>
                setFormState({ ...formState, source: event.target.value })
              }
            />
          </label>
          <label>
            發布標籤
            <input
              value={formState.publishedLabel}
              onChange={(event) =>
                setFormState({ ...formState, publishedLabel: event.target.value })
              }
            />
          </label>
          <label>
            標籤
            <input
              value={formState.tagsText}
              onChange={(event) =>
                setFormState({ ...formState, tagsText: event.target.value })
              }
            />
          </label>
          <label>
            排序
            <input
              type="number"
              value={formState.sortOrder}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  sortOrder: Number(event.target.value),
                })
              }
              required
            />
          </label>
          <label>
            色調
            <input
              value={formState.accent}
              onChange={(event) =>
                setFormState({ ...formState, accent: event.target.value })
              }
              required
            />
          </label>
          <label>
            狀態
            <select
              value={formState.status}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  status: event.target.value as ContentStatus,
                })
              }
            >
              <option value="draft">草稿</option>
              <option value="published">發布</option>
              <option value="archived">封存</option>
            </select>
          </label>

          {message ? <p className="admin-success">{message}</p> : null}
          {errorMessage ? <p className="admin-error">{errorMessage}</p> : null}

          <div className="admin-actions">
            <button type="submit" disabled={isSaving}>
              {isSaving ? "儲存中" : "儲存"}
            </button>
            {selectedContentId ? (
              <button
                className="admin-secondary-button"
                type="button"
                onClick={handleArchiveContent}
                disabled={isSaving}
              >
                封存
              </button>
            ) : (
              <button
                className="admin-secondary-button"
                type="button"
                onClick={handleCancelNewContent}
                disabled={isSaving}
              >
                取消新增
              </button>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
