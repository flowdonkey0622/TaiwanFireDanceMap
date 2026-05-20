import { ArticleLinks } from "../components/ArticleLinks";

export function ArticlesPage() {
  // 優先讀取 Supabase 已發布文章；設定缺少或讀取失敗時由元件回退靜態資料。
  return <ArticleLinks />;
}
