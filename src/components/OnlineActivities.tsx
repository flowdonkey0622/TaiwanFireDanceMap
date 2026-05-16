import { onlineActivities } from "../data/onlineActivities";

export function OnlineActivities() {
  return (
    <section className="online-section" aria-labelledby="online-title">
      <div className="online-intro">
        <p className="eyebrow">Online Events</p>
        <h2 id="online-title">網路活動分享</h2>
        <p>收錄不限定縣市的線上挑戰、影片招募與社群活動。</p>
      </div>

      <div className="online-grid">
        {onlineActivities.map((activity) => (
          <article
            className={`online-card online-card--${activity.accent}`}
            key={activity.id}
          >
            <div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>

            {activity.period ? (
              <p className="online-card__period">{activity.period}</p>
            ) : null}

            {/* 外部活動連結集中在資料檔維護，元件只負責穩定呈現卡片。 */}
            <div className="online-card__actions">
              <a
                href={activity.primaryLink.url}
                target="_blank"
                rel="noreferrer"
              >
                {activity.primaryLink.label}
              </a>
              {activity.secondaryLink ? (
                <a
                  href={activity.secondaryLink.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {activity.secondaryLink.label}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
