export type ArticleLink = {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  publishedLabel: string;
  tags: string[];
  accent: "ember" | "sky" | "sun";
};

// 手動新增文章時，只要在這個陣列新增一筆資料即可。
// 預覽文字採靜態維護，避免外部平台阻擋抓取時造成頁面顯示不穩。
export const articleLinks: ArticleLink[] = [
  {
    id: "contact-staff-semiotics-a0",
    title: "接觸棍符號學 a₀",
    description:
      "以接觸棍的動作、路徑與符號感作為切入，整理流動藝術中的觀察方式與概念筆記。",
    url: "https://medium.com/@spider1239999/接觸棍符號學-a₀-33c33aef7a98",
    source: "Medium",
    publishedLabel: "文章連結",
    tags: ["接觸棍", "符號學", "Flow Arts"],
    accent: "ember",
  },
  {
    id: "body-tracing-framework",
    title: "Body Tracing Framework",
    description:
      "將 reels、weaves、windmills、crossers、腰繞與 meltdowns 等動作，依據位置與時序節奏整理進同一套框架，並透過 schemes 與 beat graphs 分析說明。雖然最初為 poi 設計，也能作為其他 Flow Arts 道具的參考。",
    url: "https://antispinner.gitbook.io/btf",
    source: "GitBook",
    publishedLabel: "框架文章",
    tags: ["Poi", "Body Tracing", "Flow Arts"],
    accent: "sky",
  },
];
