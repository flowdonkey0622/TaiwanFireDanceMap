import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  archiveOnlineActivity,
  createOnlineActivity,
  getManagedOnlineActivities,
  updateOnlineActivity,
  type ManagedOnlineActivity,
  type OnlineActivityInput,
  type OnlineActivityStatus,
} from "../services/onlineActivities";

const emptyOnlineActivityForm: OnlineActivityInput = {
  slug: "",
  title: "",
  description: "",
  period: "",
  primaryLinkLabel: "",
  primaryLinkUrl: "",
  secondaryLinkLabel: "",
  secondaryLinkUrl: "",
  accent: "ember",
  sortOrder: 0,
  status: "draft",
};

function statusLabel(status: OnlineActivityStatus): string {
  if (status === "published") {
    return "已發布";
  }

  if (status === "archived") {
    return "已封存";
  }

  return "草稿";
}

function toFormState(activity: ManagedOnlineActivity): OnlineActivityInput {
  return {
    slug: activity.slug,
    title: activity.title,
    description: activity.description,
    period: activity.period,
    primaryLinkLabel: activity.primaryLinkLabel,
    primaryLinkUrl: activity.primaryLinkUrl,
    secondaryLinkLabel: activity.secondaryLinkLabel,
    secondaryLinkUrl: activity.secondaryLinkUrl,
    accent: activity.accent,
    sortOrder: activity.sortOrder,
    status: activity.status,
  };
}

export function AdminOnlineActivities() {
  const [activities, setActivities] = useState<ManagedOnlineActivity[]>([]);
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [formState, setFormState] = useState<OnlineActivityInput>(
    emptyOnlineActivityForm,
  );
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedActivity = useMemo(
    () => activities.find((activity) => activity.id === selectedActivityId) ?? null,
    [activities, selectedActivityId],
  );
  const isCreatingActivity = selectedActivityId === null;

  useEffect(() => {
    loadOnlineActivities();
  }, []);

  async function loadOnlineActivities() {
    setErrorMessage("");

    try {
      const nextActivities = await getManagedOnlineActivities();
      setActivities(nextActivities);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "網路活動資料讀取失敗。",
      );
    }
  }

  function handleSelectActivity(activity: ManagedOnlineActivity) {
    if (isCreatingActivity) {
      return;
    }

    setSelectedActivityId(activity.id);
    setFormState(toFormState(activity));
    setMessage("");
    setErrorMessage("");
  }

  function handleNewActivity() {
    setSelectedActivityId(null);
    setFormState(emptyOnlineActivityForm);
    setMessage("");
    setErrorMessage("");
  }

  function handleCancelNewActivity() {
    const firstActivity = activities[0] ?? null;
    setSelectedActivityId(firstActivity?.id ?? null);
    setFormState(firstActivity ? toFormState(firstActivity) : emptyOnlineActivityForm);
    setMessage("");
    setErrorMessage("");
  }

  async function handleSaveActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");
    setErrorMessage("");

    try {
      if (selectedActivityId) {
        await updateOnlineActivity(selectedActivityId, formState);
        setMessage("網路活動資料已更新。");
      } else {
        await createOnlineActivity(formState);
        setMessage("網路活動資料已新增。");
      }

      await loadOnlineActivities();
      handleNewActivity();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "網路活動資料儲存失敗。",
      );
    } finally {
      setIsSaving(false);
    }
  }

  async function handleArchiveActivity() {
    if (!selectedActivityId) {
      return;
    }

    setIsSaving(true);
    setMessage("");
    setErrorMessage("");

    try {
      await archiveOnlineActivity(selectedActivityId);
      await loadOnlineActivities();
      handleNewActivity();
      setMessage("網路活動資料已封存。");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "網路活動資料封存失敗。",
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <>
      <section className="admin-card">
        <div className="admin-card__title">
          <h2>網路活動列表</h2>
          <button
            type="button"
            onClick={handleNewActivity}
            disabled={isCreatingActivity}
          >
            新增網路活動
          </button>
        </div>
        <div className="admin-list">
          {activities.map((activity) => (
            <button
              className={
                selectedActivity?.id === activity.id
                  ? "admin-list-item is-active"
                  : "admin-list-item"
              }
              type="button"
              key={activity.id}
              onClick={() => handleSelectActivity(activity)}
              disabled={isCreatingActivity}
            >
              <span>{activity.title}</span>
              <small>{statusLabel(activity.status)}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="admin-card">
        <h2>{selectedActivity ? "編輯網路活動" : "新增網路活動"}</h2>
        <form className="admin-form" onSubmit={handleSaveActivity}>
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
            描述
            <textarea
              rows={4}
              value={formState.description}
              onChange={(event) =>
                setFormState({ ...formState, description: event.target.value })
              }
              required
            />
          </label>
          <label>
            期間
            <input
              value={formState.period}
              onChange={(event) =>
                setFormState({ ...formState, period: event.target.value })
              }
            />
          </label>
          <label>
            主要連結文字
            <input
              value={formState.primaryLinkLabel}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  primaryLinkLabel: event.target.value,
                })
              }
              required
            />
          </label>
          <label>
            主要連結
            <input
              type="url"
              value={formState.primaryLinkUrl}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  primaryLinkUrl: event.target.value,
                })
              }
              required
            />
          </label>
          <label>
            次要連結文字
            <input
              value={formState.secondaryLinkLabel}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  secondaryLinkLabel: event.target.value,
                })
              }
            />
          </label>
          <label>
            次要連結
            <input
              type="url"
              value={formState.secondaryLinkUrl}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  secondaryLinkUrl: event.target.value,
                })
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
            狀態
            <select
              value={formState.status}
              onChange={(event) =>
                setFormState({
                  ...formState,
                  status: event.target.value as OnlineActivityStatus,
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
            {selectedActivityId ? (
              <button
                className="admin-secondary-button"
                type="button"
                onClick={handleArchiveActivity}
                disabled={isSaving}
              >
                封存
              </button>
            ) : (
              <button
                className="admin-secondary-button"
                type="button"
                onClick={handleCancelNewActivity}
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
