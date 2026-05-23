import { Children, useEffect, useState, type MouseEvent, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getWebArticleBySlug, type WebArticle } from "../data/webArticles";

type LoadState = "loading" | "ready" | "not-found";
type ArticleHeading = {
  id: string;
  level: number;
  text: string;
};

function getArticlesHref() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${basePath}/articles`;
}

function getSafeMarkdownUrl(url: string | undefined): string | undefined {
  if (!url) {
    return undefined;
  }

  try {
    const parsedUrl = new URL(url, window.location.origin);
    return parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:"
      ? parsedUrl.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

function getNodeText(node: ReactNode): string {
  return Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }

      if (typeof child === "object" && child !== null && "props" in child) {
        return getNodeText((child as { props?: { children?: ReactNode } }).props?.children);
      }

      return "";
    })
    .join("");
}

function getArticleHeadings(markdown: string): ArticleHeading[] {
  const headingPattern = /^(#{2,4})\s+(.+)$/gm;

  return Array.from(markdown.matchAll(headingPattern), (match, index) => {
    const text = match[2]
      .replace(/[*_`~[\]()]/g, "")
      .trim();

    return {
      id: `article-heading-${index + 1}`,
      level: match[1].length,
      text,
    };
  });
}

function handleArticlesClick(event: MouseEvent<HTMLAnchorElement>) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  event.preventDefault();
  window.history.pushState(null, "", getArticlesHref());
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function ArticleDetailPage({ slug }: { slug: string }) {
  const [article, setArticle] = useState<WebArticle | null>(null);
  const [loadState, setLoadState] = useState<LoadState>("loading");

  useEffect(() => {
    let isMounted = true;

    async function loadArticle() {
      setLoadState("loading");

      const webArticle = getWebArticleBySlug(slug);
      if (isMounted) {
        setArticle(webArticle);
        setLoadState(webArticle ? "ready" : "not-found");
      }
    }

    loadArticle();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loadState === "loading") {
    return (
      <section className="article-section">
        <p className="article-status">文章載入中...</p>
      </section>
    );
  }

  if (loadState !== "ready" || !article?.body) {
    return (
      <section className="article-section article-detail">
        <a className="article-back-link" href={getArticlesHref()} onClick={handleArticlesClick}>
          返回文章列表
        </a>
        <div className="article-intro">
          <p className="eyebrow">Articles</p>
          <h2>找不到站內文章</h2>
          <p>
            這篇網頁文章尚未建立，或目前沒有可讀取的 Markdown 內容。
          </p>
        </div>
      </section>
    );
  }

  const headings = getArticleHeadings(article.body);

  function scrollToHeading(headingId: string) {
    document.getElementById(headingId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${headingId}`);
  }

  function renderHeading(level: 2 | 3 | 4, children: ReactNode) {
    const headingText = getNodeText(children).trim();
    const heading = headings.find(
      (item) => item.level === level && item.text === headingText,
    );
    const Tag = `h${level}` as const;

    return <Tag id={heading?.id}>{children}</Tag>;
  }

  return (
    <article className="article-section article-detail">
      <a className="article-back-link" href={getArticlesHref()} onClick={handleArticlesClick}>
        返回文章列表
      </a>
      <div className="article-intro">
        <p className="eyebrow">Articles</p>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </div>

      <div className="article-card__meta">
        <span>{article.source}</span>
        <span>{article.publishedLabel}</span>
      </div>

      <div className="article-detail__layout">
        {headings.length > 0 ? (
          <aside className="article-toc" aria-label="文章章節">
            <p>文章目錄</p>
            <div className="article-toc__list">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  type="button"
                  className={`article-toc__button article-toc__button--level-${heading.level}`}
                  onClick={() => scrollToHeading(heading.id)}
                >
                  {heading.text}
                </button>
              ))}
            </div>
          </aside>
        ) : null}

        <div className="article-detail__body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2({ children }) {
                return renderHeading(2, children);
              },
              h3({ children }) {
                return renderHeading(3, children);
              },
              h4({ children }) {
                return renderHeading(4, children);
              },
              a({ href, children }) {
                const safeHref = getSafeMarkdownUrl(href);
                return safeHref ? (
                  <a href={safeHref} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ) : (
                  <span>{children}</span>
                );
              },
              img({ src, alt }) {
                const safeSrc = getSafeMarkdownUrl(src);
                return safeSrc ? <img src={safeSrc} alt={alt ?? ""} /> : null;
              },
            }}
          >
            {article.body}
          </ReactMarkdown>
        </div>
      </div>

      {article.originalUrl ? (
        <div className="article-card__actions">
          <a
            className="article-card__secondary-link"
            href={article.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            閱讀原文
          </a>
        </div>
      ) : null}
    </article>
  );
}
