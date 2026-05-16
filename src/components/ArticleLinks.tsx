import { articleLinks } from "../data/articles";

export function ArticleLinks() {
  return (
    <section className="article-section" aria-labelledby="article-title">
      <div className="article-intro">
        <p className="eyebrow">Articles</p>
        <h2 id="article-title">文章連結</h2>
        <p>
          收錄 Flow Arts、火舞與道具練習相關的文章。點擊卡片可前往原文閱讀。
        </p>
      </div>

      <div className="article-grid">
        {articleLinks.map((article) => (
          <article
            className={`article-card article-card--${article.accent}`}
            key={article.id}
          >
            <div className="article-card__meta">
              <span>{article.source}</span>
              <span>{article.publishedLabel}</span>
            </div>

            <div className="article-card__copy">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>

            <div className="article-card__tags" aria-label="文章標籤">
              {article.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {/* 文章預覽採手動資料，外部連結只負責導到原文。 */}
            <a href={article.url} target="_blank" rel="noreferrer">
              閱讀文章
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
