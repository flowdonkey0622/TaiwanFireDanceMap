export type WebArticle = {
  slug: string;
  title: string;
  description: string;
  source: string;
  publishedLabel: string;
  originalUrl?: string;
  body: string;
};

const bodyTracingFrameworkBody = `> 本文目前為翻譯完成後的整理稿，內容依 Google Doc 工作稿轉為站內 Markdown。仍可能有詞彙、圖說與細節需後續校對。

文章來源：[Body Tracing Framework](https://antispinner.gitbook.io/btf#the-form-of-weaves-and-mills)

by Ivan "Mel" Gorbunov  
譯者：FlowDonkey 社群（翻譯已經過原文作者同意）

This article organizes reels, weaves, windmills, crossers, waist wraps, and meltdowns into a single framework based on position and timing, using an extensive system of schemes and beat graphs. The Body Tracing Framework is designed for poi, but will also be useful for many other flow arts props.  
本文透過詳盡的圖示系統與節拍圖，根據位置與節奏將 reels、weaves、windmills、crossers、waist wraps 以及meltdowns 整合至單一框架中。Body Tracing Framework 專為 poi 所設計，但對於許多其他流動藝術（flow arts）道具亦具參考價值。

## 前言

At this point, the number of poi tricks has grown so large that it is impossible for one person to learn them all. With limited resources, every poi spinner increasingly faces the challenge of finding the most effective learning program.  
在此階段，poi 的招式數量已增長到個人無法全數掌握的程度。在資源有限的情況下，每位 poi 玩家都日益面臨如何尋找最有效學習計畫的挑戰。

Each trick provides us with a certain skill of varying value. Learning some opens the door to multiple variations, while others pave the way for entire categories with dozens of families and hundreds of tricks. To acquire the maximum amount of skill in the shortest time, it is essential to understand which moves are the most valuable. Classification helps us with this understanding.  
每一個 poi 招式，都會帶來不同程度的技巧養成。有些招式學會後，能延伸出許多變化；有些則是整個招式系統的基礎，能通往數十個動作家族與上百種變體。如果想在有限的時間內有效進步，就必須理解哪些動作最值得優先學習。而分類系統，正是幫助我們做出這種判斷的工具。

Modern poi classification is somewhat spontaneous, consisting of separate groups of tricks and families that are connected only conditionally. To systematize knowledge, we attempt to find links between the tricks we know. However, new families and even entire categories emerge every year, overturning our previous understanding. To build a clear structure, one would need to see all the "pieces" at once, which is simply impossible.  
現代 poi 的招式分類，其實多半是隨著玩家社群自然發展出來的。不同招式群與家族之間雖然彼此有關聯，但這些關聯往往不夠明確，也不一定能形成完整的系統。  
為了讓知識更有條理，我們會試著從已知招式之間找出連結；但每一年，新的招式家族甚至全新的分類都可能出現，進一步改變我們原本對 poi 技術結構的理解。如果想建立一套清楚的分類架構，理想上必須同時看見所有的「**拼圖碎片**」。但在現實中，這幾乎不可能做到。

In this work, I would like to demonstrate an alternative approach. Instead of searching for connections between the tricks we already know, I will attempt to present a unified principle of constructing all moves, to see the system as a whole, including not only the moves we know but also those yet to be discovered.  
在此項研究中，我希望展示一種不同的方法。我將嘗試提出一套建構所有動作的統一原則，而非僅是在已知的招式之間尋找聯繫；藉此將系統視為一個整體，其中不僅包含我們已知的動作，也涵蓋那些尚未被發見的動作。

This work is based on the fairly widespread hypothesis that any trick can be viewed as a combination of simpler elements, and at the most fundamental level, all tricks consist of a limited number of the same conditionally indivisible "building blocks." This work is dedicated to what these "building blocks" might be and how they are assembled into moves.  
這項研究建立於一項廣泛存在的假設之上：任何招式皆可被拆解為更基礎的元素，而在最底層的結構中，所有動作其實都是由有限且在特定條件下不可再分的共同「**拼圖碎片**」所構成。  
本文的核心，正是試圖探討這些「**拼圖碎片**」究竟為何，以及它們如何被組合、延伸，進而形成各式各樣的動作。

Attempting to create such a deep classification for all poi would be too ambitious of a task, so I have focused my research on the narrow scope of one specific direction—body tracing in a wall plane configuration of planes—and only one main method of poi manipulation: spinning, without pendulums, rolls, or tosses. As you will see, even this is enough to once again convince us of the endless possibilities that poi offers.  
試圖為所有 poi 建立如此深層的分類體系，無疑是一項過於龐大的工程。因此，我將研究範圍聚焦於一個更明確且有限的方向：**正面**（wall plane）配置下的 Body Tracing。  
並僅探討 poi 最主要的操作形式之一：**旋轉**（spinning）、**不涵蓋擺盪**（pendulums）、**滾動**（rolls）與**拋接**（tosses）。

然而，正如您即將看到的，即便只侷限於這樣的範圍，依然足以再次展現 poi 所蘊含的近乎無限的可能性。

Due to the complexity and depth of the research, this work will be more interesting to advanced poi spinners to identify areas for growth, and to experienced instructors for creating the most balanced body tracing training programs.  
由於這份研究內容較深入，也帶有一定的技術分析性，因此會更適合已經有基礎的 poi 玩家閱讀，幫助他們整理自己的技術盲點，找到下一步可以深入練習的方向。  
對於有教學經驗的老師或社群帶領者來說，這套框架也能作為設計 Body Tracing 課程與訓練菜單時的參考，讓學習內容不只是累積招式，而是更有**系統地建立身體路徑**、時序與**動作結構**的理解。

## 研究領域  
All body tracing moves can be divided into several body zones where they are performed: the torso, head, arms, and legs (Fig. 1).This research focuses only on the central torso zone, which includes all areas below and above the shoulders (including behind the back) and the trajectories between them. By distinguishing the area above the head into a separate zone, the torso zone forms a fully symmetrical cross shape.Therefore, I will refer to it as the "body cross" in the following sections.  
所有 Body Tracing 動作皆可根據其執行的身體區域分為：軀幹、頭部、手臂與腿部（如圖 1）。
本研究僅聚焦於中央的軀幹區域，該區域包含肩膀上方與下方的所有區域（含背後）以及其間的軌跡。透過將頭頂上方區域劃分為獨立區域，軀幹區域形成了一個完全對稱的十字形。  
因此，在後續章節中，我將其稱為「**身體十字**」（body cross）。  

![圖 1. 身體追蹤中的身體分區](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FzHbTBKzR0j5jWbp5Uhu1%252FFig%25201.png%3Falt%3Dmedia%26token%3Dcd42e614-f89e-4dbe-8371-e4c93f5912c9&width=768&dpr=3&quality=100&sign=9e76fad9&sv=2)
_圖 1. 身體追蹤中的身體分區_

## 系統化原則

All moves consist of a limited set of unique parts, like building blocks, from which we can construct anything. Based on this, we can describe only these fundamental "proto-elements" and the principles of combining them into basic combinations. This allows any complex move to be viewed as a combination of previously described components.  
所有動作皆由一組有限且獨特的部件組成，如同積木一般，我們可以藉此建構出任何動作。基於此點，我們只需描述這些基本的「**原型元素**」（proto-elements）以及將其組合成基礎組合的原則。  
這使得任何複雜的動作都能被視為先前所述組件的結合。

In the system I propose, all poi trajectories within the body cross zone can be divided into uniform segments of trajectories connecting the front and back planes—reels (Fig. 2). In other words, any move within the body cross can be represented as combinations of reels in different positions. This term is not highly specific, so let’s break it down from the basics.  
在我提出的系統中，**身體交叉區域**（body cross zone）內的所有 poi 軌跡，皆可劃分為連接前後平面的均勻軌跡段—轉軸動作（reels，如圖 2 所示）。  
換言之，身體交叉區域內的任何動作，都可以表示為不同位置轉軸動作的組合。這個術語並非高度專指，因此讓我們從基礎開始拆解。

![圖 2. 轉軸動作軌跡](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FfTArBUQGULf2jEpAEhXo%252FFig%25202.png%3Falt%3Dmedia%26token%3Da6a6fec6-dcc7-452f-a74e-c3cc84d3ff04&width=768&dpr=3&quality=100&sign=ff4c8a4c&sv=2)
_圖 2. 轉軸動作軌跡_

A reel is a cyclical movement in a wall plane configuration where the poi continuously moves back and forth between the front and back planes, making one rotation in each plane, and from the poi spinner's perspective, drawing a figure resembling an infinity symbol. Put simply, a reel can be described as a single-poi weave.  
**轉軸動作**（reel）是一種處於牆面平面（wall plane）配置下的週期性運動，其中 poi 在前平面與後平面之間持續來回移動，並在每個平面各旋轉一圈；從 poi 操縱者的視角來看，其軌跡描繪出一個類似無限符號（∞）的形狀。  
簡單來說，轉軸動作可被描述為單 poi 的編織動作（weave）。

The simplest combination of two reels, one with each hand, is a two-beat weave. It's important to note that when combining two reels, we can obtain combinations with different directions and timings. This means that in this work, a two-beat weave is not necessarily a same-direction move, as is traditionally classified.  
最簡單的雙環組合為雙手各持一環進行「**二拍編織**」（two-beat weave）。值得注意的是，當組合兩個環時，我們可以得到不同方向與時序的組合。這意味著在本研究中，二拍編織並不一定如傳統分類般，必然屬於同向運動。

> In addition to two-beat weaves, there are three-beat, five-beat, and even seven-beat weaves. However, following the proposed logic, any of these can be viewed as combinations of two-beat weaves and empty rotations without changing planes. Therefore, in this work, we will focus only on two-beat weaves as the most fundamental form within the family of weaves.  
 除了二拍交織（two-beat weaves）之外，還有三拍、五拍，甚至七拍交織。然而，根據本文提出的邏輯，任何此類交織皆可被視為二拍交織與不改變平面的空轉（empty rotations）之組合。因此，在本研究中，我們將僅聚焦於二拍交織，將其視為交織家族中最基本的形態。

In summary, all moves within the body cross zone can be represented as combinations consisting of a single proto-element performed with a single poi—the reel in various positions and directions. The simplest combination of two reels is the two-beat weave. Now, let’s dive deeper into analyzing reels and explore the different positions in which we can perform them.  
總結而言，所有在身體交叉區域（body cross zone）內的動作，皆可表示為由單一元素（proto-element）搭配單顆 poi 所組成的組合—即處於各種位置與方向的繞環（reel）。兩組繞環最簡單的組合即為二拍編織（two-beat weave）。現在，讓我們深入分析繞環，並探索我們可以執行繞環的不同位置。

## Reels（繞環）

### Positioning of reels | Reels 的定位

#### Introduction to graphic positioning diagrams | 圖形定位圖簡介

In the body cross, there are only 4 areas where you can perform reels: two above the shoulders and two below the shoulders. In these 4 areas, each hand can occupy 6 unique positions (Fig. 3):  
在身體十字（body cross）中，僅有 4 個區域可以進行繞環（reels）：兩個在肩膀上方，兩個在肩膀下方。在這 4 個區域中，每隻手可以佔據 6 個獨特的位置（圖 3）。

| Position | Description | 中文說明 |
| --- | --- | --- |
| High native | above its own shoulder | 在其自身肩膀上方 |
| Low native | below its own shoulder | 在其自身肩膀下方 |
| High non-native | above the opposite shoulder | 高於對側肩膀 |
| Low non-native | below the opposite shoulder | 低於對側肩膀 |
| High back | Behind the head | 頭部後方 |
| Low back | Behind the back | 背後 |

![圖 3. 身體十字區域中手部位置的變化及其在圖形定位系統中的符號表示](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F8NEBXn6ZRol3USH0hfes%252FFig%25203.png%3Falt%3Dmedia%26token%3D5af699cb-3ea8-449a-8d58-138b96d39204&width=768&dpr=3&quality=100&sign=f5f16153&sv=2)
_圖 3. 身體十字區域中手部位置的變化及其在圖形定位系統中的符號表示_

Any other positions for weaves within the body cross zone can be considered simply alternative forms of the ones listed above. For example, the positions under the armpit and at the hip are in the same area, and the difference between them doesn’t affect the principle of the move—only its visual form.  
身體十字區域內編織（weaves）的任何其他位置，皆可視為上述位置的替代形式。

例如，腋下與髖部的位置處於同一區域，兩者之間的差異並不影響動作原理，僅影響其視覺形態。

To further explore the variety of combinations of these reel positions for both hands, we will convert our analysis into a graphical notation system—positioning diagrams.  
為了進一步探討雙手捲軸位置的多樣化組合，我們將分析轉換為圖形標記系統—位置圖（positioning diagrams）。

We will depict the body cross zone as a cross, with the arms' positions marked between its arms, using three symbols to indicate position:  
我們將身體交叉區域描繪為一個十字，並在其兩臂之間標註手臂的位置，使用三種符號來表示位置：

* ⭘：same side：同側，
* ╋：opposite side in front of the body：身體前方的對側，
* ━：opposite side behind the back/head：背部/頭部後方的對側。

Thus, the notation for all possible positions of the right hand will look as shown in the diagram (Fig. 3). All possible positions for the left hand are recorded in the same way, but mirrored from left to right.  
因此，右手所有可能位置的標記方式將如圖（圖 3）所示。左手所有可能的位置也以同樣的方式記錄，但採左右鏡像對稱。

> This notation system allows us to distinguish between the left and right hand without color differentiation. However, for easier perception in this research, we will mark the left hand in blue and the right hand in pink.  
 此標記系統使我們能夠在不依賴顏色區分的情況下辨別左手與右手。然而，為了在本研究中更易於察覺，我們將左手標記為藍色，右手標記為粉紅色。

#### Two-handed positions | 雙手位置

Knowing all the possible positions of each hand, we can create a matrix of positioning options for both hands by placing the positions of the right hand horizontally and the left hand vertically, grouping similar combinations together (Fig. 4).

It becomes clear that all the groups along the diagonal from the top left corner are completely symmetrical, while the other groups have asymmetrical positions with mirrored "twins" on the other side of the diagonal. These paired groups are highlighted in the same color on the diagram.  
在掌握每隻手所有可能的位置後，我們便能建立一個雙手定位選項的矩陣：將右手的位置沿水平方向排列，左手的位置沿垂直方向排列，並把相似的組合歸類在一起（圖 4）。

我們可以清楚看見，從左上角延伸至右下角對角線上的所有群組皆為完全對稱；而其餘群組則屬於非對稱位置，並在對角線另一側擁有彼此鏡像對應的「雙生組」（twins）。這些成對的群組在圖中以相同顏色標示。

![圖 4. 定位矩陣](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FXF1pgzXXIxN1KIRxY2WW%252FFig%25204.png%3Falt%3Dmedia%26token%3Dfb166ad4-c48f-4034-9b18-c607d1f7a3a1&width=768&dpr=3&quality=100&sign=734b5f80&sv=2)
_圖 4. 定位矩陣_

As a result, we obtain 36 possible positions where reels can be performed. Each group in this diagram represents a small "family" of simple reel combinations. Let’s try listing them, analyzing, and giving names to the unnamed ones.  
因此，我們獲得了 36 個可以進行繞環（reels）的可能位置。此圖表中的每個群組代表了一個簡單繞環組合的小「家族」。讓我們嘗試列出這些組合、進行分析，並為尚未命名的組合命名。

We can immediately identify a primary trend in the division of hand positions—those where the hands are on the same side of the body (left or right) and those where they are on different sides. As we will see later, there is a fundamental difference in how these positions function, so we will initially divide them into classic weaves, performed on the same side, and mills, performed on opposite sides.  
我們可以很快看出，雙手的位置大致可分為兩種類型：一種是雙手位於身體同一側（左側或右側），另一種則是雙手分別位於身體兩側。正如後文將提到的，這兩種位置在動作運作方式上有著本質性的差異。因此，我們先將它們區分為：在同側進行的「經典編織」（classic weaves），以及在異側進行的「風車」（mills）。

#### MILLS: | 風車

* Common Mills — classic mills above and below the shoulders, as well as mixed types.  
常見風車 (Common Mills)：肩膀上方與下方的經典風車，以及混合類型。

* Crossers — the crosser, which in this system is considered a mill with hands on non-native sides. The familiar crosser is closest to the mixed type.  
交錯 (Crossers)：在本系統中，交錯被視為雙手位於非原生側（non-native sides）的風車。大眾熟知的交錯最接近混合類型。

* Back crossers — a crosser behind the back, behind the head, or a mixed type combining both positions.  
背後交錯 (Back crossers)：位於背後、頭後，或結合這兩個位置的混合型交錯。

* D-crossers (double-sided crosser) — a two-sided crosser where one hand is behind the back, and the other is in front.  
D-交錯 (D-crossers，雙面交錯)：一種雙面交錯，其中一隻手位於背後，另一隻手位於身前。

#### WEAVES: | 編織

* Weave — a weave above/below the shoulders and mixed types.  
交織（Weave）：肩上、肩下以及混合類型的交織。

* Back weave — weaves behind the back, behind the head, and their mixed forms.  
背後交織（Back weave）：背後、頭後以及其混合形式的交織。

Thus, we have identified all the possible hand positions where reels can be performed within the body cross. Next, we will explore how these combinations can work in terms of timing and the poi directions relative to each other.  
至此，我們已識別出在身體十字（body cross）範圍內所有可能進行繞環（reels）的手部位置。接下來，我們將探討這些組合在時序（timing）以及 poi 相對方向上的運作方式。

![圖 5. 摘要表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FPpBKJ9UhJVoboIeWqGA6%252FFig%25205.png%3Falt%3Dmedia%26token%3D88a3714d-2edb-43dc-8de2-8d0daadf8c8a&width=768&dpr=3&quality=100&sign=cf1362ed&sv=2)
_圖 5. 摘要表_

### Timing of reels | Reels 的時序

#### Introduction to the beat graph method | 拍點圖表法

To study different timing types, I propose the beat graph method, which requires separate exploration. Understanding how we can describe all timing types in any complex move will be facilitated by analyzing the fundamental types of poi timing. By simply spinning two poi in a static hand position, we can achieve different combinations by changing two parameters: the poi directions and their timing relative to each other. Changing the poi directions allows us to have either same-direction rotation or opposite rotation. Timing works more specifically. As both poi spin, we can shift the cycle of one of them in time, resulting in different timing types. The determining factor in the number of timing types is the step by which the cycle is shifted. In poi timing, as in all moves, with the exception of some very specific trick categories, one step is half a poi rotation (or half a beat, if using a rhythmic term).  
為了研究不同的時序類型（timing types），我提出了拍點圖表法，這需要獨立的探討。透過分析 poi 時序的基本類型，將有助於理解我們如何描述任何複雜動作中的所有時序類型。

僅需在手部位置固定的情況下旋轉兩顆 poi ，我們就能藉由改變兩個參數來達成不同的組合： poi 的旋轉方向，以及它們彼此之間的相對時序。改變 poi 方向可以產生同向旋轉（same-direction rotation）或反向旋轉（opposite rotation）。時序的運作則更為具體。當兩顆 poi 旋轉時，我們可以移動其中一顆在時間上的週期，進而產生不同的時序類型。

決定時序類型數量的關鍵因素，在於週期移動的步進值（step）。在 poi 時序中，如同所有動作一樣（除了一些極為特定的招式類別外），一個步進值即為 poi 旋轉半圈（若使用節奏術語，則為半拍）。

> 「步進值」在這段脈絡裡其實是在描述：「兩顆 poi 的時間差，是以多大的單位去偏移」  
英文原文是：The determining factor in the number of timing types is the step by which the cycle is shifted.

這裡的 step 比較偏向：
* 時序偏移的「最小單位」
* 週期移動的「離散間隔」
* timing phase 的切分基準

When considering the simple rotation of a poi in a static hand position, a full cycle of its movement consists of one rotation, which includes two half beats. We can construct a time-axis graph based on this information, conditionally describing the poi’s movement from the top position (first half beat) to the bottom (second half beat) and back (Fig. 6).  
當 poi 在固定手部位置進行單純旋轉時，其完整運動週期由一次完整旋轉構成，其中包含兩個半拍。我們可以根據這項資訊建立一個時間軸圖，用以抽象表示 poi 從頂部位置（第一個半拍）移動到底部位置（第二個半拍），再返回頂部的運動過程（圖 6）。

![圖 6. poi 圓周運動的拍點圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FaAIIKpkec6YzmbfAW4Ff%252FFig%25206.png%3Falt%3Dmedia%26token%3D2fdf8273-0f6d-45d6-87a3-6c88c53c6d99&width=768&dpr=3&quality=100&sign=16931536&sv=2)
_圖 6. poi 圓周運動的拍點圖_

> In such a side projection, the exact movement graph of the poi should resemble a sine wave, where at the top and bottom points, the poi crosses the beat reference point. However, for visual simplicity, from here on, we will connect the beat points with straight lines.  
 在這樣的側面投影中，poi 的精確運動圖表應類似於正弦波，在頂部和底部點，poi 會穿過拍點參考點。然而，為了視覺上的簡便，從現在起，我們將以直線連接各個拍點。

The resulting beat graph will be identical for both poi. Therefore, if we start both poi from the same position, the graphs will overlap, perfectly mirroring each other—this is called Together Time timing, with the beat graphs aligning one-to-one (1/1) (Fig. 7).  
產生的拍點圖（beat graph）對兩顆 poi 而言將完全相同。因此，若我們從相同位置開始轉動兩顆 poi，其圖表將會重疊並完美地相互鏡射：這被稱為 Together Time 相位，其拍點圖呈一比一對齊（圖 7）。

![圖 7. 兩顆 poi 進行圓周同步運動之拍點圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F09JX69851sh9iOljDiUP%252FFig%25207.png%3Falt%3Dmedia%26token%3D103cfb6e-24b1-4981-a436-6685eb0d69dd&width=768&dpr=3&quality=100&sign=90c3648&sv=2)
_圖 7. 兩顆 poi 進行圓周同步運動之拍點圖_

Next, we can shift the starting point of the second poi by one step, with one poi starting from the top position and the other from the bottom. In this case, the graphs will be completely opposite to each other—this is called Split Time timing, with the beat graphs offset by half of the poi’s full movement cycle (1/2) (Fig. 8).  
接著，我們可以將第二顆 poi 的起始點移動一個步驟，使一顆 poi 從頂部位置開始，另一顆則從底部開始。在這種情況下，兩者的圖表將完全相反——這被稱為 Split Time 相位，其拍點圖相對於 poi 的完整運動週期偏移了二分之一（圖 8）。

![圖 8. 兩顆 poi 進行圓周非同步運動之拍點圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FdyYyMl94iB0lreg3zkIp%252FFig%25208.png%3Falt%3Dmedia%26token%3D41369909-909a-4edd-9c6c-c07e9e3ef296&width=768&dpr=3&quality=100&sign=932a95de&sv=2)
_圖 8. 兩顆 poi 進行圓周非同步運動之拍點圖_

Since there are only two half beats in a full cycle, further shifting the second poi's graph will complete the cycle and return it to the starting position. Thus, we can clearly see that for single-beat poi movements, there are only two timing types:  
由於一個完整週期中只有兩個半拍，進一步移動第二個 poi 的圖表將完成該週期並使其回到起始位置。因此，我們可以清楚地看到，對於單拍 poi 動作，僅存在兩種正時（timing）類型：

* Together Time — both poi pass each beat reference point at the same time (example: synchronous butterfly).  
同步時序（Together Time）：兩個 poi 同時通過每個拍子參考點（例如：同步蝴蝶）。

* Split Time — both poi pass opposite beat reference points at the same time (example: asynchronous butterfly).  
不同步時序（Split Time）：兩個 poi 同時通過相對的拍子參考點（例如：非同步蝴蝶）。

It is important to understand that timing is not inherently related to direction. Here and beyond, we will see that any timing type can be performed with both same-direction and opposite-direction poi movement:  
重要的是要理解，正時本質上與方向無關。在此處及後續內容中，我們將看到任何正時類型都可以透過 poi 的同向與異向運動來執行：

* Same direction — both poi move in the same direction.  
同向（Same direction）：兩顆 poi 以相同方向運動。

* Opposite direction — the poi move in opposite directions.  
反向（Opposite direction）：兩顆 poi 以相反方向運動。

Thus, there are four timing/direction combinations, which we will abbreviate for convenience:  
因此，共有四種時序與方向的組合，為了方便起見，我們將其縮寫如下：

* TS — Together Time / Same direction  
TS：同步 / 同向

* SS — Split Time / Same direction  
SS：不同步 / 同向

* TO — Together Time / Opposite direction  
TO：同步 / 反向 (Together Time / Opposite direction)

* SO — Split Time / Opposite direction  
SO：不同步 / 反向

> In this work, I use the term "Together Time" instead of the more familiar "Same Time" for ease of use in abbreviations. The words "Same" and "Split" begin with the same letter, making them inconvenient to abbreviate.  
 在本著作中，我使用「同步時間」(Together Time) 一詞而非較為人熟知的「同時」(Same Time)，是為了便於縮寫。由於「相同」(Same) 與「交錯」(Split) 的英文首字母相同，在縮寫時較為不便。

#### Beat graphs of reels in wall plane projection | 牆面投影中 Reel 的拍點圖

Having understood the principles of beat graphs, let’s change their appearance, adapting them to examine reels in the wall plane configuration. First, let’s take a close look at the trajectory diagram of a reel (Fig. 9). The poi makes one full circle in front and one behind. In each circle, the poi passes two reference points for half beats (the positions at the bottom and top of the circle). The point where the poi transitions from one plane to the other is called the transition point.  
在理解了拍點圖（beat graphs）的原理後，讓我們改變其呈現形式，使其適用於檢視牆面平面（wall plane）配置下的 reel。首先，讓我們仔細觀察 reel 的軌跡圖（圖 9）。

poi 在身前繞行一圈，隨後在身後繞行一圈。在每一圈中，poi 會經過兩個代表半拍的參考點（即圓圈的底部與頂部位置）。poi 從一個平面轉換到另一個平面的位置稱為轉換點（transition point）。

![圖 9. 牆面投影中肩部下方與上方的繞環（Reel）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FBI3TydRzIrB0P21a4odj%252FFig%25209.png%3Falt%3Dmedia%26token%3Da564cf67-b36b-4a2e-93f9-1467b4646146&width=768&dpr=3&quality=100&sign=8e56778&sv=2)
_圖 9. 牆面投影中肩部下方與上方的繞環（Reel）_

Let’s create the clearest possible projection of the body onto a beat graph using the example of a reel performed with the right hand under its own shoulder. Imagine we are looking at the poi spinner from behind and change the orientation of the beat graph to vertical, allowing us to move along the time axis from top to bottom (Fig. 10).  
讓我們以右手在同側肩膀下方進行的 reel 為例，在節拍圖（beat graph）上建立一個最清晰的身體投影。想像我們從後方觀察 poi 舞者，並將節拍圖的方向轉為垂直，使我們能沿著時間軸由上而下移動（圖 10）。

![圖 10. 單 poi reel 之拍點圖（Beat graph）於牆面平面（wall plane）投影中](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F4GbNstOsVZAhmQgLHi52%252FFig%252010.png%3Falt%3Dmedia%26token%3D6a7bba90-a6dd-443b-8593-ba40bb504b99&width=768&dpr=3&quality=100&sign=e9e2a59&sv=2)  
_圖 10. 單 poi reel 之拍點圖（Beat graph）於牆面平面（wall plane）投影中_

To separate the front plane and back plane rotations onto different axes, we will depict the poi’s circular trajectories as different-sized circles. This way, the two half beats in the front plane are on the central axis, and the other two half beats are in the back plane on the side axis. We will label the side axes with the letter L (low—position under the shoulder) in the colors corresponding to the sides.  
為了將前平面與後平面的旋轉區分到不同的軸線上，我們將 poi 的圓形軌跡描繪成大小不同的圓圈。

透過這種方式，前平面的兩個半拍位於中心軸上，而另外兩個半拍則位於後平面的側軸上。我們將以對應兩側的顏色，並使用字母 L（low，指肩膀下方的位置）來標記側軸。

In the graph, you can see that both steps on each side fall on the same axis, meaning they are indistinguishable from one another—just by looking at the graph, we cannot tell whether the poi is at the top or bottom in a specific point. If we spin the poi in the opposite direction, the graph will remain the same. This is one of the limitations of the graphs, but it reflects the real meaning of timing—the timing types are not connected to the poi’s direction, so direction does not matter when considering them.  
在圖表中，您可以看到兩側的步階皆落在同一軸線上，這意味著兩者之間無法區分。

僅憑圖表，我們無法判斷 poi 在特定點是處於頂部還是底部。若我們以相反方向旋轉 poi，圖表將保持不變。這是此類圖表的局限性之一，但它反映了相位的真實意義：相位類型與 poi 的方向無關，因此在考慮相位時，方向並不重要。

By simply moving the graph of the right hand to the left side, we get the graph of a reel performed with the right hand on the opposite (left) side. Similarly, by adding the graph for the left hand on its own side, we can depict the graph of a two-beat weave on the left side, and by shifting one of the graphs (the right-hand one), we can create four timing types for the weave (Fig. 11). Anticipating the next step, let’s also add the H axes (high—position above the shoulder), which we will refer to later.  
只需將右手圖表移動到左側，我們就能得到右手在對向（左側）進行 reel 動作的圖表。同樣地，藉由加入左手在其自身側的圖表，我們可以描繪出左側二拍 weave 的圖表；而透過移動其中一個圖表（右手圖表），我們可以建立 weave 的四種時序類型（圖 11）。預想下一步，我們也加入 H 軸（高位：肩膀上方的位置），這在稍後將會提及。

![圖 11. 左側下繞（lower weave）四種計時類型的拍幅圖（beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FknzPxqF2AlkgUIxlU7KB%252FFig%252011.png%3Falt%3Dmedia%26token%3Dd58cfbe3-378e-4fe4-abad-518c36b98efe&width=768&dpr=3&quality=100&sign=9770ee18&sv=2)
_圖 11. 左側下繞（lower weave）四種計時類型的拍幅圖（beat graphs）_

From the resulting graphs, it is immediately clear that two timing types are unique in form (the first and third), while the other two are mirror copies of each other. This pattern is typical for any movements involving more than two beats. In theory, mirrored copies are unique timing types, but in practice, they are moves with the same principle but different leading hands.  
從生成的圖表可以清楚看出，其中兩種時序類型（第一種與第三種）在形式上是獨一無二的，而另外兩種則互為鏡像。這種模式在任何涉及兩個以上拍點（beats）的動作中都十分常見。理論上，鏡像副本屬於獨立的時序類型，但在實務操作中，它們是原理相同但領先手不同的動作。

Let’s examine each type in detail:  
讓我們詳細檢視每一種類型：

* Unison weave (uni-weave) — the hand movements are completely identical in phase (1/1)—the poi move between planes at the same time, together in the front and together in the back plane.  
Unison weave (uni-weave)：手部動作在相位上完全相同 (1/1)，poi 同時在平面之間移動，同時位於前方平面，並同時位於後方平面。

* Chasing weave — a type of hand timing known from the classic two-beat weave, where one poi leads and changes sides first, and the second poi follows with a delay of half a beat. This timing type is asymmetrical, meaning it has a mirrored copy with the leading hand reversed (1/4, 3/4).  
Chasing weave：一種源自經典兩拍 weave 的手部計時類型，其中一個 poi 領先並首先換邊，第二個 poi 則延遲半拍跟隨。這種計時類型是不對稱的，意即它具有一個領先手反轉的鏡像副本 (1/4, 3/4)。

* Counter weave — a timing type with the graphs offset by half of a full cycle (2/4)—one full rotation. The poi switch sides at the same time, but move toward each other, never on the same side simultaneously.  
Counter weave：一種計時類型，其圖表偏移了半個完整週期 (2/4) ，即一個完整旋轉。poi 同時換邊，但朝向彼此移動，絕不會同時位於同一側。

These are the three possible timing types for two-beat weaves and mills. Each timing type can be performed with both same-direction poi movement and opposite-direction movement, but only in one timing type for each direction combination. The possible timing/direction combinations are distributed as follows:    
這是兩拍 weave 與 mill 的三種可能計時類型。每種計時類型皆可以 poi 的同向運動與反向運動進行，但針對每一種方向組合，僅能以其中一種計時類型呈現。可能的計時／方向組合分布如下：

* Unison weave — TS, SO (Together Time / Same direction, Split Time / Opposite direction)  
同向編織（Unison weave）：TS, SO（同步 / 同向，不同步 / 反向），雙手動作在相位上完全一致，兩顆 poi 同時進入前平面，也同時進入後平面。

* Chasing weave — SS, TO (Split Time / Same direction, Together Time / Opposite direction)  
Chasing weave：SS, TO (不同步 / 同向，同步 / 反向)

* Counter weave — TS, SO (Together Time / Same direction, Split Time / Opposite direction). 
對衝編織（Counter weave）：TS、SO（同步／同向，不同步／反向）

In the graph above and below each, the abbreviations for the poi directions and timings with which the move can be performed are listed.  
在上方與下方的圖表中，分別列出了執行該動作時所對應的 poi 方向與相位計時之縮寫。

![圖 12. 下風車（lower mill）之拍點圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FP1wA4WjSLLhJVBZhGhzQ%252FFig%252012.png%3Falt%3Dmedia%26token%3D377213f1-5cc2-4de9-8653-966f53a0ed64&width=768&dpr=3&quality=100&sign=f31255c9&sv=2)
_圖 12. 下風車（lower mill）之拍點圖（Beat graphs）_

In a similar way, we can construct graphs of mill timings by simply depicting each hand’s graph on its respective side (Fig. 12).  
以同樣的方式，我們只需將每隻手的圖表描繪在各自的一側，即可構建出風車（mill）時序圖（圖 12）。

The number and types of timings remain the same; however, it is worth noting that when transferred to the opposite side, the graph is mirrored horizontally, meaning the appearance of some timings can change to the exact opposite. For example, the graph of a uni-weave deceptively resembles the graph of a counter mill.  
時序（timings）的數量與類型仍然相同。不過要注意，當圖表被移到身體另一側時，會變成水平鏡像，所以某些時序的圖形外觀可能會看起來像是相反的類型。例如，同相編織（uni-weave）的圖表，乍看會很像對衝風車（counter mill）的圖表。

When the hands are positioned on opposite sides of the body, the mapping between hand timings and timing/direction combinations changes as follows:  
當雙手位於身體兩側時，手部計時與計時／方向組合之間的映射關係變化如下：

* Unison mill — SS, TO  
同向風車（Unison mill）：不同步／同向（SS）、同步／反向（TO）

* Chasing mill — TS, SO. 
追逐風車 (Chasing mill) ：同步／同向（TS）、不同步／反向（SO）

* Counter mill — SS, TO. 
反向風車（Counter mill）：不同步／同向（SS）、同步／反向（TO）

> The distribution of timing/direction combinations is related to the position of the transition points in the reels. This entire study is based on the transition points being located on the same horizontal line with the center of rotation. When the transition point shifts to a vertical line, it becomes possible to perform moves with different timing/direction combinations, but in practice, spinning the poi close to the body with a vertically aligned transition point (either above or below) is clearly inconvenient. This is likely due to the vertical orientation of our body, where a vertical transition point brings it too close, increasing the risk of collision. This hypothesis is supported by the fact that mills above the head, where nothing obstructs movement, can be performed with a vertical transition point without any problems, unlike mills at hip level.  
 時間／方向組合的分布與 reels 中轉換點（transition points）的位置有關。本研究完全基於轉換點與旋轉中心位於同一水平線上的情況。當轉換點移至垂直線時，執行不同時間／方向組合的動作便成為可能；但在實務操作中，在靠近身體處以垂直對齊的轉換點（無論是在上方或下方）旋轉 poi 顯然並不方便。

這可能是由於我們身體的垂直導向，使得垂直轉換點距離身體過近，增加了碰撞風險。此假設可由以下事實支持：在頭部上方的 mills，由於沒有任何障礙物阻礙運動，可以毫無問題地以垂直轉換點執行，這與臀部高度的 mills 截然不同。

> Nonetheless, in this study, we do not consider the point above the head, so such transition point positions are not taken into account, and the described timing distribution remains unchanged.  
 儘管如此，在本研究中，我們並不考慮頭頂上方的點，因此不將此類轉換點位置納入考量，且所述之時序分佈（timing distribution）保持不變。

The described beat graph method allows us to visualize any variations of mills and weaves in all positions. To explore ways of visualizing them, let’s take a top-down view of a reel (Fig. 13). The graph of reels performed on the same side, or in front on the opposite side, is depicted as a solid line in the color corresponding to the hand, drawn between the central axis and the side axes "L" for the under-shoulder position (1,2) and "H" for the above-shoulder position (4,5). Reels performed behind the back or head are depicted with dashed lines between the central axis and the "L" axis for the behind-back position (3) and the "H" axis for the behind-head position (6).  
上述描述的拍點圖（beat graph）方法使我們能夠將所有位置中風車（mills）與編織（weaves）的任何變化視覺化。為了探索其視覺化方式，讓我們從捲軸（reel）的俯視圖（圖 13）來看。

在同側或在對側前方進行的捲軸圖形，以對應手的顏色實線表示，繪製於中心軸與側軸之間：肩下位置（1, 2）標示為「L」，肩上位置（4, 5）標示為「H」。在背後或頭後進行的捲軸，則以虛線表示：背後位置（3）繪製於中心軸與「L」軸之間，頭後位置（6）則繪製於中心軸與「H」軸之間。

![圖 13. 捲軸在 6 種可能位置的圖表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FzXycWWCKrgr9cngripbw%252FFig%252013.png%3Falt%3Dmedia%26token%3D05733f5c-ef2d-4ef8-b9e0-0680a0d1d38b&width=768&dpr=3&quality=100&sign=37612f34&sv=2)
_圖 13. 捲軸在 6 種可能位置的圖表_

For easier understanding of this graphical system, you can imagine the person from a top-down perspective, with the axes of the upper positions, which are closer to the viewpoint, appearing wider on the outside, and the more distant lower axes closer to the center inside (Fig. 14).  
為了更易於理解此圖形系統，您可以想像從俯視視角觀察人體，其中較靠近視點的高位軸線在外部顯得較寬，而較遠的低位軸線則較靠近內部的中心（圖 14）。

![圖 14. 節拍圖座標軸的可視化選項](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FO0ygFZgbV4IO4KzZvIO5%252FFig%252014.png%3Falt%3Dmedia%26token%3D77ff0e60-4815-4363-bc57-954300e796a9&width=768&dpr=3&quality=100&sign=fcbee5ac&sv=2)
_圖 14. 節拍圖座標軸的可視化選項_

Here are several examples of different reel combinations shown on beat graphs (Fig. 15):  
以下為節拍圖（圖 15）中顯示的幾種不同捲軸組合範例：

![圖 15. 不同交織（weaves）與風車（mills）動作的拍點圖示例](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FcOxRKHf83y4KWhhP731X%252FFig%252015.png%3Falt%3Dmedia%26token%3Df163d271-a932-4d21-a722-42074cffa598&width=768&dpr=3&quality=100&sign=f6a01230&sv=2)
_圖 15. 不同交織（weaves）與風車（mills）動作的拍點圖示例_

#### The value and purpose of beat graphs | 拍點圖的價值與目的

Before moving on to the next section, I would like to say a few more words about beat graphs. Their wide range of capabilities allows us to depict very complex moves; however, they require considerable skill to read. Anticipating potential criticism of this tool, I want to highlight its main purpose and value.  
在進入下一章節之前，我想針對拍點圖（beat graphs）再多做些說明。拍點圖強大的功能使我們能夠描繪非常複雜的動作；然而，閱讀這些圖表需要相當高的技巧。預見到這項工具可能面臨的批評，我希望強調其主要目的與價值。

Beat graphs, first and foremost, provide a visual way to identify all possible timing variants of moves of any length. More importantly, they allow us to translate these timing variants from “paper” into practice. Many of the moves described in this work were not known before the application of beat graphs, and discovering them purely through imagination, without a clear notation system, would have been extremely difficult.  
拍點圖（Beat graphs）首先提供了一種視覺化方法，用以識別任何長度動作的所有可能時序變體。更重要的是，它們使我們能夠將這些時序變體從「紙上理論」轉化為實踐。

本作中所描述的許多動作在應用拍點圖之前尚不為人所知；若缺乏清晰的記譜系統，僅憑想像力來發現這些動作將會極其困難。

No matter how complex and difficult a graph may seem, remember that it is not meant to be a day-to-day tool requiring quick reading. Instead, it is a research method, needed only in the process of discovering new moves and transferring them from "paper" to practical execution.  
無論圖表看起來多麼複雜且艱深，請記住，它並非旨在作為需要快速閱讀的日常工具。

相反地，它是一種研究方法，僅在發現新動作以及將其從「紙上」轉移到實際執行的過程中才需要。

#### The form of weaves and mills | 繞環（Weaves）與風車（Mills）的形態

We have theoretically explored where and which types of weaves and mills can be performed, but when we place two hands spinning poi in the same zone close to each other, practical questions arise about their positioning in a limited space.  
我們已經從理論上探討了可以在何處以及執行哪些類型的 weave 與 mill，但當我們將旋轉 poi 的雙手置於同一個相互靠近的區域時，關於它們在有限空間中定位的實際問題便隨之而來。

For example, when performing a same-direction counter weave, we can place either hand on top without changing the timing type or the weave positioning. These variations in hand positioning within the same space and timing are referred to as the “form” of a move.  
例如，在執行同向反向 weave 時，我們可以將任一隻手置於上方，而無需改變正拍/反拍類型或 weave 的定位。在相同的空間與正拍/反拍下，這些手部位置的變化被稱為動作的「形式」（form）。

In some cases, the form of the move can be determined by the chosen way of layering the planes within the move. A simple example outside the scope of this system is the positioning of planes in a synchronous butterfly—either the right poi or the left poi can pass closer to the viewer in the upper part of the butterfly. Rearranging the planes does not affect the mechanics of the butterfly, but it changes its layering.  
在某些情況下，動作的形式可以由動作中選擇的平面分層方式來決定。在本系統範圍之外的一個簡單例子是同步 butterfly 的平面定位——在 butterfly 的上半部分，右手的 poi 或左手的 poi 都可以更靠近觀看者。重新排列平面不會影響 butterfly 的力學結構，但會改變其分層。

In this work, layering has the greatest impact on unison weaves performed in the same zone, such as under the shoulder. In these moves, the poi are simultaneously in the same plane, making the question of distributing them into different layers more relevant. As a result, the number of different forms of the same weave, while maintaining timing and positioning, can reach up to four.  
在本文中，分層對於在同一區域（例如肩下）執行的同步編織（unison weaves）影響最大。在這些動作中，poi 同時處於同一個平面上，這使得將它們分配到不同層次的問題變得更加重要。因此，在保持時機與定位不變的情況下，同一種編織動作的不同形式數量最高可達四種。

The topic of layering is too broad to cover in this work, so we have noted the presence of possible variations in the forms of individual moves and leave the detailed analysis of this topic for future research.  
分層（layering）的主題過於廣泛，無法在本文中詳盡闡述，因此我們僅註記了個別動作形式中可能存在的變體，並將此主題的詳細分析留待未來研究。

### Section summary | 章節總結

* Practically all spinning moves within the body cross zone can be broken down into reels in various positions and empty rotations.  
幾乎所有在身體交叉區域（body cross zone）內的旋轉動作，都可以分解為不同位置的繞環（reels）與空轉（empty rotations）。

* In the body cross, there are 36 positions for two hands where reels can be performed. Reels with both hands form weaves or mills.  
在身體交叉區域中，雙手共有 36 個可以執行繞環的位置。雙手同時進行的繞環會構成編織（weaves）或風車（mills）。

* Any weave or mill can be performed in one of three timing types: unison, chasing, or counter.  
任何編織或風車動作都可以透過三種節奏類型之一來執行：同步（unison）、追逐（chasing）或相反（counter）。

* There are a total of 4 timing/direction combinations. Each timing type for weaves and mills can be performed in two timing/direction combinations.  
總共有 4 種時序（timing）與方向的組合。每一種繞環（weave）與風車（mill）的相位類型，都可以在兩種相位/方向組合中執行。

* In practice, in some weaves and mills, the hands can occupy different positions within the same zone and timing, creating different “forms” of the move.  
在實務操作中，於某些繞環與風車動作裡，雙手可以在相同的區域與相位下佔據不同的位置，進而產生該動作的不同「形式」（forms）。

#### The principle of combining reels | 繞環的組合原理

One might assume that by mastering all the timings of weaves and mills in all positions, one could gain a comprehensive skill set for learning any trick. While this is close to the truth, it’s not entirely accurate. The way we combine reels and make transitions between them is also a crucial skill that requires separate study. Therefore, we will now explore the main ways to combine reels, which will be divided into double and triple combinations, consisting of two and three reels, respectively.  
有人可能會認為，只要把所有位置中的編織（weaves）與風車（mills）時序都練熟，就足以應付任何招式的學習。這個想法雖然接近正確，但還不夠完整。

因為除了單獨掌握各種繞環（reels）之外，如何把繞環組合起來，以及如何在不同繞環之間順利轉換，也是一項需要另外研究的關鍵能力。因此，接下來我們將探討繞環的主要組合方式，並將它們分為雙重組合（double combinations）與三重組合（triple combinations），也就是由兩個或三個繞環所構成的組合。

Let’s take another look at the reels from above (Fig. 16).  
讓我們再次從上方觀察繞環（圖 16）。

![圖 16. 三個層級的繞環（reel）組合](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FNi7hR0hUngyzAsxVUJN2%252FFig%252016.png%3Falt%3Dmedia%26token%3D2b21c321-6cc7-445c-bebd-7c1e95fb62e4&width=768&dpr=3&quality=100&sign=58d6c49f&sv=2)
_圖 16. 三個層級的繞環（reel）組合_

A combination of two reels on two sides, performed with both hands, already has a familiar name—waist wrap. We will remove the reference to a specific body part and simply use the term wrap as a universal name for a direct combination of two adjacent reels without any extra rotations.  
在兩側進行、由雙手操作的兩個繞環組合，已有一個廣為人知名稱：腰繞（waist wrap）。我們將移除對特定身體部位的指涉，僅使用「繞」（wrap）一詞，作為兩個相鄰繞環直接組合且無額外旋轉的通用名稱。

In the diagram of a combination of three reels in one sequence, we see the familiar trajectory of the arm in the cosmo move. In most of the world, cosmo is known as meltdown, but I will use the familiar term cosmo, as proposed by the Japanese, because it is simpler and more concise.  
在單一序列中三個繞環組合的圖示中，我們可以看到在 cosmo 動作中熟悉的手臂軌跡。

在世界大部分地區，cosmo 被稱為 meltdown，但我將採用由日本人提出、較為熟悉的術語 cosmo，因為它更簡單且簡潔。

Next, we will examine wraps and cosmo in more detail.  
接下來，我們將更詳細地檢視「繞」（wraps）與 cosmo。

Wraps（纏繞）

Using the now familiar term wrap, we will have to slightly alter its meaning. Typically, the term "waist wrap" refers to combinations of any two weaves on different sides, most often two-beat or three-beat weaves. We do not consider three-beat weaves in this study, as they are essentially more complex combinations of two-beat weaves and empty rotations. However, even with two-beat weaves, things are not that simple.  
使用現在熟悉的術語「纏繞」（wrap），我們必須稍微修改其定義。通常，「腰部繞身」（waist wrap）是指在不同側進行的任何兩種交織（weave）組合，最常見的是二拍或三拍交織。在本研究中，我們不考慮三拍交織，因為它們本質上是二拍交織與空轉（empty rotation）的更複雜組合。然而，即使是二拍交織，情況也並非那麼簡單。

In the classic waist wrap based on two-beat weaves, there is an additional empty rotation in one of the transitions from one side to the other, needed only to bring the correct hand forward. This extra rotation is required only in one timing/direction combination (Split Same), so this wrap can confidently be considered a specific case—a more complex combination, rather than a fundamental move.  
在基於二拍交織的經典腰部繞身中，在從一側過渡到另一側的其中一個過程中，存在一個額外的空轉，其目的僅是為了將正確的手帶到前方。這種額外的旋轉僅在特定的相位/方向組合（Split Same）中才需要，因此這種繞身可以被確切地視為一個特例：即一種更複雜的組合，而非基礎動作。

Thus, the familiar waist wraps do not fit into this system—we will need to take a step back and redefine how we understand the term "wrap."  
因此，熟悉的腰部繞身並不適用於此系統：我們需要退後一步，重新定義我們對「繞身」一詞的理解。

Let’s examine the poi trajectory when adjacent reels are combined into a single action without any extra rotations (Fig. 17). We get a looping trajectory lasting three beats (6 steps) without empty rotations, where the circle in the front plane is shared by both reels. It is these moves, where the poi make such a loop, that we will refer to as wraps.  
讓我們觀察當相鄰的繞環（reels）在沒有額外旋轉的情況下結合成單一動作時的 poi 軌跡（圖 17）。我們得到一個持續三拍（6 步）且沒有空轉的迴圈軌跡，其中前方平面的圓圈由兩個繞環共用。正是這種 poi 形成此類迴圈的動作，我們將其稱為纏繞（wraps）。

![圖 17. 纏繞動作中單個 poi 的條件軌跡](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FVhGcWdGhLyrhSbz5lDbB%252FFig%252017.png%3Falt%3Dmedia%26token%3D4463b41d-b5f7-4d5d-ae14-5d7323eedbfc&width=768&dpr=3&quality=100&sign=7eaa7d6b&sv=2)
_圖 17. 纏繞動作中單個 poi 的條件軌跡_

（為了清晰起見，後向旋轉繪製得較小）

#### Positioning of wraps | 纏繞的定位

Following the familiar method of graphic positioning diagrams, let’s describe all possible combinations of two adjacent reels for a single poi. From the six reel positions that can be performed with a single poi, eight pairs are possible (Fig. 18). Other double combinations are either impossible due to joint limitations or require transitions with additional rotations.  
遵循圖形定位圖的常用方法，讓我們描述單個 poi 兩個相鄰 reel 的所有可能組合。

在單個 poi 可執行的六個 reel 位置中，共有八種可能的配對（圖 18）。其他的雙重組合要麼因關節限制而無法達成，要麼需要透過額外的旋轉進行轉換。

![圖 18. 單手 poi 纏繞位置的變體](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FBpXFVt2v9s07duqEWT8v%252FFig%252018.png%3Falt%3Dmedia%26token%3D4224ac1d-6acd-4aba-80f0-082c3c3b2553&width=768&dpr=3&quality=100&sign=1d4bf259&sv=2)
_圖 18. 單手 poi 纏繞位置的變體_

Based on the principles we know, let’s create a positioning matrix by grouping symmetrical combinations by similarity (Fig. 19). As with weaves, we see a pair of semi-asymmetrical "mirror" groups, which represent one type of move in two mirrored versions.  
根據我們所知的原理，讓我們透過將對稱組合依相似性進行歸類，建立一個定位矩陣（圖 19）。

如同交織（weaves）一般，我們可以看到一組半非對稱的「鏡像」群組，這代表了以兩種鏡像版本呈現的同一種動作類型。

![圖 19. 纏繞動作（wraps）之定位矩陣，並標示出相似性群組](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FdO27dw7ab0kl0jjiVZOf%252FFig%252019.png%3Falt%3Dmedia%26token%3Da4fe2d55-4dd3-4b54-baa1-08d0be50b37d&width=768&dpr=3&quality=100&sign=860d2e30&sv=2)
_圖 19. 纏繞動作（wraps）之定位矩陣，並標示出相似性群組_

> Upon closer examination, we can see that most combinations are asymmetrical. From an efficiency standpoint in learning, any asymmetrical wraps can be viewed as combinations of two vertical halves of symmetrical wraps. For example, symmetrical wraps (let's call them AA and BB) can combine their halves to create asymmetrical wraps (AB and BA, respectively) (Fig. 20).  
 經仔細檢視，我們可以發現大多數的組合都是非對稱的。從學習效率的角度來看，任何非對稱繞環（wraps）皆可被視為由兩個對稱繞環的垂直剖半組合而成。例如，對稱繞環（假設為 AA 與 BB）可以將其各自的一半進行組合，從而產生非對稱繞環（分別為 AB 與 BA）（圖 20）。

![圖 20. 建構非對稱纏繞（asymmetrical wraps）之範例，透過結合對稱纏繞之兩半部分](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FEuV80dobR0mqkr9PYT6w%252FFig%252020.png%3Falt%3Dmedia%26token%3D7a1963c1-463a-4038-afe1-b7045117a237&width=768&dpr=3&quality=100&sign=83954ed1&sv=2)
_圖 20. 建構非對稱纏繞（asymmetrical wraps）之範例，透過結合對稱纏繞之兩半部分_

> Thus, we can assume that mastering all symmetrical wraps will provide the most comprehensive skill set. Therefore, asymmetrical combinations may be considered secondary in the system and not necessary for primary learning.  
 因此，我們可以假設掌握所有對稱纏繞（symmetrical wraps）將能提供最全面的技能組合。因此，非對稱組合在系統中可被視為次要，且並非初步學習的必要內容。

Let’s list the resulting wrap groups in a table and give them names for further analysis (Fig. 21).  
讓我們將產生的纏繞群組列於表中，並為其命名以便進一步分析（圖 21）。

![圖 21. 纏繞技（wraps）總表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FfzWTfggEhmMvhsQ6RGpD%252FFig%252021.png%3Falt%3Dmedia%26token%3D5686c95b-76d2-456c-9c80-30ae1658f8a6&width=768&dpr=3&quality=100&sign=64737e28&sv=2)
_圖 21. 纏繞技（wraps）總表_

Let’s take a closer look at each group of wraps:  
讓我們深入探討每一組纏繞動作（wraps）：

* Vertical wraps — Vertical wraps are among the most obvious and, at the same time, the most distinctive types. We will explore them in more detail later.  
垂直纏繞（Vertical wraps）：垂直纏繞是最顯而易見，同時也是最具辨識度的類型之一。我們稍後將對其進行更詳細的探討。

* Common wraps — Classic wraps under and over the shoulders, as well as their mixed variations.  
常見纏繞（Common wraps）：經典的肩上與肩下纏繞，以及它們的混合變體。

* Diagonal wraps — Diagonal wraps and their various combinations.  
對角線纏繞（Diagonal wraps）：對角線纏繞及其各種組合。

* Back wraps — Back wraps behind the head and behind the back, as well as their mixed variations.  
背後纏繞（Back wraps）：頭後與背後的背後纏繞，以及其混合變體。

* D-wraps — Double-sided wraps. Semi-asymmetrical wraps with one hand in front and the other behind, as well as their mixed variations.  
雙面纏繞（Double-sided wraps）：半非對稱纏繞，其中一手在身前，另一手在身後，以及其混合變體。

#### Timing of wraps | 纏繞時序

During a full cycle of 3 beats, a wrap completes 6 half-beat steps. Let's return to the previously used depiction of the poi's trajectory in a wrap (Fig. 22). With this visualization, we can create a clear vertical projection of the beat graph, which we will reflect for a back view (Fig. 23).  
在一個包含 3 拍的完整週期中，wrap 完成了 6 個半拍步驟。

讓我們回到先前用於描繪 wrap 中 poi 軌跡的圖示（圖 22）。透過此視覺化方式，我們可以建立一個清晰的拍號圖（beat graph）垂直投影，並將其鏡射以呈現背面視圖（圖 23）。

![圖 22. 單 poi 纏繞（wrap）中的 poi 運動圖解](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FFLzFdBMi2DPowLKA9ZmH%252FFig%252022.png%3Falt%3Dmedia%26token%3Dcba3464a-5acf-48de-aae3-fb3996ec4206&width=768&dpr=3&quality=100&sign=91c4cc94&sv=2)
_圖 22. 單 poi 纏繞（wrap）中的 poi 運動圖解_

![圖 23. 單 poi 纏繞（wrap）在節拍圖（beat graph）上的投影](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252Fj2XdCmiAEaXExlvxZTBK%252FFig%252023.png%3Falt%3Dmedia%26token%3D5023484c-f639-400f-9175-ffeeb28c86e1&width=768&dpr=3&quality=100&sign=8bce8df6&sv=2)
_圖 23. 單 poi 纏繞（wrap）在節拍圖（beat graph）上的投影_

Using the example of a lower wrap, let's compare the graphs of both hands in the same phase, and by shifting the graph of the right hand, we obtain 6 types of wrap timings (Fig. 24).  
以低位纏繞（lower wrap）為例，讓我們比較雙手在相同相位下的圖表；透過平移右手圖表，我們可得出 6 種纏繞時序（wrap timings）類型（圖 24）。

![圖 24. 低位纏繞（lower wrap）時值的拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FGFu6xy62no5tDX1VpWsf%252FFig%252024.png%3Falt%3Dmedia%26token%3Df320dc0d-cbc7-4f1f-8f35-6055de98bb2c&width=768&dpr=3&quality=100&sign=c9c3e3d6&sv=2)
_圖 24. 低位纏繞（lower wrap）時值的拍節圖（Beat graphs）_

Similar to the weave graphs, we can see that among the 6 types of wrap timings, in practice only 4 are unique (1/1, 1/6, 2/6, 3/6), while the last 2 (4/6, 5/6) are mirror copies of existing ones with the other leading hand.  
與交織圖（weave graphs）相似，我們可以看到在 6 種纏繞時序（wrap timings）中，實際上只有 4 種是獨特的（1/1、1/6、2/6、3/6），而最後 2 種（4/6、5/6）則是現有時序由另一隻手導引的鏡像副本。

The proposed names of wrap timings, which are visible in the diagram, are based on the practical positions of the hands relative to each other:  
圖表中所顯示的纏繞時序建議名稱，是基於雙手相對於彼此的實際位置而定：

* Closed wrap — the hands simultaneously move to the opposite sides and fully cross (close) for a whole step.  
閉鎖式纏繞（Closed wrap）：雙手同時移向對側，並在一個完整步法中完全交叉（閉合）。

* Half-closed wrap — the crossing of the hands is present but immediately opens up.  
半封閉纏繞（Half-closed wrap）：存在雙手交叉，但隨即展開。

* Linked wrap — the timing is exactly between the closed and open positions, but in practice, the hands are still slightly crossed (linked) with each other.  
連動纏繞（Linked wrap）：相位時機介於封閉與開放位置之間，但在實務操作上，雙手彼此仍維持輕微交叉（連動）狀態。

* Half-opened wrap — the hands are not necessarily crossed but always move close to each other.  
半開放纏繞（Half-opened wrap）：雙手不一定交叉，但始終保持靠近彼此移動。

Each wrap can be broken down into several weaves or mills with different timings, but despite the external similarity of the resulting graphs to the weave graphs, in practice, their movement character differs. To find parallels in the forms of wrap and weave graphs, one should pay attention to their individual details. For example, in the half-closed wrap, one can see a repeating fragment identical to the counter weave, and this observation is absolutely correct (Fig. 25). The half-closed wrap indeed contains counter weaves, which are easily seen in the graph.  
每種纏繞都可以分解為數個具有不同相位時機的交織（weaves）或風車（mills），儘管生成的圖表在視覺上與交織圖表相似，但在實務操作中，其運動特性卻有所不同。

若要尋找纏繞圖表與交織圖表形式上的平行關係，應注意其個別細節。例如，在半封閉纏繞中，可以觀察到與反向交織（counter weave）完全相同的重複片段，而此觀察是絕對正確的（圖 25）。半封閉纏繞確實包含反向交織，這在圖表中清晰可見。

![圖 25. 半封閉式纏繞（half-closed wrap）拍點圖上的反向編織（counter weave）片段](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FdFAGQUFdZSO3fyiOXolM%252FFig%252025.png%3Falt%3Dmedia%26token%3Dc89c384d-2547-4d97-bd75-b7f87b6ac4c8&width=768&dpr=3&quality=100&sign=7c3927ab&sv=2)
_圖 25. 半封閉式纏繞（half-closed wrap）拍點圖上的反向編織（counter weave）片段_

Returning to the top-down view, let's consider how the beat graphs of wraps will look in various positions (Fig. 26).  
回到俯視圖，讓我們思考纏繞（wraps）在不同位置下的拍點圖（beat graphs）呈現方式（圖 26）。

![圖 26. 不同位置纏繞（wraps）之拍點圖（beat graphs）圖表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FFke6V0oG5KTv431osClO%252FFig%252026.png%3Falt%3Dmedia%26token%3Dd7950868-7d19-463b-abed-ced6570e39ad&width=768&dpr=3&quality=100&sign=d172d714&sv=2)
_圖 26. 不同位置纏繞（wraps）之拍點圖（beat graphs）圖表_

For example, let's construct the timing graphs of lower wraps behind the back (Fig. 27).  
例如，讓我們建構背後低位纏繞（lower wraps behind the back）的時序圖（Fig. 27）。

![圖 27. 下背纏繞（lower back wraps）之拍點圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252Fy7yAa9J2gmt4pWjJid1d%252FFig%252027.png%3Falt%3Dmedia%26token%3Da3cc2972-3292-411d-a201-d8d6a923d3ab&width=768&dpr=3&quality=100&sign=7a77ec90&sv=2)
_圖 27. 下背纏繞（lower back wraps）之拍點圖（Beat graphs）_

More specific are the D-wraps, in which the timings are distributed differently, which can be seen in the change of their names (Fig. 28).  
更具體的是 D-wrap，其時序計時（timings）的分布有所不同，這可以從其名稱的變化中看出（圖 28）。

![圖 28. D-wraps 的拍點圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FDE0HJeFSO1x7CX72meOp%252FFig%252028.png%3Falt%3Dmedia%26token%3D433e3dd1-be9b-4b68-bd1c-b8f981c16bcb&width=768&dpr=3&quality=100&sign=e9f9119a&sv=2)
_圖 28. D-wraps 的拍點圖（Beat graphs）_

As in the example with weaves, the hands are on opposite sides of the body, so their timings, despite the similar appearance of the graphs, change to the opposite. Thus, the closed timing has changed to open, where the hands are always on opposite sides of the body and never approach each other. The half-opened and half-closed timings have swapped places, and the linked timing remained unchanged.  
如同交錯轉（weaves）的例子，雙手位於身體兩側，因此儘管圖表外觀相似，其相位計時（timings）卻轉變為相反狀態。因此，「封閉式計時」（closed timing）轉變為「開放式計時」（open timing），此時雙手始終位於身體兩側且互不靠近。「半開放式」與「半封閉式」計時互換了位置，而「連結式計時」（linked timing）則保持不變。

> It can be noted that in the regular wrap there is no open timing, and in D-wraps there is no closed timing. The reason for this is that the names of the wrap timings are given by the same logic as in cosmo, where all types will be present at once. The names quite literally reflect the essence of what is happening during the execution of wraps, so despite seeming complexity on "paper," in practice everything becomes clearer.  
 可以注意到，在常規纏繞（regular wrap）中不存在開放式計時，而在 D 型纏繞（D-wraps）中則不存在封閉式計時。其原因在於，纏繞計時的命名邏輯與「宇宙模式」（cosmo）相同，在該模式下所有類型都會同時存在。

這些名稱直觀地反映了執行纏繞動作時的本質，因此儘管在「紙面上」看似複雜，在實踐中一切都會變得更加清晰。

By using different axes and notations, it is possible to depict the graph of any wraps (Fig. 29):  
透過使用不同的軸線與標記法，可以描繪出任何纏繞（wraps）的圖表（圖 29）：

![圖 29. 各種纏繞圖表（wrap graphs）之示意圖範例](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252Fy17MjEZax4RKhS3gFAir%252FFig%252029.png%3Falt%3Dmedia%26token%3D72b75233-3518-4103-9133-18997f29835a&width=768&dpr=3&quality=100&sign=28939f7e&sv=2)
_圖 29. 各種纏繞圖表（wrap graphs）之示意圖範例_

#### Vertical wrap graphs | 垂直纏繞圖表

Vertical wraps are more complex to depict and should be examined separately. As an example, let’s take a vertical wrap performed with the right hand on its own side, with the poi spinning outward (Fig. 30).  
垂直纏繞的描繪較為複雜，應分開進行檢視。以右手在同側進行、poi 向外旋轉的垂直纏繞為例（圖 30）。

![圖 30. 右手垂直纏繞（vertical wrap）之條件軌跡示意圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FptvyW8NxUSSY7Fvff99J%252FFig%252030.png%3Falt%3Dmedia%26token%3D194065f2-a7db-4986-8506-845d467b3594&width=768&dpr=3&quality=100&sign=93e71b41&sv=2)
_圖 30. 右手垂直纏繞（vertical wrap）之條件軌跡示意圖_

We will unfold the conditional trajectory for a back view and deform it for clarity, so that all beat reference points align above their respective axes (Fig. 31). As shown in the graph, the vertical wrap, while maintaining the same number of beats, has a structure different from other wraps. The poi alternates between two half beats on each axis on one side: two steps in the front plane, two steps above the shoulder, and two steps below the shoulder.  
我們將展開背面視角的條件軌跡，並為了清晰起見對其進行變形處理，使所有拍頻參考點（beat reference points）皆與其各自的軸線對齊（圖 31）。

如圖表所示，垂直纏繞（vertical wrap）在保持相同拍數的同時，其結構與其他纏繞方式不同。poi 在一側的每個軸線上於兩個半拍之間交替：前平面兩步、肩膀上方兩步，以及肩膀下方兩步。

![圖 31. 向外垂直纏繞（vertical wrap）之投影至拍點軸（beat axis）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FyRwrum5liw5hRonCd1nV%252FFig%252031.png%3Falt%3Dmedia%26token%3Dbbb737f0-b866-43a1-9fa5-f81641a0f8a2&width=768&dpr=3&quality=100&sign=32d06a4b&sv=2)
_圖 31. 向外垂直纏繞（vertical wrap）之投影至拍點軸（beat axis）_

The key feature of vertical wrap graphs is their asymmetry along the time axis, which means each graph corresponds to only one specific poi direction. Therefore, separate graphs must be created for all poi directions and their combinations.  
垂直纏繞圖表（vertical wrap graphs）的核心特徵在於其沿時間軸的不對稱性，這意味著每張圖表僅對應一種特定的 poi 方向。因此，必須針對所有 poi 方向及其組合分別建立獨立的圖表。

Let’s examine the graphs of vertical wraps with a single poi (right hand) in all directions, returning to the top-down view (Fig. 32).  
讓我們檢視單手 poi（右手）在所有方向上的垂直纏繞圖表，並回到俯視圖（圖 32）。

![圖 32. 右手於所有方向之垂直纏繞（vertical wraps）拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F3B5VoeQnayQCVvRkyeQ8%252FFig%252032.png%3Falt%3Dmedia%26token%3Da632fd0d-8626-426e-97d4-5a1a82bd2ed2&width=768&dpr=3&quality=100&sign=899db35d&sv=2)
_圖 32. 右手於所有方向之垂直纏繞（vertical wraps）拍節圖（Beat graphs）_

Now, we’ll construct graphs for vertical wraps with both hands, with the poi spinning outward (Fig. 33).  
現在，我們將為雙手向外旋轉 poi 的垂直纏繞（vertical wraps）構建圖表（圖 33）。

![圖 33. 向外 poi 方向之平行垂直纏繞（parallel vertical wraps）計拍圖，呈現不同時序變體。](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FyzTdmcAflTptRXe9Tua3%252FFig%252033.png%3Falt%3Dmedia%26token%3D3f700ab7-b0b0-406f-8166-20b7c5e94443&width=768&dpr=3&quality=100&sign=8d5fb0a7&sv=2)
_圖 33. 向外 poi 方向之平行垂直纏繞（parallel vertical wraps）計拍圖，呈現不同時序變體。_

Similarly, we can create graphs for poi spinning in the same direction (Fig. 34), where one hand’s graph will be vertically mirrored. Interestingly, a same-direction parallel vertical wrap in a half-open timing is one of the popular beginner tricks taught—chase the sun.  
同樣地，我們可以為同向旋轉的 poi 繪製圖表（圖 34），其中一隻手的圖表將呈垂直鏡像。

有趣的是，在半開放時值（half-open timing）下的同向平行垂直纏繞，是教學中最受歡迎的初學者招式之一：追日（chase the sun）。

![圖 34. 逆時針 poi 方向之平行垂直纏繞（parallel vertical wraps）計拍圖，呈現不同時序變體。](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FssYrHeHstO7CsuSMezvf%252FFig%252034.png%3Falt%3Dmedia%26token%3D40c2fb20-0409-43b6-95e9-66a6e5f96ae3&width=768&dpr=3&quality=100&sign=ddf6802f&sv=2)
_圖 34. 逆時針 poi 方向之平行垂直纏繞（parallel vertical wraps）計拍圖，呈現不同時序變體。_

Likewise, we can build graphs for vertical wraps on the left side with opposing outward poi directions (Fig. 35).  
同樣地，我們可以針對左側具有相反向外 poi 方向的垂直纏繞（vertical wraps）建立圖表（圖 35）。

![圖 35. 向外 poi 方向左側垂直纏繞（vertical wraps）之時間差變體拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FP7WMk0DcdXKqTVld24jz%252FFig%252035.png%3Falt%3Dmedia%26token%3Db96e95a0-2d4f-4266-bc2a-035018c87c67&width=768&dpr=3&quality=100&sign=3356ec74&sv=2)
_圖 35. 向外 poi 方向左側垂直纏繞（vertical wraps）之時間差變體拍節圖（Beat graphs）_

### Section summary | 章節總結

* Two adjacent reels can be combined into a single trajectory—a wrap, which is the simplest combination without extra rotations.  
兩個相鄰的繞環（reels）可以組合成單一軌跡：即纏繞（wrap），這是最簡單且不含額外旋轉的組合方式。

* A one-handed wrap can be performed in 8 different positions.  
單手纏繞可以在 8 個不同的位置進行。

* Combining wraps with both hands yields 24 symmetrical positions.  
結合雙手的纏繞可產生 24 個對稱位置。

* Any two-handed wrap can be performed in 4 unique timing types.  
任何雙手纏繞皆可以 4 種獨特的時序（timing）類型進行。

* Each timing type of wraps can be performed in two timing/direction combinations.  
每一種纏繞（wraps）的計時類型都可以透過兩種計時／方向組合來執行。

* The beat graphs of vertical wraps are asymmetrical along the time axis, so they are vertically "mirrored" depending on the poi direction.  
垂直纏繞的拍點圖（beat graphs）沿時間軸呈非對稱分佈，因此會根據 poi 的方向進行垂直「鏡像」。

Cosmo

#### Positioning of cosmo | Cosmo 的定位

The combination of three reels in a single sequence without extra rotations is called cosmo. Following the familiar pattern, let’s break down all possible combinations, starting with positioning diagrams. We will create diagrams of all possible combinations of three reels in a single sequence for each hand separately (Fig. 36).  
在單一序列中結合三個繞環（reels）且不增加額外旋轉的組合稱為 cosmo。遵循熟悉的模式，讓我們從位置圖開始拆解所有可能的組合。我們將分別為每隻手建立在單一序列中所有可能的三繞環組合圖表（圖 36）。

![圖 36. 單手 cosmo 位置的變體](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F7U49Pq3XYphLQTn7o86a%252FFig%252036.png%3Falt%3Dmedia%26token%3Dcb9abdad-f987-49a3-8f16-5c37319f4cc6&width=768&dpr=3&quality=100&sign=28698917&sv=2)
_圖 36. 單手 cosmo 位置的變體_

You may notice that the "⭘" position is always opposite the "━" position. This is a natural limitation of our body—we cannot enter or exit a reel behind the back without passing through a reel on our own side at the same level. As a result, in the case of cosmo, each "⭘" opposite a "━" could be omitted without losing informativeness. However, in this work, I will present diagrams with the full set of symbols to ensure that the combination of three reels corresponds to three symbols in the diagram.

您可能會注意到，「⭘」位置總是與「━」位置相對。這是我們身體的自然限制——若不經過同側且同高度的繞環（reel），我們便無法進入或離開背後的繞環。

因此，在 cosmo 的情況下，每個與「━」相對的「⭘」都可以在不失資訊完整性的情況下省略。然而，在本著作中，我將呈現包含完整符號集的圖表，以確保三個繞環的組合能與圖表中的三個符號相對應。

Next, we’ll construct a matrix of combinations for both hands (Fig. 37), group all symmetrical combinations by similarity, and list the resulting combination groups (Fig. 38).  
接下來，我們將建構雙手的組合矩陣（圖 37），按相似性對所有對稱組合進行歸類，並列出產生的組合群組（圖 38）。

![圖 37. Cosmo 位置矩陣](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FtHFpoaXN02XmyyUJcayu%252FFig%252037.png%3Falt%3Dmedia%26token%3Da712e1e8-a844-4998-aecb-8578bf75674a&width=768&dpr=3&quality=100&sign=9110bb33&sv=2)
_圖 37. Cosmo 位置矩陣_

![圖 38. Cosmo 位置摘要表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F3SUXDHoIdz4CCwN92jsv%252FFig%252038.png%3Falt%3Dmedia%26token%3D268cb796-9ab2-4710-9569-b90440ced19a&width=768&dpr=3&quality=100&sign=f612579e&sv=2)
_圖 38. Cosmo 位置摘要表_

Let’s examine the different types in more detail:  
讓我們更詳細地檢視不同的類型：

* Common cosmo — The classic cosmo around the waist, its version around the head, and parallel mixed types. Interestingly, due to physical limitations, poi spinners often perform the upper diagonal cosmo when doing cosmo around the head. As a result, a pure upper cosmo is rarely performed.  
常見 cosmo：繞腰的經典 cosmo、繞頭的版本，以及平行的混合類型。有趣的是，由於生理限制，poi 玩家在進行繞頭 cosmo 時，通常會執行上對角線 cosmo。因此，純粹的上 cosmo 極少被執行。

* Diagonal cosmo — Cosmo with a change in vertical level, with the back position either on top or below, as well as semi-symmetrical diagonal combinations.  
對角線 Cosmo（Diagonal cosmo）：垂直高度發生變化的 Cosmo，其背後位置可位於上方或下方，亦包含半對稱的對角線組合。

* Vertical cosmo — Cosmo with a vertical wrap in front. Combinations include positions behind the head, behind the back, and mixed types.  
垂直 Cosmo（Vertical cosmo）：前方帶有垂直纏繞（wrap）的 Cosmo。組合方式包括頭後位、背後位以及混合型。

### Timing of cosmo | Cosmo 的時序

A full cosmo cycle consists of 4 beats—8 half-beat steps. To visualize this, let’s place the step reference points along the conditional cosmo trajectory for the right hand (Fig. 39). In this form, we can plot all the steps on a beat graph, reflecting the trajectory for a back view (Fig. 40).  
一個完整的 Cosmo 週期由 4 拍（即 8 個半拍）組成。為了將其視覺化，我們將步點參考標記在右手條件下的 Cosmo 軌跡上（圖 39）。

以此形式，我們可以將所有步點繪製在拍點圖（beat graph）上，反映出背面視角的軌跡（圖 40）。

![圖 39. 單 poi cosmo 中的 poi 運動圖解](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FHeUNxnbZk4OFEsWRmlzI%252FFig%252039.png%3Falt%3Dmedia%26token%3D285dd14b-f0cc-40b8-8b1c-50fafe2b7544&width=768&dpr=3&quality=100&sign=5868f9b5&sv=2)
_圖 39. 單 poi cosmo 中的 poi 運動圖解_

![圖 40. 單 poi cosmo 中 poi 運動之投影至拍幅圖（beat graph）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252Fgm6EJ6ov0yFGccTy3Yyw%252FFig%252040.png%3Falt%3Dmedia%26token%3De79df64e-0093-4b8b-acf7-7b5e0a43c819&width=768&dpr=3&quality=100&sign=1b423891&sv=2)
_圖 40. 單 poi cosmo 中 poi 運動之投影至拍幅圖（beat graph）_

To better understand how this projection works on the axes, let’s look at cosmo from above (Fig. 41).  
為了更深入理解此投影在軸線上是如何運作的，讓我們從上方俯瞰 cosmo（圖 41）。

![圖 41. 單 poi cosmo 中 poi 運動投影至拍點圖（beat graph）之示意圖（頂視圖）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FRkKfr7TupzSReeu3O5W0%252FFig%252041.png%3Falt%3Dmedia%26token%3D4a38ac4c-3d49-4897-adc5-e6c06b6f984d&width=768&dpr=3&quality=100&sign=64aa4d89&sv=2)
_圖 41. 單 poi cosmo 中 poi 運動投影至拍點圖（beat graph）之示意圖（頂視圖）_

You can immediately notice a new way of visualizing the poi’s movement around the body, shown as a curve connecting points on the central axis.  
您可以立即注意到一種視覺化 poi 繞身體運動的新方式，表現為連接中心軸上各點的曲線。

In the five-axis system, the central axis represents the poi’s position in either the front or back plane, depending on the context. In cosmo, when transferring the poi from one extreme position to the other (e.g., from the front to the back), it passes through the front plane and immediately moves into the back plane without extra rotations. To represent this transition along a single axis, the step points on the central axis are connected with an enclosing curve.  
在五軸系統中，中心軸代表 poi 在前平面或後平面的位置，具體取決於上下文。在 cosmo 中，當 poi 從一個極端位置轉移到另一個位置時（例如，從前方轉移到後方），它會穿過前平面並立即進入後平面，而無需額外的旋轉。為了在單一軸上表示這種轉換，中心軸上的步點（step points）會以一條封閉曲線連接。

Using the principles we’re already familiar with, we can depict other types of cosmo (Fig. 42).  
利用我們已經熟悉的原理，我們可以描繪其他類型的 cosmo（圖 42）。

![圖 42. 單手不同 cosmo 位置之示意圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F64l1gwabPpL4ntAJ6JXk%252FFig%252042.png%3Falt%3Dmedia%26token%3D0a5273cd-1336-4b7a-affe-9f5ae4410db8&width=768&dpr=3&quality=100&sign=dc689e5e&sv=2)
_圖 42. 單手不同 cosmo 位置之示意圖_

For example, let’s overlay the graphs of both hands in a low cosmo and, by shifting the right-hand graph, we’ll create graphs of all eight timing variants of cosmo (Fig. 43).  
例如，讓我們將低位 cosmo 中雙手的圖表重疊，並透過移動右手圖表，建立出 cosmo 所有八種相位變體的圖表（圖 43）。

![圖 43. 低位 Cosmo (low cosmo) 不同時序變體的拍點圖 (Beat graphs)](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FZ1Ft975rvSbIk4rL73bd%252FFig%252043.png%3Falt%3Dmedia%26token%3D5fe052e4-34f1-4edf-891f-9cdcd066aa8a&width=768&dpr=3&quality=100&sign=c23ceb30&sv=2)
_圖 43. 低位 Cosmo (low cosmo) 不同時序變體的拍點圖 (Beat graphs)_

From the graphs, we can see that there are 5 unique timing variants of cosmo. Two of them (8/8 and 4/8) are symmetrical, and three (1/8, 2/8, and 3/8) are asymmetrical with their mirrored copies (5/8, 6/8, 7/8) with the other leading hand. Each cosmo also corresponds to a pair of timing/direction combinations with which it can be performed. The opened cosmo on this list is the most familiar classic cosmo.  
從圖表中我們可以看到，Cosmo 共有 5 種獨特的時序變體。其中兩種（8/8 與 4/8）是對稱的，而另外三種（1/8、2/8 與 3/8）則是非對稱的，並與另一隻手領先的鏡像版本（5/8、6/8、7/8）相對應。每一種 Cosmo 也對應一組可用於執行該動作的時序／方向組合。此列表中的開放式 Cosmo（Opened Cosmo）即是大家最熟悉的經典 Cosmo。

> Cosmo and wraps share a common system of timing names, so any cosmo can be broken down into wraps or D-wraps with similar names.  
Cosmo 與纏繞（Wraps）共用一套相同的時序命名系統，因此任何 Cosmo 都可以分解為具有相似名稱的纏繞或 D-纏繞（D-wraps）。

Using other axes, we can create graphs for other types of cosmo, such as high diagonal cosmo (Fig. 44).  
利用其他軸線，我們可以為其他類型的 Cosmo 建立圖表，例如高對角線 Cosmo（圖 44）。

![圖 44. 上對角線 Cosmo 時序變體的拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FTHIVffU060rdqbaY2Yc5%252FFig%252044.png%3Falt%3Dmedia%26token%3D7c654cfe-04f9-4422-9f1b-aa6e625e239c&width=768&dpr=3&quality=100&sign=eb3c9d07&sv=2)
_圖 44. 上對角線 Cosmo 時序變體的拍節圖（Beat graphs）_

Vertical cosmo graphs  垂直宇宙圖 (Vertical cosmo graphs)

Similar to vertical wraps, the beat graphs of vertical cosmo are asymmetrical and change their appearance when the poi direction changes, so they require separate consideration.  
與垂直纏繞（vertical wraps）相似，垂直 cosmo 的拍點圖（beat graphs）具有不對稱性，且會隨著 poi 方向的改變而變換形態，因此需要分開討論。

For clarity, let’s plot the poi’s movement trajectory using the example of a lower vertical cosmo with the right hand (Fig. 45) and build its graph (Fig. 46).  
為了清晰起見，我們以右手進行下方垂直 cosmo 為例（圖 45），繪製 poi 的運動軌跡並建立其圖表（圖 46）。

![圖 45. 單 poi 垂直 cosmo 中的 poi 運動示意圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FkupkpkmvIpoREWa28PMo%252FFig%252045.png%3Falt%3Dmedia%26token%3Dec620d60-80ed-491f-a778-6f170cdd64f6&width=768&dpr=3&quality=100&sign=84675bfd&sv=2)
_圖 45. 單 poi 垂直 cosmo 中的 poi 運動示意圖_

![圖 46. 單 poi 垂直 cosmo 中的 poi 運動投影圖至拍點圖（beat graph）上](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FNZ7R8I2Se6asTxQho3Lg%252FFig%252046.png%3Falt%3Dmedia%26token%3D1f6552ac-bbbd-4f0c-bcb5-fbd5123f8411&width=768&dpr=3&quality=100&sign=34c6f290&sv=2)
_圖 46. 單 poi 垂直 cosmo 中的 poi 運動投影圖至拍點圖（beat graph）上_

Now, let’s examine the graphs of various vertical cosmo moves, taking into account the poi direction (Fig. 47).  
現在，讓我們考量 poi 的方向，檢視各種垂直 cosmo 動作的圖表（圖 47）。

![圖 47. 右手在所有方向下的垂直 cosmo 拍點圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FKcQdqlRpGosTD4oogl9z%252FFig%252047.png%3Falt%3Dmedia%26token%3D4dfe88ea-cae5-417b-bf62-de9f4c71e2ca&width=768&dpr=3&quality=100&sign=bd5da936&sv=2)
_圖 47. 右手在所有方向下的垂直 cosmo 拍點圖_

Next, we’ll create the graphs for the timing variants of vertical cosmo using the example of opposite outward poi directions (Fig. 48).  
接下來，我們將以 poi 相對向外方向（圖 48）為例，為垂直 cosmo 的正時變體建立圖表。

![圖 48. 向外方向垂直 cosmo 之拍幅圖 (Beat graphs)](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FX6pHJDAknE9Kcy5bbTJ9%252FFig%252048.png%3Falt%3Dmedia%26token%3D09c655d5-25a0-4ec8-a066-ac49be658c1e&width=768&dpr=3&quality=100&sign=e794c3aa&sv=2)
_圖 48. 向外方向垂直 cosmo 之拍幅圖 (Beat graphs)_

Similarly, we can build graphs for same-direction poi movement, in this case counterclockwise (Fig. 49).  
同樣地，我們可以構建相同方向 poi 運動的圖表，在此案例中為逆時針方向（圖 49）。

![圖 49. 逆時針方向垂直 cosmo 之拍幅圖 (Beat graphs)](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F085YGnWq3D6AVJkTB1XJ%252FFig%252049.png%3Falt%3Dmedia%26token%3D44640f5c-476d-443f-8e67-22e6ae3a455e&width=768&dpr=3&quality=100&sign=a48da8bb&sv=2)
_圖 49. 逆時針方向垂直 cosmo 之拍幅圖 (Beat graphs)_

### Section summary | 章節總結

* A combination of three consecutive reels without extra rotations is called cosmo.  
三個連續且無額外旋轉的繞環（reels）組合稱為 cosmo。

* There are a total of 12 symmetrical positions where cosmo can be performed.  
總共有 12 個對稱位置可以執行 cosmo。

* Cosmo in any of these positions can be executed in 8 timing variants, 5 of which are unique, and 3 are mirrored copies of existing types.  
在這些位置中的任何一個執行 cosmo，皆有 8 種正時/相位（timing）變體，其中 5 種是唯一的，另外 3 種則是現有類型的鏡像副本。

* Each cosmo timing variant can be performed with 2 timing/direction combinations.  
每一種 cosmo 正時/相位變體都可以透過 2 種正時/方向（timing/direction）組合來執行。

* Any cosmo can be broken down into various wraps, with timing names corresponding to the cosmo types.  
任何 cosmo 都可以分解為各種纏繞（wraps），其正時名稱與 cosmo 類型相對應。

## Physical limitations of the system | 系統的物理限制

Despite the accuracy of the theoretical model, the physical limitations of our body sometimes impose constraints, making certain elements described in this work difficult or even impossible to perform. Perhaps the most noticeable limitation in this system relates to the Split-Same timing/direction combination. Only in the Split-Same timing/direction combination is it impossible to spin poi in the same plane from a single point—the poi will simply tangle with each other or wrap around the arms. For this reason, in a linked wrap composed of two Split-Same weaves, we cannot transition from one weave to another without extra rotations.  
儘管理論模型具有準確性，但我們身體的物理限制有時會施加約束，使得本作中所描述的某些元素難以甚至無法執行。在此系統中，最顯著的限制或許與 Split-Same（分時同向）的計時／方向組合有關。

唯獨在 Split-Same 組合中，無法從單一點在同一平面上旋轉 poi：poi 會直接相互纏繞或捲繞在手臂上。因此，在由兩個 Split-Same weave 組成的連動捲繞（linked wrap）中，若不增加額外的旋轉，我們便無法從一個 weave 轉換到另一個 weave。

In the classic two-beat waist wrap, as mentioned earlier, this problem is solved with an additional poi rotation in front of the body during one of the transitions. Since this system excludes any unnecessary rotations, in its pure form, these wraps can only be performed using "workarounds" like rotations in the negative space between the arms.  
在前面提到的經典兩拍腰部捲繞（two-beat waist wrap）中，此問題是透過在其中一個轉換過程中，於身體前方增加一次額外的 poi 旋轉來解決的。

由於本系統排除了任何不必要的旋轉，在其純粹的形式下，這些捲繞只能透過「折衷方案」來完成，例如在手臂間的負空間（negative space）中進行旋轉。

This issue affects a large number of Split-Same tricks in the described system. Some can be resolved by using negative space, while others are simply impossible. Considering how popular this timing is, it might seem like a significant drawback of the system. However, I ask everyone to remember that tricks in this timing represent only a quarter of the entire variety.  
這個問題影響了所述系統中大量的 Split-Same 招式。有些可以透過利用負空間來解決，而另一些則根本無法實現。考慮到這種計時方式的普及程度，這似乎是該系統的一個重大缺陷。

然而，我請各位記住，這種計時下的招式僅佔整體多樣性的四分之一。

Another example of physical limitations is the upper D-crossers. When the hand is in the upper back position (behind the head), it blocks the entire area above its shoulder. If we need to place the second hand above this (non-native) shoulder, we can only thread it through a narrow gap between the arm and the head. This allows us to hold the upper D-crosser but will lock one of the hands, severely limiting the ability to enter or exit the position. This is precisely why the main version of the aforementioned classic upper cosmo around the head is actually diagonal—because the front hand, in its extreme position, is placed not above but below the other hand's shoulder.  
物理限制的另一個例子是上方 D-crossers。當手處於後上方位置（頭後方）時，它會阻擋其肩膀上方的整個區域。如果我們需要將第二隻手置於這個（非原生）肩膀上方，我們只能將其穿過手臂與頭部之間狹窄的縫隙。這雖然能讓我們維持上方 D-crosser 的姿勢，但會鎖住其中一隻手，嚴重限制了進入或退出該位置的能力。

這正是為什麼前述經典的繞頭上方 cosmo，其主要版本實際上是斜向的：因為處於極限位置的前手並非置於另一隻手的肩膀上方，而是下方。

Despite many physical limitations, most elements of the system are performable, and some of the "problematic" ones can be executed using various loopholes, encouraging the search for creative approaches.  
儘管存在許多物理限制，該系統中的大多數元素仍是可實行的，而某些「具問題性」的元素則可透過各種變通方法來完成，進而鼓勵研究者尋求更具創意的方法。

## Conclusion | 結論

In conclusion, any spinning move within the body cross can be decomposed into weaves and mills in different positions and timings. The wraps and cosmo we’ve explored cover all the main ways to combine weaves and mills. Thus, the described elements can be considered a toolkit, and understanding its components provides a comprehensive skill set for performing any possible spinning trick within the body cross.  
總結而言，任何在身體十字（body cross）範圍內的旋轉動作，皆可分解為不同位置與時機下的 weave 與 mill。我們所探討的 wrap 與 cosmo 涵蓋了結合 weave 與 mill 的所有主要方式。

因此，上述元素可被視為一套工具箱，而理解其組成部分，則為執行身體十字範圍內任何可能的旋轉招式提供了全面的技能組合。

Without a doubt, the total number of elements described in this work is incredibly vast, but we are talking about the theoretical maximum of possible variations. In practice, attempting to learn them all would be inefficient. Even the best poi spinners in the world do not master more than 10% of the system described above. However, by understanding the structure of the entire variety of body cross tricks, we can chart the most efficient path to mastering this field. Not only can this accelerate the learning of body tracing, but it can also push its boundaries even further.  
毫無疑問，本作中所描述的元素總數極其龐大，但我們討論的是可能變化的理論最大值。在實踐中，試圖學習所有動作是缺乏效率的。即使是世界上最頂尖的 poi 玩家，所掌握的內容也不會超過上述系統的 10%。

然而，透過理解整個身體十字招式多樣性的結構，我們可以規劃出精通此領域最有效的路徑。這不僅能加速身體追蹤（body tracing）的學習，還能進一步推展其邊界。

Developing training programs based on this system is a subjective and creative process. Every instructor or poi enthusiast can create their own list of tricks to study, based on personal taste, teaching experience, and current trends—each approach can be interesting in its own way. That’s what I’ve done, forming my own body tracing training program largely based on this system, and I encourage other instructors to do the same.  
基於此系統開發訓練課程是一個主觀且具創造性的過程。

每位教練或 poi 愛好者都可以根據個人品味、教學經驗和當前趨勢，建立自己的招式學習清單：每種方法都有其獨到之處。這正是我的做法，我主要基於此系統形成了自己的身體追蹤訓練計畫，我也鼓勵其他教練效法。

I hope this system will help more poi spinners reach a high level more quickly, without losing time, energy, or motivation to advance poi technique to new heights yet unknown to us.  
我希望這套系統能幫助更多 poi 玩家更快地達到高水準，而不會浪費時間、精力或動力，進而將 poi 技術推向我們尚未知曉的新高度。

## Acknowledgements | 致謝

I want to thank Roman “Rem” Anufriev for his careful review, valuable ideas, and professional advice, which significantly improved the quality of this work.  
我要感謝 Roman “Rem” Anufriev 的仔細審閱、寶貴見解與專業建議，這些貢獻顯著提升了本研究的品質。

Special thanks to my wife Julia Kushnaryova for believing in me and her invaluable support in all my endeavors.  
特別感謝我的妻子 Julia Kushnaryova，感謝她對我的信任，以及在我所有事業中提供的無價支持。

## Appendix: Hyper | 附錄：Hyper

Although all the important information in this study has already been covered, I would like to mention one final missing element of this system. I have described double consecutive reel combinations (wraps) and triple combinations (cosmo), but there also exists a quadruple combination, which I have named hyper cosmo (or simply Hyper).  
儘管本研究中的所有重要資訊皆已涵蓋，我仍想提及此系統中最後一個缺失的元素。我已經描述了雙重連續繞環組合（wraps）與三重組合（cosmo），但還存在一種四重組合，我將其命名為 hyper cosmo（或簡稱為 Hyper）。

The positioning of the hyper is limited to a single option for each hand, so the positioning matrix will look as follows (Fig. 50).  
hyper 的定位對每隻手而言僅限於單一選項，因此定位矩陣如下所示（圖 50）。

![圖 50. hyper 的定位矩陣](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FqQ2QbsP3SuCHgVywVn8s%252FFig%252050.png%3Falt%3Dmedia%26token%3D74c9e288-d2bf-4c46-87c4-789af32c695e&width=768&dpr=3&quality=100&sign=2a8e3127&sv=2)  
_圖 50. hyper 的定位矩陣_

Let’s take a closer look at the poi’s movement cycle by drawing its conditional trajectory (Fig. 51). As shown in the diagram, the hyper can be considered a vertical cosmo with an added section behind the head. We can immediately construct a beat graph, using the right hand as an example (Fig. 52). The graph is once again vertically asymmetrical, meaning that a separate set of graphs must be created for each poi direction.  
讓我們透過繪製 poi 的條件軌跡，進一步觀察其運動週期（圖 51）。如圖所示，hyper 可被視為在頭部後方增加了一個區段的垂直 cosmo。我們可以直接以右手為例構建拍點圖（beat graph）（圖 52）。

該圖表再次呈現垂直不對稱，這意味著必須針對每個 poi 方向建立一組獨立的圖表。

![圖 51. 右手向內方向 hyper 之條件軌跡](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FTwIap0o32Wqm8SxWu85z%252FFig%252051.png%3Falt%3Dmedia%26token%3D278b248b-492b-4c90-b9c0-03414bb4974a&width=768&dpr=3&quality=100&sign=27487a70&sv=2)
_圖 51. 右手向內方向 hyper 之條件軌跡_

![圖 52. 右手 Hyper 之拍點圖（Beat graph）向內方向](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F47DTtjjrhc4sj9O4Qtz7%252FFig%252052.png%3Falt%3Dmedia%26token%3D112548f6-744f-4bca-8184-7819edef1e54&width=768&dpr=3&quality=100&sign=90cf569e&sv=2)
_圖 52. 右手 Hyper 之拍點圖（Beat graph）向內方向_

The hyper has a 10-step cycle, allowing us to create 10 timing variants for this move, 6 of which are unique and 4 are "mirrored" versions of some of them. For example, I will provide the graphs for opposite inward poi directions (Fig. 53) and same-direction counterclockwise movement (Fig. 54). The naming system for hyper timing is likely to be different, so I will not assign names to the timing variants here, leaving only the fractional shift values.  
此 hyper 具有 10 步週期，使我們能為此動作建立 10 種正時（timing）變體，其中 6 種是唯一的，另外 4 種則是其中某些變體的「鏡像」版本。

例如，我將提供 poi 相對向內方向（圖 53）以及同向逆時針運動（圖 54）的圖表。Hyper 正時的命名系統可能會有所不同，因此我在此不會為這些正時變體命名，僅保留分數偏移值。

![圖 53. 相對向內方向 hyper 之拍幅圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FzQCIhhqO6MyVKzoQvrRy%252FFig%252053.png%3Falt%3Dmedia%26token%3D5b499a7c-9b9d-4779-a6b4-4328d87b7b2c&width=768&dpr=3&quality=100&sign=cb13babc&sv=2)
_圖 53. 相對向內方向 hyper 之拍幅圖（Beat graphs）_

![圖 54. 同向逆時針 Hyper 之拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FDl8fcUB2crbtikA1cJ3f%252FFig%252054.png%3Falt%3Dmedia%26token%3D27ff0f48-fc50-4916-a72b-dc9b83e5d01c&width=768&dpr=3&quality=100&sign=a1fdc109&sv=2)
_圖 54. 同向逆時針 Hyper 之拍節圖（Beat graphs）_

This long and limited-use pattern may not be valuable for effective training programs, but it is nonetheless interesting by virtue of its existence and will surely delight those who dare to explore it.  
這種冗長且用途有限的模式，對於有效的訓練計畫而言可能價值不高，但其存在本身便具有趣味性，且無疑會令那些敢於探索它的玩家感到欣喜。`;

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
