export type WebArticle = {
  slug: string;
  title: string;
  description: string;
  source: string;
  publishedLabel: string;
  originalUrl?: string;
  body: string;
};

const bodyTracingFrameworkBody = `> 本文目前為未完成轉譯稿，內容依 Google Doc 工作稿整理。文中保留部分英文原文，方便後續校對與逐段補完。

文章來源：[Body Tracing Framework](https://antispinner.gitbook.io/btf#the-form-of-weaves-and-mills)

by Ivan "Mel" Gorbunov  
譯者：FlowDonkey 社群（翻譯已經過原文作者同意）

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
這項研究建立於一項廣泛存在的假設之上：任何招式皆可被拆解為更基礎的元素，而在最底層的結構中，所有動作其實都是由有限且在特定條件下不可再分的共同「**積木**」所構成。  
本文的核心，正是試圖探討這些「**積木**」究竟為何，以及它們如何被組合、延伸，進而形成各式各樣的動作。

Attempting to create such a deep classification for all poi would be too ambitious of a task, so I have focused my research on the narrow scope of one specific direction - body tracing in a wall plane configuration of planes - and only one main method of poi manipulation: spinning, without pendulums, rolls, or tosses. As you will see, even this is enough to once again convince us of the endless possibilities that poi offers.  
試圖為所有 poi 建立如此深層的分類體系，無疑是一項過於龐大的工程。因此，我將研究範圍聚焦於一個更明確且有限的方向：正面（wall plane）配置下的 Body Tracing。並僅探討 poi 最主要的操作形式之一：旋轉（spinning），不涵蓋擺盪（pendulums）、滾動（rolls）與拋接（tosses）。  
然而，正如您即將看到的，即便只侷限於這樣的範圍，依然足以再次展現 poi 所蘊含的近乎無限的可能性。

Due to the complexity and depth of the research, this work will be more interesting to advanced poi spinners to identify areas for growth, and to experienced instructors for creating the most balanced body tracing training programs.  
由於研究的複雜性與深度，這項工作對於進階 poi 玩家在識別成長空間方面將更具趣味性，同時也能為資深教練在制定最均衡的身體描繪訓練課程時提供參考。

## 研究領域

All body tracing moves can be divided into several body zones where they are performed: the torso, head, arms, and legs (Fig. 1). This research focuses only on the central torso zone, which includes all areas below and above the shoulders (including behind the back) and the trajectories between them. By distinguishing the area above the head into a separate zone, the torso zone forms a fully symmetrical cross shape. Therefore, I will refer to it as the "body cross" in the following sections.  
所有 Body Tracing 動作皆可根據其執行的身體區域分為：軀幹、頭部、手臂與腿部（如圖 1）。本研究僅聚焦於中央的軀幹區域，該區域包含肩膀上方與下方的所有區域（含背後）以及其間的軌跡。透過將頭頂上方區域劃分為獨立區域，軀幹區域形成了一個完全對稱的十字形。  
因此，在後續章節中，我將其稱為「**身體十字**」（body cross）。

![圖 1. Body Tracing 中的身體分區](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FzHbTBKzR0j5jWbp5Uhu1%252FFig%25201.png%3Falt%3Dmedia%26token%3Dcd42e614-f89e-4dbe-8371-e4c93f5912c9&width=768&dpr=3&quality=100&sign=9e76fad9&sv=2)
_圖 1. Body Tracing 中的身體分區_


## 系統化原則

All moves consist of a limited set of unique parts, like building blocks, from which we can construct anything. Based on this, we can describe only these fundamental "proto-elements" and the principles of combining them into basic combinations. This allows any complex move to be viewed as a combination of previously described components.  
所有動作皆由一組有限且獨特的部件組成，如同積木一般，我們可以藉此建構出任何動作。基於此點，我們只需描述這些基本的「**原型元素**」（proto-elements）以及將其組合成基礎組合的原則。這使得任何複雜的動作都能被視為先前所述組件的結合。

In the system I propose, all poi trajectories within the body cross zone can be divided into uniform segments of trajectories connecting the front and back planes - reels (Fig. 2). In other words, any move within the body cross can be represented as combinations of reels in different positions. This term is not highly specific, so let's break it down from the basics.  
在我提出的系統中，身體十字區域（body cross zone）內的所有 poi 軌跡，皆可劃分為連接前後平面的均勻軌跡段，也就是繞環（reels，如圖 2 所示）。  
換言之，身體十字區域內的任何動作，都可以表示為不同位置繞環的組合。這個術語並非高度專指，因此讓我們從基礎開始拆解。

![圖 2. 繞環軌跡](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FfTArBUQGULf2jEpAEhXo%252FFig%25202.png%3Falt%3Dmedia%26token%3Da6a6fec6-dcc7-452f-a74e-c3cc84d3ff04&width=768&dpr=3&quality=100&sign=ff4c8a4c&sv=2)
_圖 2. 繞環軌跡_

A reel is a cyclical movement in a wall plane configuration where the poi continuously moves back and forth between the front and back planes, making one rotation in each plane, and from the poi spinner's perspective, drawing a figure resembling an infinity symbol. Put simply, a reel can be described as a single-poi weave.  
繞環（reel）是一種處於牆面平面（wall plane）配置下的週期性運動，其中 poi 在前平面與後平面之間持續來回移動，並在每個平面各旋轉一圈；從 poi 操作者的視角來看，其軌跡描繪出一個類似無限符號（∞）的形狀。簡單來說，reel 可被描述為單 poi 的 weave。

The simplest combination of two reels, one with each hand, is a two-beat weave. It's important to note that when combining two reels, we can obtain combinations with different directions and timings. This means that in this work, a two-beat weave is not necessarily a same-direction move, as is traditionally classified.  
最簡單的雙手組合，是雙手各持一顆 poi 所形成的二拍 weave（two-beat weave）。值得注意的是，當組合兩個 reels 時，我們可以得到不同方向與時序的組合。這意味著在本研究中，二拍 weave 並不一定如傳統分類般，必然屬於同向運動。

> 除了二拍 weave 之外，還有三拍、五拍，甚至七拍 weave。然而，根據本文提出的邏輯，任何此類 weave 皆可被視為二拍 weave 與不改變平面的空轉（empty rotations）之組合。因此，在本研究中，我們將僅聚焦於二拍 weave，將其視為 weave 家族中最基本的形態。

In summary, all moves within the body cross zone can be represented as combinations consisting of a single proto-element performed with a single poi - the reel in various positions and directions. The simplest combination of two reels is the two-beat weave. Now, let's dive deeper into analyzing reels and explore the different positions in which we can perform them.  
總結而言，所有在身體十字區域（body cross zone）內的動作，皆可表示為由單一原型元素（proto-element）搭配單顆 poi 所組成的組合，也就是處於各種位置與方向的 reel。兩組 reels 最簡單的組合即為二拍 weave。現在，讓我們深入分析 reels，並探索我們可以執行 reels 的不同位置。

## Reels（繞環）
### Reels 的定位
#### 圖形定位圖簡介

In the body cross, there are only 4 areas where you can perform reels: two above the shoulders and two below the shoulders. In these 4 areas, each hand can occupy 6 unique positions (Fig. 3):  
在身體十字（body cross）中，僅有 4 個區域可以進行 reels：兩個在肩膀上方，兩個在肩膀下方。在這 4 個區域中，每隻手可以佔據 6 個獨特的位置（圖 3）。

| Position | Description | 中文說明 |
| --- | --- | --- |
| High native | above its own shoulder | 自身肩膀上方 |
| Low native | below its own shoulder | 自身肩膀下方 |
| High non-native | above the opposite shoulder | 對側肩膀上方 |
| Low non-native | below the opposite shoulder | 對側肩膀下方 |
| High back | behind the head | 頭部後方 |
| Low back | behind the back | 背後 |

![圖 3. 身體十字區域中手部位置的變化及其在圖形定位系統中的符號表示](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F8NEBXn6ZRol3USH0hfes%252FFig%25203.png%3Falt%3Dmedia%26token%3D5af699cb-3ea8-449a-8d58-138b96d39204&width=768&dpr=3&quality=100&sign=f5f16153&sv=2)  
_圖 3. 身體十字區域中手部位置的變化及其在圖形定位系統中的符號表示_


Any other positions for weaves within the body cross zone can be considered simply alternative forms of the ones listed above. For example, the positions under the armpit and at the hip are in the same area, and the difference between them doesn't affect the principle of the move - only its visual form.  
身體十字區域內 weave 的任何其他位置，皆可視為上述位置的替代形式。例如，腋下與髖部的位置處於同一區域，兩者之間的差異並不影響動作原理，僅影響其視覺形態。

To further explore the variety of combinations of these reel positions for both hands, we will convert our analysis into a graphical notation system - positioning diagrams.  
為了進一步探討雙手 reel 位置的多樣化組合，我們將分析轉換為圖形標記系統，也就是位置圖（positioning diagrams）。

We will depict the body cross zone as a cross, with the arms' positions marked between its arms, using three symbols to indicate position:  
我們將身體十字區域描繪為一個十字，並在其兩臂之間標註手臂的位置，使用三種符號來表示位置：

- ⭘：same side，同側。
- ╋：opposite side in front of the body，身體前方的對側。
- ━：opposite side behind the back/head，背部或頭部後方的對側。

Thus, the notation for all possible positions of the right hand will look as shown in the diagram (Fig. 3). All possible positions for the left hand are recorded in the same way, but mirrored from left to right.  
因此，右手所有可能位置的標記方式將如圖（圖 3）所示。左手所有可能的位置也以同樣的方式記錄，但採左右鏡像對稱。

> 此標記系統使我們能夠在不依賴顏色區分的情況下辨別左手與右手。然而，為了在本研究中更易於察覺，我們將左手標記為藍色，右手標記為粉紅色。`;

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
