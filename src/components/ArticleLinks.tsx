import { useEffect, useState } from "react";
import { articleLinks } from "../data/articles";
import { isSupabaseConfigured } from "../lib/supabase";
import { getPublishedArticleLinks } from "../services/learningContents";
import type { ArticleLink } from "../data/articles";

export function ArticleLinks() {
  const [articles, setArticles] = useState<ArticleLink[]>(articleLinks);

  useEffect(() => {
    let isMounted = true;

    async function loadArticles() {
      if (!isSupabaseConfigured) {
        return;
      }

      try {
        const nextArticles = await getPublishedArticleLinks();
        if (isMounted && nextArticles.length > 0) {
          setArticles(nextArticles);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadArticles();

    return () => {
      isMounted = false;
    };
  }, []);

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
        {articles.map((article) => (
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

            <div className="article-card__actions">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                閱讀文章
              </a>
              {article.originalUrl ? (
                <a
                  className="article-card__secondary-link"
                  href={article.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  閱讀原文
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
