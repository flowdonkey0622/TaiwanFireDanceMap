export type WebArticle = {
  slug: string;
  title: string;
  description: string;
  source: string;
  publishedLabel: string;
  originalUrl?: string;
  body: string;
};

const bodyTracingFrameworkBody = `> 本文目前為未完成轉譯稿，內容依 Google Doc 工作稿整理。

文章來源：[Body Tracing Framework](https://antispinner.gitbook.io/btf#the-form-of-weaves-and-mills)

by Ivan "Mel" Gorbunov  
譯者：FlowDonkey 社群

This article organizes reels, weaves, windmills, crossers, waist wraps, and meltdowns into a single framework based on position and timing, using an extensive system of schemes and beat graphs. The Body Tracing Framework is designed for poi, but will also be useful for many other flow arts props.

本文透過詳盡的圖示系統與節拍圖，根據位置與節奏將 reels、weaves、windmills、crossers、waist wraps 以及 meltdowns 整合至單一框架中。Body Tracing Framework 專為 poi 所設計，但對於許多其他流動藝術（flow arts）道具亦具參考價值。

## 前言

At this point, the number of poi tricks has grown so large that it is impossible for one person to learn them all. With limited resources, every poi spinner increasingly faces the challenge of finding the most effective learning program.

在此階段，poi 的招式數量已增長到個人無法全數掌握的程度。在資源有限的情況下，每位 poi 玩家都日益面臨如何尋找最有效學習計畫的挑戰。

Each trick provides us with a certain skill of varying value. Learning some opens the door to multiple variations, while others pave the way for entire categories with dozens of families and hundreds of tricks. To acquire the maximum amount of skill in the shortest time, it is essential to understand which moves are the most valuable. Classification helps us with this understanding.

每一項招式都承載著不同層次與價值的技巧。有些招式能作為通往多種變化的入口，而另一些則構成龐大體系的基礎，延伸出數十個家族與數百種動作。若想在最短時間內最大化技巧成長，理解哪些動作最具核心價值便顯得至關重要。而分類法，正是幫助我們建立這種理解的工具。

Modern poi classification is somewhat spontaneous, consisting of separate groups of tricks and families that are connected only conditionally. To systematize knowledge, we attempt to find links between the tricks we know. However, new families and even entire categories emerge every year, overturning our previous understanding. To build a clear structure, one would need to see all the "pieces" at once, which is simply impossible.

現代的 poi 分類法帶有某種自發性，由僅具備條件性關聯的獨立招式群組與家族所組成。為了系統化知識，我們試圖在已知的招式之間尋找連結。然而，每年都有新的家族甚至整個類別出現，推翻了我們以往的認知。若要建立一個清晰的結構，必須同時看見所有的「碎片」，而這在現實中是不可能的。

In this work, I would like to demonstrate an alternative approach. Instead of searching for connections between the tricks we already know, I will attempt to present a unified principle of constructing all moves, to see the system as a whole, including not only the moves we know but also those yet to be discovered.

在此項研究中，我希望展示一種不同的方法。我將嘗試提出一套建構所有動作的統一原則，而非僅是在已知的招式之間尋找聯繫；藉此將系統視為一個整體，其中不僅包含我們已知的動作，也涵蓋那些尚未被發見的動作。

This work is based on the fairly widespread hypothesis that any trick can be viewed as a combination of simpler elements, and at the most fundamental level, all tricks consist of a limited number of the same conditionally indivisible "building blocks." This work is dedicated to what these "building blocks" might be and how they are assembled into moves.

這項研究建立於一項廣泛存在的假設之上：任何招式皆可被拆解為更基礎的元素，而在最底層的結構中，所有動作其實都是由有限且在特定條件下不可再分的共同「積木」所構成。

本文的核心，正是試圖探討這些「積木」究竟為何，以及它們如何被組合、延伸，進而形成各式各樣的動作。

Attempting to create such a deep classification for all poi would be too ambitious of a task, so I have focused my research on the narrow scope of one specific direction - body tracing in a wall plane configuration of planes - and only one main method of poi manipulation: spinning, without pendulums, rolls, or tosses. As you will see, even this is enough to once again convince us of the endless possibilities that poi offers.

試圖為所有 poi 建立如此深層的分類體系，無疑是一項過於龐大的工程。因此，我將研究範圍聚焦於一個更明確且有限的方向：牆面平面（wall plane）配置下的身體描繪（body tracing）。並僅探討 poi 最主要的操作形式之一：旋轉（spinning），不涵蓋擺盪（pendulums）、滾動（rolls）與拋接（tosses）。

然而，正如您即將看到的，即便只侷限於這樣的範圍，依然足以再次展現 poi 所蘊含的近乎無限的可能性。

Due to the complexity and depth of the research, this work will be more interesting to advanced poi spinners to identify areas for growth, and to experienced instructors for creating the most balanced body tracing training programs.

由於研究的複雜性與深度，這項工作對於進階 poi 玩家在識別成長空間方面將更具趣味性，同時也能為資深教練在制定最均衡的身體描繪訓練課程時提供參考。`;

export const webArticles: WebArticle[] = [
  {
    slug: "body-tracing-framework",
    title: "Body Tracing Framework",
    description:
      "將 Body Tracing Framework 的轉譯工作稿整理為站內 Markdown 網頁。",
    source: "GitBook",
    publishedLabel: "轉譯文章",
    originalUrl: "https://antispinner.gitbook.io/btf",
    body: bodyTracingFrameworkBody,
  },
];

export function getWebArticleBySlug(slug: string): WebArticle | null {
  return webArticles.find((article) => article.slug === slug) ?? null;
}
