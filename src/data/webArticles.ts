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
  
本文透過大量圖示與拍點圖，從「位置」與「時序」兩個方向切入，將 reels、weaves、windmills、crossers、waist wraps 與 meltdowns 等 poi 動作整理成一套 Body Tracing 的系統化框架。  
這套框架主要以 poi 為核心，但其中對身體路徑、平面轉換與動作結構的分析，也能提供其他 Flow Arts 道具作為參考。

## 前言

現在的 poi 招式與變化已經非常龐大，幾乎不可能靠一個人全部學完。也因此，當時間、體力與學習資源都有限時，poi 玩家最需要面對的問題就是：**該先學什麼，才能讓自己更有效率地進步？**
 
每一個 poi 招式，都會帶來不同程度的技巧養成。有些招式學會後，能延伸出許多變化；有些則是整個招式系統的基礎，能通往數十個動作家族與上百種變體。如果想在有限的時間內有效進步，就必須理解哪些動作最值得優先學習。而分類系統，正是幫助我們做出這種判斷的工具。

現代 poi 的招式分類，其實多半是隨著玩家社群自然發展出來的。不同招式群與家族之間雖然彼此有關聯，但這些關聯往往不夠明確，也不一定能形成完整的系統。  
為了讓知識更有條理，我們會試著從已知招式之間找出連結；但每一年，新的招式家族甚至全新的分類都可能出現，進一步改變我們原本對 poi 技術結構的理解。如果想建立一套清楚的分類架構，理想上必須同時看見所有的「**拼圖碎片**」。但在現實中，這幾乎不可能做到。

在這份研究中，我想換一個角度來整理 poi 動作：不只是從已經存在的招式之間找關聯，而是嘗試提出一套能夠生成各種動作的共通邏輯。  
透過這個角度，我們可以把整個系統看成一個完整架構。它不只包含我們現在已知的招式，也能幫助我們理解那些還沒被發現、或未來可能被發展出來的動作。
 
這項研究建立於一項廣泛存在的假設之上：任何招式皆可被拆解為更基礎的元素，而在最底層的結構中，所有動作其實都是由有限且在特定條件下不可再分的共同「**拼圖碎片**」所構成。  
本文的核心，正是試圖探討這些「**拼圖碎片**」究竟為何，以及它們如何被組合、延伸，進而形成各式各樣的動作。
 
試圖為所有 poi 建立如此深層的分類體系，無疑是一項過於龐大的工程。因此，我將研究範圍聚焦於一個更明確且有限的方向：**正面**（wall plane）配置下的 Body Tracing。  
並僅探討 poi 最主要的操作形式之一：**旋轉**（spinning）、**不涵蓋擺盪**（pendulums）、**滾動**（rolls）與**拋接**（tosses）。  
然而，正如您即將看到的，即便只侷限於這樣的範圍，依然足以再次展現 poi 所蘊含的近乎無限的可能性。

由於這份研究內容較深入，也帶有一定的技術分析性，因此會更適合已經有基礎的 poi 玩家閱讀，幫助他們整理自己的技術盲點，找到下一步可以深入練習的方向。  
對於有教學經驗的老師或社群帶領者來說，這套框架也能作為設計 Body Tracing 課程與訓練菜單時的參考，讓學習內容不只是累積招式，而是更有**系統地建立身體路徑**、時序與**動作結構**的理解。

## 研究領域  
所有 Body Tracing 動作皆可根據其執行的身體區域分為：軀幹、頭部、手臂與腿部（如圖 1）。
本研究僅聚焦於中央的軀幹區域，該區域包含肩膀上方與下方的所有區域（含背後）以及其間的軌跡。透過將頭頂上方區域劃分為獨立區域，軀幹區域形成了一個完全對稱的十字形。  
因此，在後續章節中，我將其稱為「**身體十字**」（body cross）。  

![圖 1. 身體追蹤中的身體分區](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FzHbTBKzR0j5jWbp5Uhu1%252FFig%25201.png%3Falt%3Dmedia%26token%3Dcd42e614-f89e-4dbe-8371-e4c93f5912c9&width=768&dpr=3&quality=100&sign=9e76fad9&sv=2)
_圖 1. 身體追蹤中的身體分區_

## 系統化原則
所有動作皆由一組有限且獨特的部件組成，如同積木一般，我們可以藉此建構出任何動作。基於此點，我們只需描述這些基本的「**原型元素**」（proto-elements）以及將其組合成基礎組合的原則。  
這使得任何複雜的動作都能被視為先前所述組件的結合。

在我提出的系統中，**身體交叉區域**（body cross zone）內的所有 poi 軌跡，皆可劃分為連接前後平面的均勻軌跡段—轉軸動作（如圖 2 所示）。  
換言之，身體交叉區域內的**任何動作**，都可以表示為不同位置轉軸動作的組合。這個術語並非高度專指，因此讓我們從基礎開始拆解。

![圖 2. 轉軸動作軌跡](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FfTArBUQGULf2jEpAEhXo%252FFig%25202.png%3Falt%3Dmedia%26token%3Da6a6fec6-dcc7-452f-a74e-c3cc84d3ff04&width=768&dpr=3&quality=100&sign=ff4c8a4c&sv=2)
_圖 2. 轉軸動作軌跡_
 
**轉軸動作**（reel）是一種處於牆面平面（wall plane）配置下的週期性運動，其中 poi 在前平面與後平面之間持續來回移動，並在每個平面各旋轉一圈；從 poi 操縱者的視角來看，其軌跡描繪出一個類似無限符號（∞）的形狀。  
簡單來說，轉軸動作可被描述為單 poi 的編織動作（weave）。
 
最簡單的雙環組合為雙手各持一環進行「**二拍編織**」（two-beat weave）。值得注意的是，當組合兩個環時，我們可以得到不同方向與時序的組合。這意味著在本研究中，二拍編織並不一定如傳統分類般，必然屬於同向運動。

> 除了**二拍編織**（two-beat weave），poi 當然也有三拍、五拍，甚至七拍編織。不過從這套框架的角度來看，這些較長拍數的編織，都可以理解成由「二拍編織」加上「不換平面的空轉」（empty rotations）所組成。所以在本文中，我們會先聚焦在二拍編織，因為它是整個編織類動作裡最基本、也最適合作為分析起點的形式。
 
簡單來說，在**身體十字區域**（body cross zone）內的各種動作，其實都可以拆解成同一個基礎元素：單顆 poi 在不同位置與方向中形成的**繞環**（reel）。  
而當雙手各自做出一個繞環時，最基本的組合就是**二拍編織**（two-beat weave）。接下來，我們會從繞環本身開始分析，看看它能出現在身體周圍的哪些位置。

## Reels（繞環）

### Reels 的定位

#### 圖形定位圖簡介
在**身體十字**（body cross）中，僅有 4 個區域可以進行繞環（reels）：兩個在肩膀上方，兩個在肩膀下方。在這 4 個區域中，每隻手可以佔據 6 個獨特的位置（圖 3）。

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

身體十字區域內**編織**（weaves）的任何其他位置，皆可視為上述位置的替代形式。  
例如，腋下與髖部的位置處於同一區域，兩者之間的差異並不影響動作原理，僅影響其視覺形態。

為了進一步探討雙手捲軸位置的多樣化組合，我們將分析轉換為圖形標記系統—**位置圖**（positioning diagrams）。

我們將身體交叉區域描繪為一個十字，並在其兩臂之間標註手臂的位置，使用三種符號來表示位置：

* ⭘：same side：同側，
* ╋：opposite side in front of the body：身體前方的對側，
* ━：opposite side behind the back/head：背部/頭部後方的對側。

因此，右手所有可能位置的標記方式將如圖（圖 3）所示。左手所有可能的位置也以同樣的方式記錄，但採左右鏡像對稱。

> 此標記系統使我們能夠在不依賴顏色區分的情況下辨別左手與右手。然而，為了在本研究中更易於察覺，我們將左手標記為藍色，右手標記為粉紅色。

#### Two-handed positions | 雙手位置
在掌握每隻手所有可能的位置後，我們便能建立一個雙手定位選項的矩陣：將右手的位置沿水平方向排列，左手的位置沿垂直方向排列，並把相似的組合歸類在一起（圖 4）。  
我們可以清楚看見，從左上角延伸至右下角對角線上的所有群組皆為完全對稱；而其餘群組則屬於非對稱位置，並在對角線另一側擁有彼此鏡像對應的「**雙生組**」（twins）。這些成對的群組在圖中以相同顏色標示。

![圖 4. 定位矩陣](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FXF1pgzXXIxN1KIRxY2WW%252FFig%25204.png%3Falt%3Dmedia%26token%3Dfb166ad4-c48f-4034-9b18-c607d1f7a3a1&width=768&dpr=3&quality=100&sign=734b5f80&sv=2)
_圖 4. 定位矩陣_
 
因此，我們獲得了 36 個可以進行**繞環**（reels）的可能位置。此圖表中的每個群組代表了一個簡單繞環組合的小「家族」。讓我們嘗試列出這些組合、進行分析，並為尚未命名的組合命名。
 
我們可以很快看出，雙手的位置大致可分為兩種類型：一種是雙手位於身體同一側（左側或右側），另一種則是雙手分別位於身體兩側。正如後文將提到的，這兩種位置在動作運作方式上有著本質性的差異。因此，我們先將它們區分為：在同側進行的「**經典編織**」（classic weaves），以及在異側進行的「**風車**」（mills）。

#### MILLS: | 風車

* **常見風車** (Common Mills)：肩膀上方與下方的經典風車，以及混合類型。

* **交錯** (Crossers)：在本系統中，交錯被視為雙手位於非原生側（non-native sides）的風車。大眾熟知的交錯最接近混合類型。

* **背後交錯** (Back crossers)：位於背後、頭後，或結合這兩個位置的混合型交錯。

* **D-交錯** (D-crossers，雙面交錯)：一種雙面交錯，其中一隻手位於背後，另一隻手位於身前。

#### WEAVES: | 編織

* **交織**（Weave）：肩上、肩下以及混合類型的交織。

* **背後交織**（Back weave）：背後、頭後以及其混合形式的交織。

至此，我們已識別出**在身體十字**（body cross）範圍內所有可能進行繞環（reels）的手部位置。接下來，我們將探討這些組合在**時序**（timing）以及 poi 相對方向上的運作方式。

![圖 5. 摘要表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FPpBKJ9UhJVoboIeWqGA6%252FFig%25205.png%3Falt%3Dmedia%26token%3D88a3714d-2edb-43dc-8de2-8d0daadf8c8a&width=768&dpr=3&quality=100&sign=cf1362ed&sv=2)
_圖 5. 摘要表_

### Reels 的時序

#### 拍點圖表法
為了研究不同的**時序類型**（timing types），我提出了拍點圖表法，這需要獨立的探討。透過分析 poi 時序的基本類型，將有助於理解我們如何描述任何複雜動作中的所有時序類型。

僅需在手部位置固定的情況下旋轉兩顆 poi ，我們就能藉由改變兩個參數來達成不同的組合： poi 的旋轉方向，以及它們彼此之間的相對時序。改變 poi 方向可以產生同向旋轉（same-direction rotation）或反向旋轉（opposite rotation）。時序的運作則更為具體。當兩顆 poi 旋轉時，我們可以移動其中一顆在時間上的週期，進而產生不同的時序類型。

決定時序類型數量的關鍵因素，在於週期移動的步進值（step）。在 poi 時序中，如同所有動作一樣（除了一些極為特定的招式類別外），一個步進值即為 poi 旋轉半圈（若使用節奏術語，則為半拍）。

> 「**步進值**」在這段脈絡裡其實是在描述：「兩顆 poi 的時間差，是以多大的單位去偏移」  
英文原文是：The determining factor in the number of timing types is the step by which the cycle is shifted.

這裡的 step 比較偏向：
* 時序偏移的「最小單位」
* 週期移動的「離散間隔」
* timing phase 的切分基準
 
當 poi 在固定手部位置進行單純旋轉時，其完整運動週期由一次完整旋轉構成，其中包含兩個半拍。我們可以根據這項資訊建立一個時間軸圖，用以抽象表示 poi 從頂部位置（第一個半拍）移動到底部位置（第二個半拍），再返回頂部的運動過程（圖 6）。

![圖 6. poi 圓周運動的拍點圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FaAIIKpkec6YzmbfAW4Ff%252FFig%25206.png%3Falt%3Dmedia%26token%3D2fdf8273-0f6d-45d6-87a3-6c88c53c6d99&width=768&dpr=3&quality=100&sign=16931536&sv=2)
_圖 6. poi 圓周運動的拍點圖_

> 在這樣的側面投影中，poi 的精確運動圖表應類似於正弦波，在頂部和底部點，poi 會穿過拍點參考點。然而，為了視覺上的簡便，從現在起，我們將以直線連接各個拍點。

產生的**拍點圖**（beat graph）對兩顆 poi 而言將完全相同。因此，若我們從相同位置開始轉動兩顆 poi，其圖表將會重疊並完美地相互鏡射：這被稱為 Together Time 相位，其拍點圖呈**一比一**對齊（圖 7）。

![圖 7. 兩顆 poi 進行圓周同步運動之拍點圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F09JX69851sh9iOljDiUP%252FFig%25207.png%3Falt%3Dmedia%26token%3D103cfb6e-24b1-4981-a436-6685eb0d69dd&width=768&dpr=3&quality=100&sign=90c3648&sv=2)
_圖 7. 兩顆 poi 進行圓周同步運動之拍點圖_

接著，我們可以將第二顆 poi 的起始點移動一個步驟，使一顆 poi 從頂部位置開始，另一顆則從底部開始。在這種情況下，兩者的圖表將完全相反——這被稱為 Split Time 相位，其拍點圖相對於 poi 的完整運動週期偏移了二分之一（圖 8）。

![圖 8. 兩顆 poi 進行圓周非同步運動之拍點圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FdyYyMl94iB0lreg3zkIp%252FFig%25208.png%3Falt%3Dmedia%26token%3D41369909-909a-4edd-9c6c-c07e9e3ef296&width=768&dpr=3&quality=100&sign=932a95de&sv=2)
_圖 8. 兩顆 poi 進行圓周非同步運動之拍點圖_

由於一個完整週期中只有兩個半拍，進一步移動第二個 poi 的圖表將完成該週期並使其回到起始位置。因此，我們可以清楚地看到，對於單拍 poi 動作，僅存在兩種正時（timing）類型：

* **同步時序**（Together Time）：兩個 poi 同時通過每個拍子參考點（例如：同步蝴蝶）。

* **不同步時序**（Split Time）：兩個 poi 同時通過相對的拍子參考點（例如：非同步蝴蝶）。

重要的是要理解，正時本質上與方向無關。在此處及後續內容中，我們將看到任何正時類型都可以透過 poi 的同向與異向運動來執行：

* **同向**（Same direction）：兩顆 poi 以相同方向運動。

* **反向**（Opposite direction）：兩顆 poi 以相反方向運動。

因此，共有四種時序與方向的組合，為了方便起見，我們將其縮寫如下：

* **TS**：同步 / 同向

* **SS**：不同步 / 同向

* **TO**：同步 / 反向 (Together Time / Opposite direction)

* **SO**：不同步 / 反向

> 在本著作中，我使用「同步時間」(Together Time) 一詞而非較為人熟知的「同時」(Same Time)，是為了便於縮寫。由於「相同」(Same) 與「交錯」(Split) 的英文首字母相同，在縮寫時較為不便。

#### 牆面投影中 Reel 的拍點圖

在理解了**拍點圖**（beat graphs）的原理後，讓我們改變其呈現形式，使其適用於檢視牆面平面（wall plane）配置下的 reel。首先，讓我們仔細觀察 reel 的軌跡圖（圖 9）。

poi 在身前繞行一圈，隨後在身後繞行一圈。在每一圈中，poi 會經過兩個代表半拍的參考點（即圓圈的底部與頂部位置）。poi 從一個平面轉換到另一個平面的位置稱為**轉換點**（transition point）。

![圖 9. 牆面投影中肩部下方與上方的繞環（Reel）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FBI3TydRzIrB0P21a4odj%252FFig%25209.png%3Falt%3Dmedia%26token%3Da564cf67-b36b-4a2e-93f9-1467b4646146&width=768&dpr=3&quality=100&sign=8e56778&sv=2)
_圖 9. 牆面投影中肩部下方與上方的繞環（Reel）_

讓我們以右手在同側肩膀下方進行的 reel 為例，在節拍圖（beat graph）上建立一個最清晰的身體投影。想像我們從後方觀察 poi 舞者，並將節拍圖的方向轉為垂直，使我們能沿著時間軸由上而下移動（圖 10）。

![圖 10. 單 poi reel 之拍點圖（Beat graph）於牆面平面（wall plane）投影中](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F4GbNstOsVZAhmQgLHi52%252FFig%252010.png%3Falt%3Dmedia%26token%3D6a7bba90-a6dd-443b-8593-ba40bb504b99&width=768&dpr=3&quality=100&sign=e9e2a59&sv=2)  
_圖 10. 單 poi reel 之拍點圖（Beat graph）於牆面平面（wall plane）投影中_

為了將前平面與後平面的旋轉區分到不同的軸線上，我們將 poi 的圓形軌跡描繪成大小不同的圓圈。

透過這種方式，前平面的兩個半拍位於中心軸上，而另外兩個半拍則位於後平面的側軸上。我們將以對應兩側的顏色，並使用字母 L（low，指肩膀下方的位置）來標記側軸。

在圖表中，您可以看到兩側的步階皆落在同一軸線上，這意味著兩者之間無法區分。

僅憑圖表，我們無法判斷 poi 在特定點是處於頂部還是底部。若我們以相反方向旋轉 poi，圖表將保持不變。這是此類圖表的局限性之一，但它反映了相位的真實意義：相位類型與 poi 的方向無關，因此在考慮相位時，方向並不重要。

只需將右手圖表移動到左側，我們就能得到右手在對向（左側）進行 reel 動作的圖表。同樣地，藉由加入左手在其自身側的圖表，我們可以描繪出左側二拍 weave 的圖表；而透過移動其中一個圖表（右手圖表），我們可以建立 weave 的四種時序類型（圖 11）。預想下一步，我們也加入 H 軸（高位：肩膀上方的位置），這在稍後將會提及.

![圖 11. 左側下繞（lower weave）四種計時類型的拍幅圖（beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FknzPxqF2AlkgUIxlU7KB%252FFig%252011.png%3Falt%3Dmedia%26token%3Dd58cfbe3-378e-4fe4-abad-518c36b98efe&width=768&dpr=3&quality=100&sign=9770ee18&sv=2)
_圖 11. 左側下繞（lower weave）四種計時類型的拍幅圖（beat graphs）_

從生成的圖表可以清楚看出，其中兩種時序類型（第一種與第三種）在形式上是獨一無二的，而另外兩種則互為鏡像。這種模式在任何涉及兩個以上拍點（beats）的動作中都十分常見。理論上，鏡像副本屬於獨立的時序類型，但在實務操作中，它們是原理相同但領先手不同的動作。

讓我們詳細檢視每一種類型：

* **Unison weave (uni-weave)**：手部動作在相位上完全相同 (1/1)，poi 同時在平面之間移動，同時位於前方平面，並同時位於後方平面。

* **Chasing weave**：一種源自經典兩拍 weave 的手部計時類型，其中一個 poi 領先並首先換邊，第二個 poi 則延遲半拍跟隨。這種計時類型是不對稱的，意即它具有一個領先手反轉的鏡像副本 (1/4, 3/4)。

* **Counter weave**：一種計時類型，其圖表偏移了**半個完整週期** (2/4) ，即一個完整旋轉。poi 同時換邊，但朝向彼此移動，絕不會同時位於同一側。

這是兩拍 weave 與 mill 的三種可能計時類型。每種計時類型皆可以 poi 的同向運動與反向運動進行，但針對每一種方向組合，僅能以其中一種計時類型呈現。可能的計時／方向組合分布如下：

* **同向編織（Unison weave）**：TS, SO（同步 / 同向，不同步 / 反向），雙手動作在相位上完全一致，兩顆 poi 同時進入前平面，也同時進入後平面。

* **追逐編織（Chasing weave）**：SS, TO (不同步 / 同向，同步 / 反向)

* **反向編織（Counter weave）**：TS、SO（同步／同向，不同步／反向）

在上方與下方的圖表中，分別列出了執行該動作時所對應的 poi 方向與相位計時之縮寫。

![圖 12. 下風車（lower mill）之拍點圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FP1wA4WjSLLhJVBZhGhzQ%252FFig%252012.png%3Falt%3Dmedia%26token%3D377213f1-5cc2-4de9-8653-966f53a0ed64&width=768&dpr=3&quality=100&sign=f31255c9&sv=2)
_圖 12. 下風車（lower mill）之拍點圖（Beat graphs）_

以同樣的方式，我們只需將每隻手的圖表描繪在各自的一側，即可構建出**風車**（mill）時序圖（圖 12）。

時序（timings）的數量與類型仍然相同。不過要注意，當圖表被移到身體另一側時，會變成水平鏡像，所以某些時序的圖形外觀可能會看起來像是相反的類型。例如，**同相編織**（uni-weave）的圖表，乍看會很像對衝風車（counter mill）的圖表。

當雙手位於身體兩側時，手部計時與計時／方向組合之間的映射關係變化如下：

* **同向風車（Unison mill）**：不同步／同向（SS）、同步／反向（TO）

* **追逐風車（Chasing mill）**：同步／同向（TS）、不同步／反向（SO）

* **反向風車（Counter mill）**：不同步／同向（SS）、同步／反向（TO）

> 時間／方向組合的分布與 reels 中轉換點（transition points）的位置有關。本研究完全基於轉換點與旋轉中心位於同一水平線上的情況。當轉換點移至垂直線時，執行不同時間／方向組合的動作便成為可能；但在實務操作中，在靠近身體處以垂直對齊的轉換點（無論是在上方或下方）旋轉 poi 顯然並不方便。

這可能是由於我們身體的垂直導向，使得垂直轉換點距離身體過近，增加了碰撞風險。此假設可由以下事實支持：在頭部上方的 mills，由於沒有任何障礙物阻礙運動，可以毫無問題地以垂直轉換點執行，這與臀部高度的 mills 截然不同。

> 儘管如此，在本研究中，我們並不考慮頭頂上方的點，因此不將此類轉換點位置納入考量，且所述之**時序分佈**（timing distribution）保持不變。

上述描述的拍點圖（beat graph）方法使我們能夠將所有位置中風車（mills）與編織（weaves）的任何變化視覺化。為了探索其視覺化方式，讓我們從捲軸（reel）的俯視圖（圖 13）來看。

在同側或在對側前方進行的捲軸圖形，以對應手的顏色實線表示，繪製於中心軸與側軸之間：肩下位置（1, 2）標示為「L」，肩上位置（4, 5）標示為「H」。在背後或頭後進行的捲軸，則以虛線表示：背後位置（3）繪製於中心軸與「L」軸之間，頭後位置（6）則繪製於中心軸與「H」軸之間。

![圖 13. 捲軸在 6 種可能位置的圖表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FzXycWWCKrgr9cngripbw%252FFig%252013.png%3Falt%3Dmedia%26token%3D05733f5c-ef2d-4ef8-b9e0-0680a0d1d38b&width=768&dpr=3&quality=100&sign=37612f34&sv=2)
_圖 13. 捲軸在 6 種可能位置的圖表_

為了更易於理解此圖形系統，您可以想像從俯視視角觀察人體，其中較靠近視點的高位軸線在外部顯得較寬，而較遠的低位軸線則較靠近內部的中心（圖 14）。

![圖 14. 節拍圖座標軸的可視化選項](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FO0ygFZgbV4IO4KzZvIO5%252FFig%252014.png%3Falt%3Dmedia%26token%3D77ff0e60-4815-4363-bc57-954300e796a9&width=768&dpr=3&quality=100&sign=fcbee5ac&sv=2)
_圖 14. 節拍圖座標軸的可視化選項_

以下為節拍圖（圖 15）中顯示的幾種不同捲軸組合範例：

![圖 15. 不同交織（weaves）與風車（mills）動作的拍點圖示例](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FcOxRKHf83y4KWhhP731X%252FFig%252015.png%3Falt%3Dmedia%26token%3Df163d271-a932-4d21-a722-42074cffa598&width=768&dpr=3&quality=100&sign=f6a01230&sv=2)
_圖 15. 不同交織（weaves）與風車（mills）動作的拍點圖示例_

#### 拍點圖的價值與目的

在進入下一章節之前，我想針對拍點圖（beat graphs）再多做些說明。拍點圖強大的功能使我們能夠描繪非常複雜的動作；然而，閱讀這些圖表需要相當高的技巧。預見到這項工具可能面臨的批評，我希望強調其主要目的與價值。

**拍點圖**（Beat graphs）首先提供了一種視覺化方法，用以識別任何長度動作的所有可能時序變體。更重要的是，它們使我們能夠將這些時序變體從「紙上理論」轉化為實踐。

本作中所描述的許多動作在應用拍點圖之前尚不為人所知；若缺乏清晰的記譜系統，僅憑想像力來發現這些動作將會極其困難。

無論圖表看起來多麼複雜且艱深，請記住，它並非旨在作為需要快速閱讀的日常工具。

相反地，它是一種研究方法，僅在發現新動作以及將其從「紙上」轉移到實際執行的過程中才需要。

#### 繞環（Weaves）與風車（Mills）的形態

我們已經從理論上探討了可以在何處以及執行哪些類型的 weave 與 mill，但當我們將旋轉 poi 的雙手置於同一個相互靠近的區域時，關於它們在有限空間中定位的實際問題便隨之而來。

例如，在執行同向反向 weave 時，我們可以將任一隻手置於上方，而無需改變正拍/反拍類型或 weave 的定位。在相同的空間與正拍/反拍下，這些手部位置的變化被稱為動作的「**形式**」（form）。

在某些情況下，動作的形式可以由動作中選擇的平面分層方式來決定。在本系統範圍之外的一個簡單例子是同步 butterfly 的平面定位——在 butterfly 的上半部分，右手的 poi 或左手的 poi 都可以更靠近觀看者。重新排列平面不會影響 butterfly 的力學結構，但會改變其分層。

在本文中，分層對於在同一區域（例如肩下）執行的**同步編織**（unison weaves）影響最大。在這些動作中，poi 同時處於同一個平面上，這使得將它們分配到不同層次的問題變得更加重要。因此，在保持時機與定位不變的情況下，同一種編織動作的不同形式數量最高可達四種。

**分層**（layering）的主題過於廣泛，無法在本文中詳盡闡述，因此我們僅註記了個別動作形式中可能存在的變體，並將此主題的詳細分析留待未來研究。

### 章節總結

* 幾乎所有在身體交叉區域（body cross zone）內的旋轉動作，都可以分解為不同位置的繞環（reels）與空轉（empty rotations）。

* 在身體交叉區域中，雙手共有 36 個可以執行繞環的位置。雙手同時進行的繞環會構成編織（weaves）或風車（mills）。

* 任何編織或風車動作都可以透過三種節奏類型之一來執行：同步（unison）、追逐（chasing）或相反（counter）。

* 總共有 4 種時序（timing）與方向的組合。每一種繞環（weave）與風車（mill）的相位類型，都可以在兩種相位/方向組合中執行。

* 在實務操作中，於某些繞環與風車動作裡，雙手可以在相同的區域與相位下佔據不同的位置，進而產生該動作的不同「形式」（forms）。

#### 繞環的組合原理

有人可能會認為，只要把所有位置中的**編織**（weaves）與**風車**（mills）時序都練熟，就足以應付任何招式的學習。這個想法雖然接近正確，但還不夠完整。

因為除了單獨掌握各種繞環（reels）之外，如何把繞環組合起來，以及如何在不同繞環之間順利轉換，也是一項需要另外研究的關鍵能力。因此，接下來我們將探討繞環的主要組合方式，並將它們分為**雙重組合**（double combinations）與**三重組合**（triple combinations），也就是由兩個或三個繞環所構成的組合。

讓我們再次從上方觀察繞環（圖 16）。

![圖 16. 三個層級的繞環（reel）組合](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FNi7hR0hUngyzAsxVUJN2%252FFig%252016.png%3Falt%3Dmedia%26token%3D2b21c321-6cc7-445c-bebd-7c1e95fb62e4&width=768&dpr=3&quality=100&sign=58d6c49f&sv=2)
_圖 16. 三個層級的繞環（reel）組合_

在兩側進行、由雙手操作的兩個繞環組合，已有一個廣為人知名稱：**腰繞**（waist wrap）。我們將移除對特定身體部位的指涉，僅使用「繞」（wrap）一詞，作為兩個相鄰繞環直接組合且無額外旋轉的通用名稱。

在單一序列中三個繞環組合的圖示中，我們可以看到在 cosmo 動作中熟悉的手臂軌跡。

在世界大部分地區，cosmo 被稱為 meltdown，但我將採用由日本人提出、較為熟悉的術語 cosmo，因為它更簡單且簡潔。

接下來，我們將更詳細地檢視「繞」（wraps）與 cosmo。

#### Wraps（纏繞）

使用現在熟悉的術語「**纏繞**」（wrap），我們必須稍微修改其定義。通常，「**腰部繞身**」（waist wrap）是指在不同側進行的任何兩種交織（weave）組合，最常見的是二拍或三拍交織。在本研究中，我們不考慮三拍交織，因為它們本質上是二拍交織與空轉（empty rotation）的更複雜組合。然而，即使是二拍交織，情況也並非那麼簡單。

在基於二拍交織的經典腰部繞身中，在從一側過渡到另一側的其中一個過程中，存在一個額外的空轉，其目的僅是為了將正確的手帶到前方。這種額外的旋轉僅在特定的相位/方向組合（Split Same）中才需要，因此這種繞身可以被確切地視為一個特例：即一種更複雜的組合，而非基礎動作。

因此，熟悉的腰部繞身並不適用於此系統：我們需要退後一步，重新定義我們對「繞身」一詞的理解。

讓我們觀察當相鄰的繞環（reels）在沒有額外旋轉的情況下結合成單一動作時的 poi 軌跡（圖 17）。我們得到一個持續三拍（6 步）且沒有空轉的迴圈軌跡，其中前方平面的圓圈由兩個繞環共用。正是這種 poi 形成此類迴圈的動作，我們將其稱為纏繞（wraps）。

![圖 17. 纏繞動作中單個 poi 的條件軌跡](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FVhGcWdGhLyrhSbz5lDbB%252FFig%252017.png%3Falt%3Dmedia%26token%3D4463b41d-b5f7-4d5d-ae14-5d7323eedbfc&width=768&dpr=3&quality=100&sign=7eaa7d6b&sv=2)
_圖 17. 纏繞動作中單個 poi 的條件軌跡_

（為了清晰起見，後向旋轉繪製得較小）

#### 纏繞的定位

遵循圖形定位圖的常用方法，讓我們描述單個 poi 兩個相鄰 reel 的所有可能組合。

在單個 poi 可執行的六個 reel 位置中，共有八種可能的配對（圖 18）。其他的雙重組合要麼因關節限制而無法達成，要麼需要透過額外的旋轉進行轉換。

![圖 18. 單手 poi 纏繞位置的變體](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FBpXFVt2v9s07duqEWT8v%252FFig%252018.png%3Falt%3Dmedia%26token%3D4224ac1d-6acd-4aba-80f0-082c3c3b2553&width=768&dpr=3&quality=100&sign=1d4bf259&sv=2)
_圖 18. 單手 poi 纏繞位置的變體_

根據我們所知的原理，讓我們透過將對稱組合依相似性進行歸類，建立一個**定位矩陣**（圖 19）。

如同交織（weaves）一般，我們可以看到一組半非對稱的「鏡像」群組，這代表了以兩種鏡像版本呈現的同一種動作類型。

![圖 19. 纏繞動作（wraps）之定位矩陣，並標示出相似性群組](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FdO27dw7ab0kl0jjiVZOf%252FFig%252019.png%3Falt%3Dmedia%26token%3Da4fe2d55-4dd3-4b54-baa1-08d0be50b37d&width=768&dpr=3&quality=100&sign=860d2e30&sv=2)
_圖 19. 纏繞動作（wraps）之定位矩陣，並標示出相似性群組_

> 經仔細檢視，我們可以發現大多數的組合都是非對稱的。從學習效率的角度來看，任何非對稱繞環（wraps）皆可被視為由兩個對稱繞環的垂直剖半組合而成。例如，對稱繞環（假設為 AA 與 BB）可以將其各自的一半進行組合，從而產生非對稱繞環（分別為 AB 與 BA）（圖 20）。

![圖 20. 建構非對稱纏繞（asymmetrical wraps）之範例，透過結合對稱纏繞之兩半部分](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FEuV80dobR0mqkr9PYT6w%252FFig%252020.png%3Falt%3Dmedia%26token%3D7a1963c1-463a-4038-afe1-b7045117a237&width=768&dpr=3&quality=100&sign=83954ed1&sv=2)
_圖 20. 建構非對稱纏繞（asymmetrical wraps）之範例，透過結合對稱纏繞之兩半部分_

> 因此，我們可以假設掌握所有對稱纏繞（symmetrical wraps）將能提供最全面的技能組合。因此，非對稱組合在系統中可被視為次要，且並非初步學習的必要內容。

讓我們將產生的纏繞群組列於表中，並為其命名以便進一步分析（圖 21）。

![圖 21. 纏繞技（wraps）總表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FfzWTfggEhmMvhsQ6RGpD%252FFig%252021.png%3Falt%3Dmedia%26token%3D5686c95b-76d2-456c-9c80-30ae1658f8a6&width=768&dpr=3&quality=100&sign=64737e28&sv=2)
_圖 21. 纏繞技（wraps）總表_

讓我們深入探討每一組纏繞動作（wraps）：

* **垂直纏繞（Vertical wraps）**：垂直纏繞是最顯而易見，同時也是最具辨識度的類型之一。我們稍後將對其進行更詳細的探討。

* **常見纏繞（Common wraps）**：經典的肩上與肩下纏繞，以及它們的混合變體。

* **對角線纏繞（Diagonal wraps）**：對角線纏繞及其各種組合。

* **背後纏繞（Back wraps）**：頭後與背後的背後纏繞，以及其混合變體。
背後纏繞（Back wraps）：頭後與背後的背後纏繞，以及其混合變體。

* **雙面纏繞（Double-sided wraps）**：半非對稱纏繞，其中一手在身前，另一手在身後，以及其混合變體。

#### 纏繞時序

在一個包含 3 拍的完整週期中，wrap 完成了 6 個半拍步驟。
讓我們回到先前用於描繪 wrap 中 poi 軌跡的圖示（圖 22）。透過此視覺化方式，我們可以建立一個清晰的拍號圖（beat graph）垂直投影，並將其鏡射以呈現背面視圖（圖 23）。

![圖 22. 單 poi 纏繞（wrap）中的 poi 運動圖解](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FFLzFdBMi2DPowLKA9ZmH%252FFig%252022.png%3Falt%3Dmedia%26token%3Dcba3464a-5acf-48de-aae3-fb3996ec4206&width=768&dpr=3&quality=100&sign=91c4cc94&sv=2)
_圖 22. 單 poi 纏繞（wrap）中的 poi 運動圖解_

![圖 23. 單 poi 纏繞（wrap）在節拍圖（beat graph）上的投影](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252Fj2XdCmiAEaXExlvxZTBK%252FFig%252023.png%3Falt%3Dmedia%26token%3D5023484c-f639-400f-9175-ffeeb28c86e1&width=768&dpr=3&quality=100&sign=8bce8df6&sv=2)
_圖 23. 單 poi 纏繞（wrap）在節拍圖（beat graph）上的投影_

以**低位纏繞**（lower wrap）為例，讓我們比較雙手在相同相位下的圖表；透過平移右手圖表，我們可得出 6 種**纏繞時序**（wrap timings）類型（圖 24）。

![圖 24. 低位纏繞（lower wrap）時值的拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FGFu6xy62no5tDX1VpWsf%252FFig%252024.png%3Falt%3Dmedia%26token%3Df320dc0d-cbc7-4f1f-8f35-6055de98bb2c&width=768&dpr=3&quality=100&sign=c9c3e3d6&sv=2)
_圖 24. 低位纏繞（lower wrap）時值的拍節圖（Beat graphs）_

與交織圖（weave graphs）相似，我們可以看到在 6 種纏繞時序（wrap timings）中，實際上只有 4 種是獨特的（1/1、1/6、2/6、3/6），而最後 2 種（4/6、5/6）則是現有時序由另一隻手導引的鏡像副本。

圖表中所顯示的纏繞時序建議名稱，是基於雙手相對於彼此的實際位置而定：

* **閉鎖式纏繞（Closed wrap）**：雙手同時移向對側，並在一個完整步法中完全交叉（閉合）。

* **半封閉纏繞（Half-closed wrap）**：存在雙手交叉，但隨即展開。

* **連動纏繞（Linked wrap）**：相位時機介於封閉與開放位置之間，但在實務操作上，雙手彼此仍維持輕微交叉（連動）狀態。
連動纏繞（Linked wrap）：相位時機介於封閉與開放位置之間，但在實務操作上，雙手彼此仍維持輕微交叉（連動）狀態。

* **半開放纏繞（Half-opened wrap）**：雙手不一定交叉，但始終保持靠近彼此移動。

每種纏繞都可以分解為數個具有不同相位時機的交織（weaves）或風車（mills），儘管生成的圖表在視覺上與交織圖表相似，但在實務操作中，其運動特性卻有所不同。

若要尋找纏繞圖表與交織圖表形式上的平行關係，應注意其個別細節。例如，在半封閉纏繞中，可以觀察到與反向交織（counter weave）完全相同的重複片段，而此觀察是絕對正確的（圖 25）。半封閉纏繞確實包含反向交織，這在圖表中清晰可見。

![圖 25. 半封閉式纏繞（half-closed wrap）拍點圖上的反向編織（counter weave）片段](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FdFAGQUFdZSO3fyiOXolM%252FFig%252025.png%3Falt%3Dmedia%26token%3Dc89c384d-2547-4d97-bd75-b7f87b6ac4c8&width=768&dpr=3&quality=100&sign=7c3927ab&sv=2)
_圖 25. 半封閉式纏繞（half-closed wrap）拍點圖上的反向編織（counter weave）片段_

回到俯視圖，讓我們思考纏繞（wraps）在不同位置下的拍點圖（beat graphs）呈現方式（圖 26）。

![圖 26. 不同位置纏繞（wraps）之拍點圖（beat graphs）圖表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FFke6V0oG5KTv431osClO%252FFig%252026.png%3Falt%3Dmedia%26token%3Dd7950868-7d19-463b-abed-ced6570e39ad&width=768&dpr=3&quality=100&sign=d172d714&sv=2)
_圖 26. 不同位置纏繞（wraps）之拍點圖（beat graphs）圖表_

例如，讓我們建構**背後低位纏繞**（lower wraps behind the back）的時序圖（Fig. 27）。

![圖 27. 下背纏繞（lower back wraps）之拍點圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252Fy7yAa9J2gmt4pWjJid1d%252FFig%252027.png%3Falt%3Dmedia%26token%3Da3cc2972-3292-411d-a201-d8d6a923d3ab&width=768&dpr=3&quality=100&sign=7a77ec90&sv=2)
_圖 27. 下背纏繞（lower back wraps）之拍點圖（Beat graphs）_

更具體的是 D-wrap，其時序計時（timings）的分布有所不同，這可以從其名稱的變化中看出（圖 28）。

![圖 28. D-wraps 的拍點圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FDE0HJeFSO1x7CX72meOp%252FFig%252028.png%3Falt%3Dmedia%26token%3D433e3dd1-be9b-4b68-bd1c-b8f981c16bcb&width=768&dpr=3&quality=100&sign=e9f9119a&sv=2)
_圖 28. D-wraps 的拍點圖（Beat graphs）_

如同**交錯轉**（weaves）的例子，雙手位於身體兩側，因此儘管圖表外觀相似，其相位計時（timings）卻轉變為相反狀態。因此，「**封閉式計時**」（closed timing）轉變為「**開放式計時**」（open timing），此時雙手始終位於身體兩側且互不靠近。「半開放式」與「半封閉式」計時互換了位置，而「**連結式計時**」（linked timing）則保持不變。

> 可以注意到，在**常規纏繞**（regular wrap）中不存在開放式計時，而在 D 型纏繞（D-wraps）中則不存在封閉式計時。其原因在於，纏繞計時的命名邏輯與「宇宙模式」（cosmo）相同，在該模式下所有類型都會同時存在。

這些名稱直觀地反映了執行纏繞動作時的本質，因此儘管在「紙面上」看似複雜，在實踐中一切都會變得更加清晰。

透過使用不同的軸線與標記法，可以描繪出任何纏繞（wraps）的圖表（圖 29）：

![圖 29. 各種纏繞圖表（wrap graphs）之示意圖範例](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252Fy17MjEZax4RKhS3gFAir%252FFig%252029.png%3Falt%3Dmedia%26token%3D72b75233-3518-4103-9133-18997f29835a&width=768&dpr=3&quality=100&sign=28939f7e&sv=2)
_圖 29. 各種纏繞圖表（wrap graphs）之示意圖範例_

#### Vertical wrap graphs | 垂直纏繞圖表

垂直纏繞的描繪較為複雜，應分開進行檢視。以右手在同側進行、poi 向外旋轉的垂直纏繞為例（圖 30）。

![圖 30. 右手垂直纏繞（vertical wrap）之條件軌跡示意圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FptvyW8NxUSSY7Fvff99J%252FFig%252030.png%3Falt%3Dmedia%26token%3D194065f2-a7db-4986-8506-845d467b3594&width=768&dpr=3&quality=100&sign=93e71b41&sv=2)
_圖 30. 右手垂直纏繞（vertical wrap）之條件軌跡示意圖_

我們將展開背面視角的條件軌跡，並為了清晰起見對其進行變形處理，使所有**拍頻參考點**（beat reference points）皆與其各自的軸線對齊（圖 31）。

如圖表所示，**垂直纏繞**（vertical wrap）在保持相同拍數的同時，其結構與其他纏繞方式不同。poi 在一側的每個軸線上於兩個半拍之間交替：前平面兩步、肩膀上方兩步，以及肩膀下方兩步。

![圖 31. 向外垂直纏繞（vertical wrap）之投影至拍點軸（beat axis）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FyRwrum5liw5hRonCd1nV%252FFig%252031.png%3Falt%3Dmedia%26token%3Dbbb737f0-b866-43a1-9fa5-f81641a0f8a2&width=768&dpr=3&quality=100&sign=32d06a4b&sv=2)
_圖 31. 向外垂直纏繞（vertical wrap）之投影至拍點軸（beat axis）_

**垂直纏繞圖表**（vertical wrap graphs）的核心特徵在於其沿時間軸的不對稱性，這意味著每張圖表僅對應一種特定的 poi 方向。因此，必須針對所有 poi 方向及其組合分別建立獨立的圖表。

讓我們檢視單手 poi（右手）在所有方向上的垂直纏繞圖表，並回到俯視圖（圖 32）。

![圖 32. 右手於所有方向之垂直纏繞（vertical wraps）拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F3B5VoeQnayQCVvRkyeQ8%252FFig%252032.png%3Falt%3Dmedia%26token%3Da632fd0d-8626-426e-97d4-5a1a82bd2ed2&width=768&dpr=3&quality=100&sign=899db35d&sv=2)
_圖 32. 右手於所有方向之垂直纏繞（vertical wraps）拍節圖（Beat graphs）_

現在，我們將為雙手向外旋轉 poi 的垂直纏繞（vertical wraps）構建圖表（圖 33）。

![圖 33. 向外 poi 方向之平行垂直纏繞（parallel vertical wraps）計拍圖，呈現不同時序變體。](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FyzTdmcAflTptRXe9Tua3%252FFig%252033.png%3Falt%3Dmedia%26token%3D3f700ab7-b0b0-406f-8166-20b7c5e94443&width=768&dpr=3&quality=100&sign=8d5fb0a7&sv=2)
_圖 33. 向外 poi 方向之平行垂直纏繞（parallel vertical wraps）計拍圖，呈現不同時序變體。_

同樣地，我們可以為同向旋轉的 poi 繪製圖表（圖 34），其中一隻手的圖表將呈垂直鏡像。

有趣的是，在半開放時值（half-open timing）下的同向平行垂直纏繞，是教學中最受歡迎的初學者招式之一：追日（chase the sun）。

![圖 34. 逆時針 poi 方向之平行垂直纏繞（parallel vertical wraps）計拍圖，呈現不同時序變體。](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FssYrHeHstO7CsuSMezvf%252FFig%252034.png%3Falt%3Dmedia%26token%3D40c2fb20-0409-43b6-95e9-66a6e5f96ae3&width=768&dpr=3&quality=100&sign=ddf6802f&sv=2)
_圖 34. 逆時針 poi 方向之平行垂直纏繞（parallel vertical wraps）計拍圖，呈現不同時序變體。_

同樣地，我們可以針對左側具有相反向外 poi 方向的垂直纏繞（vertical wraps）建立圖表（圖 35）。

![圖 35. 向外 poi 方向左側垂直纏繞（vertical wraps）之時間差變體拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FP7WMk0DcdXKqTVld24jz%252FFig%252035.png%3Falt%3Dmedia%26token%3Db96e95a0-2d4f-4266-bc2a-035018c87c67&width=768&dpr=3&quality=100&sign=3356ec74&sv=2)
_圖 35. 向外 poi 方向左側垂直纏繞（vertical wraps）之時間差變體拍節圖（Beat graphs）_

### Section summary | 章節總結

* 兩個相鄰的繞環（reels）可以組合成單一軌跡：即纏繞（wrap），這是最簡單且不含額外旋轉的組合方式。

* 單手纏繞可以在 8 個不同的位置進行。

* 結合雙手的纏繞可產生 24 個對稱位置。

* 任何雙手纏繞皆可以 4 種獨特的時序（timing）類型進行。

* 每一種纏繞（wraps）的計時類型都可以透過兩種計時／方向組合來執行。

* 垂直纏繞的拍點圖（beat graphs）沿時間軸呈非對稱分佈，因此會根據 poi 的方向進行垂直「鏡像」。

Cosmo

#### Cosmo 的定位

在單一序列中結合三個繞環（reels）且不增加額外旋轉的組合稱為 cosmo。遵循熟悉的模式，讓我們從位置圖開始拆解所有可能的組合。我們將分別為每隻手建立在單一序列中所有可能的三繞環組合圖表（圖 36）。

![圖 36. 單手 cosmo 位置的變體](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F7U49Pq3XYphLQTn7o86a%252FFig%252036.png%3Falt%3Dmedia%26token%3Dcb9abdad-f987-49a3-8f16-5c37319f4cc6&width=768&dpr=3&quality=100&sign=28698917&sv=2)
_圖 36. 單手 cosmo 位置的變體_

您可能會注意到，「⭘」位置總是與「━」位置相對。這是我們身體的自然限制——若不經過同側且同高度的繞環（reel），我們便無法進入或離開背後的繞環。

因此，在 cosmo 的情況下，每個與「━」相對的「⭘」都可以在不失資訊完整性的情況下省略。然而，在本著作中，我將呈現包含完整符號集的圖表，以確保三個繞環的組合能與圖表中的三個符號相對應。

接下來，我們將建構雙手的**組合矩陣**（圖 37），按相似性對所有對稱組合進行歸類，並列出產生的組合群組（圖 38）。

![圖 37. Cosmo 位置矩陣](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FtHFpoaXN02XmyyUJcayu%252FFig%252037.png%3Falt%3Dmedia%26token%3Da712e1e8-a844-4998-aecb-8578bf75674a&width=768&dpr=3&quality=100&sign=9110bb33&sv=2)
_圖 37. Cosmo 位置矩陣_

![圖 38. Cosmo 位置摘要表](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F3SUXDHoIdz4CCwN92jsv%252FFig%252038.png%3Falt%3Dmedia%26token%3D268cb796-9ab2-4710-9569-b90440ced19a&width=768&dpr=3&quality=100&sign=f612579e&sv=2)
_圖 38. Cosmo 位置摘要表_

讓我們更詳細地檢視不同的類型：

* **常見 cosmo**：繞腰的經典 cosmo、繞頭的版本，以及平行的混合類型。有趣的是，由於生理限制，poi 玩家在進行繞頭 cosmo 時，通常會執行上對角線 cosmo。因此，純粹的上 cosmo 極少被執行。

* **對角線 Cosmo（Diagonal cosmo）**：垂直高度發生變化的 Cosmo，其背後位置可位於上方或下方，亦包含半對稱的對角線組合。

* **垂直 Cosmo（Vertical cosmo）**：前方帶有垂直纏繞（wrap）的 Cosmo。組合方式包括頭後位、背後位以及混合型。

### Cosmo 的時序

一個完整的 Cosmo 週期由 4 拍（即 8 個半拍）組成。為了將其視覺化，我們將步點參考標記在右手條件下的 Cosmo 軌跡上（圖 39）。

以此形式，我們可以將所有步點繪製在拍點圖（beat graph）上，反映出背面視角的軌跡（圖 40）。

![圖 39. 單 poi cosmo 中的 poi 運動圖解](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FHeUNxnbZk4OFEsWRmlzI%252FFig%252039.png%3Falt%3Dmedia%26token%3D285dd14b-f0cc-40b8-8b1c-50fafe2b7544&width=768&dpr=3&quality=100&sign=5868f9b5&sv=2)
_圖 39. 單 poi cosmo 中的 poi 運動圖解_

![圖 40. 單 poi cosmo 中 poi 運動之投影至拍幅圖（beat graph）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252Fgm6EJ6ov0yFGccTy3Yyw%252FFig%252040.png%3Falt%3Dmedia%26token%3De79df64e-0093-4b8b-acf7-7b5e0a43c819&width=768&dpr=3&quality=100&sign=1b423891&sv=2)
_圖 40. 單 poi cosmo 中 poi 運動之投影至拍幅圖（beat graph）_

為了更深入理解此投影在軸線上是如何運作的，讓我們從上方俯瞰 cosmo（圖 41）。

![圖 41. 單 poi cosmo 中 poi 運動投影至拍點圖（beat graph）之示意圖（頂視圖）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FRkKfr7TupzSReeu3O5W0%252FFig%252041.png%3Falt%3Dmedia%26token%3D4a38ac4c-3d49-4897-adc5-e6c06b6f984d&width=768&dpr=3&quality=100&sign=64aa4d89&sv=2)
_圖 41. 單 poi cosmo 中 poi 運動投影至拍點圖（beat graph）之示意圖（頂視圖）_

您可以立即注意到一種視覺化 poi 繞身體運動的新方式，表現為連接中心軸上各點的曲線。

在五軸系統中，中心軸代表 poi 在前平面或後平面的位置，具體取決於上下文。在 cosmo 中，當 poi 從一個極端位置轉移到另一個位置時（例如，從前方轉移到後方），它會穿過前平面並立即進入後平面，而無需額外的旋轉。為了在單一軸上表示這種轉換，中心軸上的步點（step points）會以一條封閉曲線連接。

利用我們已經熟悉的原理，我們可以描繪其他類型的 cosmo（圖 42）。

![圖 42. 單手不同 cosmo 位置之示意圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F64l1gwabPpL4ntAJ6JXk%252FFig%252042.png%3Falt%3Dmedia%26token%3D0a5273cd-1336-4b7a-affe-9f5ae4410db8&width=768&dpr=3&quality=100&sign=dc689e5e&sv=2)
_圖 42. 單手不同 cosmo 位置之示意圖_

如，讓我們將低位 cosmo 中雙手的圖表重疊，並透過移動右手圖表，建立出 cosmo 所有八種相位變體的圖表（圖 43）。

![圖 43. 低位 Cosmo (low cosmo) 不同時序變體的拍點圖 (Beat graphs)](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FZ1Ft975rvSbIk4rL73bd%252FFig%252043.png%3Falt%3Dmedia%26token%3D5fe052e4-34f1-4edf-891f-9cdcd066aa8a&width=768&dpr=3&quality=100&sign=c23ceb30&sv=2)
_圖 43. 低位 Cosmo (low cosmo) 不同時序變體的拍點圖 (Beat graphs)_

從圖表中我們可以看到，Cosmo 共有 5 種獨特的時序變體。其中兩種（8/8 與 4/8）是對稱的，而另外三種（1/8、2/8 與 3/8）則是非對稱的，並與另一隻手領先的鏡像版本（5/8、6/8、7/8）相對應。每一種 Cosmo 也對應一組可用於執行該動作的時序／方向組合。此列表中的開放式 Cosmo（Opened Cosmo）即是大家最熟悉的經典 Cosmo。

> Cosmo 與纏繞（Wraps）共用一套相同的時序命名系統，因此任何 Cosmo 都可以分解為具有相似名稱的纏繞或 **D-纏繞（D-wraps）**。

利用其他軸線，我們可以為其他類型的 Cosmo 建立圖表，例如高對角線 Cosmo（圖 44）。

![圖 44. 上對角線 Cosmo 時序變體的拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FTHIVffU060rdqbaY2Yc5%252FFig%252044.png%3Falt%3Dmedia%26token%3D7c654cfe-04f9-4422-9f1b-aa6e625e239c&width=768&dpr=3&quality=100&sign=eb3c9d07&sv=2)
_圖 44. 上對角線 Cosmo 時序變體的拍節圖（Beat graphs）_

垂直宇宙圖 (Vertical cosmo graphs)

與垂直纏繞（vertical wraps）相似，垂直 cosmo 的拍點圖（beat graphs）具有不對稱性，且會隨著 poi 方向的改變而變換形態，因此需要分開討論。

為了清晰起見，我們以右手進行下方垂直 cosmo 為例（圖 45），繪製 poi 的運動軌跡並建立其圖表（圖 46）。

![圖 45. 單 poi 垂直 cosmo 中的 poi 運動示意圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FkupkpkmvIpoREWa28PMo%252FFig%252045.png%3Falt%3Dmedia%26token%3Dec620d60-80ed-491f-a778-6f170cdd64f6&width=768&dpr=3&quality=100&sign=84675bfd&sv=2)
_圖 45. 單 poi 垂直 cosmo 中的 poi 運動示意圖_

![圖 46. 單 poi 垂直 cosmo 中的 poi 運動投影圖至拍點圖（beat graph）上](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FNZ7R8I2Se6asTxQho3Lg%252FFig%252046.png%3Falt%3Dmedia%26token%3D1f6552ac-bbbd-4f0c-bcb5-fbd5123f8411&width=768&dpr=3&quality=100&sign=34c6f290&sv=2)
_圖 46. 單 poi 垂直 cosmo 中的 poi 運動投影圖至拍點圖（beat graph）上_

現在，讓我們考量 poi 的方向，檢視各種垂直 cosmo 動作的圖表（圖 47）。

![圖 47. 右手在所有方向下的垂直 cosmo 拍點圖](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FKcQdqlRpGosTD4oogl9z%252FFig%252047.png%3Falt%3Dmedia%26token%3D4dfe88ea-cae5-417b-bf62-de9f4c71e2ca&width=768&dpr=3&quality=100&sign=bd5da936&sv=2)
_圖 47. 右手在所有方向下的垂直 cosmo 拍點圖_

接下來，我們將以 poi 相對向外方向（圖 48）為例，為垂直 cosmo 的正時變體建立圖表。

![圖 48. 向外方向垂直 cosmo 之拍幅圖 (Beat graphs)](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FX6pHJDAknE9Kcy5bbTJ9%252FFig%252048.png%3Falt%3Dmedia%26token%3D09c655d5-25a0-4ec8-a066-ac49be658c1e&width=768&dpr=3&quality=100&sign=e794c3aa&sv=2)
_圖 48. 向外方向垂直 cosmo 之拍幅圖 (Beat graphs)_

同樣地，我們可以構建相同方向 poi 運動的圖表，在此案例中為逆時針方向（圖 49）。

![圖 49. 逆時針方向垂直 cosmo 之拍幅圖 (Beat graphs)](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F085YGnWq3D6AVJkTB1XJ%252FFig%252049.png%3Falt%3Dmedia%26token%3D44640f5c-476d-443f-8e67-22e6ae3a455e&width=768&dpr=3&quality=100&sign=a48da8bb&sv=2)
_圖 49. 逆時針方向垂直 cosmo 之拍幅圖 (Beat graphs)_

### Section summary | 章節總結

* 三個連續且無額外旋轉的繞環（reels）組合稱為 cosmo。

*  12 個對稱位置可以執行 cosmo。

* 在這些位置中的任何一個執行 cosmo，皆有 8 種正時/相位（timing）變體，其中 5 種是唯一的，另外 3 種則是現有類型的鏡像副本。

* 每一種 cosmo 正時/相位變體都可以透過 2 種正時/方向（timing/direction）組合來執行。

* 任何 cosmo 都可以分解為各種纏繞（wraps），其正時名稱與 cosmo 類型相對應。

## 系統的物理限制

儘管理論模型具有準確性，但我們身體的物理限制有時會施加約束，使得本作中所描述的某些元素難以甚至無法執行。在此系統中，最顯著的限制或許與 Split-Same（分時同向）的計時／方向組合有關。

唯獨在 Split-Same 組合中，無法從單一點在同一平面上旋轉 poi：poi 會直接相互纏繞或捲繞在手臂上。因此，在由兩個 Split-Same weave 組成的連動捲繞（linked wrap）中，若不增加額外的旋轉，我們便無法從一個 weave 轉換到另一個 weave。

在前面提到的**經典兩拍腰部捲繞**（two-beat waist wrap）中，此問題是透過在其中一個轉換過程中，於身體前方增加一次額外的 poi 旋轉來解決的。

由於本系統排除了任何不必要的旋轉，在其純粹的形式下，這些捲繞只能透過「折衷方案」來完成，例如在手臂間的**負空間**（negative space）中進行旋轉。

這個問題影響了所述系統中大量的 Split-Same 招式。有些可以透過利用負空間來解決，而另一些則根本無法實現。考慮到這種計時方式的普及程度，這似乎是該系統的一個重大缺陷。

然而，我請各位記住，這種計時下的招式僅佔整體多樣性的四分之一。

物理限制的另一個例子是上方 D-crossers。當手處於後上方位置（頭後方）時，它會阻擋其肩膀上方的整個區域。如果我們需要將第二隻手置於這個（非原生）肩膀上方，我們只能將其穿過手臂與頭部之間狹窄的縫隙。這雖然能讓我們維持上方 D-crosser 的姿勢，但會鎖住其中一隻手，嚴重限制了進入或退出該位置的能力。

這正是為什麼前述經典的繞頭上方 cosmo，其主要版本實際上是斜向的：因為處於極限位置的前手並非置於另一隻手的肩膀上方，而是下方。

儘管存在許多物理限制，該系統中的大多數元素仍是可實行的，而某些「**具問題性**」的元素則可透過各種變通方法來完成，進而鼓勵研究者尋求更具創意的方法。

## 結論

總結而言，任何在**身體十字**（body cross）範圍內的旋轉動作，皆可分解為不同位置與時機下的 weave 與 mill。我們所探討的 wrap 與 cosmo 涵蓋了結合 weave 與 mill 的所有主要方式。

因此，上述元素可被視為一套工具箱，而理解其組成部分，則為執行身體十字範圍內任何可能的旋轉招式提供了全面的技能組合。

毫無疑問，本作中所描述的元素總數極其龐大，但我們討論的是可能變化的理論最大值。在實踐中，試圖學習所有動作是缺乏效率的。即使是世界上最頂尖的 poi 玩家，所掌握的內容也不會超過上述系統的 10%。

然而，透過理解整個身體十字招式多樣性的結構，我們可以規劃出精通此領域最有效的路徑。這不僅能加速身體追蹤（body tracing）的學習，還能進一步推展其邊界。

基於此系統開發訓練課程是一個主觀且具創造性的過程。

每位教練或 poi 愛好者都可以根據個人品味、教學經驗和當前趨勢，建立自己的招式學習清單：每種方法都有其獨到之處。這正是我的做法，我主要基於此系統形成了自己的身體追蹤訓練計畫，我也鼓勵其他教練效法。

我希望這套系統能幫助更多 poi 玩家更快地達到高水準，而不會浪費時間、精力或動力，進而將 poi 技術推向我們尚未知曉的新高度。

## 致謝

我要感謝 **Roman “Rem” Anufriev** 的仔細審閱、寶貴見解與專業建議，這些貢獻顯著提升了本研究的品質。

特別感謝我的妻子 **Julia Kushnaryova**，感謝她對我的信任，以及在我所有事業中提供的無價支持。

## 附錄：Hyper

儘管本研究中的所有重要資訊皆已涵蓋，我仍想提及此系統中最後一個缺失的元素。我已經描述了**雙重連續繞環組合（wraps）**與**三重組合（cosmo）**，但還存在一種四重組合，我將其命名為 **hyper cosmo**（或簡稱為 Hyper）。

hyper 的定位對每隻手而言僅限於單一選項，因此定位矩陣如下所示（圖 50）。

![圖 50. hyper 的定位矩陣](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FqQ2QbsP3SuCHgVywVn8s%252FFig%252050.png%3Falt%3Dmedia%26token%3D74c9e288-d2bf-4c46-87c4-789af32c695e&width=768&dpr=3&quality=100&sign=2a8e3127&sv=2)  
_圖 50. hyper 的定位矩陣_

讓我們透過繪製 poi 的條件軌跡，進一步觀察其運動週期（圖 51）。如圖所示，hyper 可被視為在頭部後方增加了一個區段的垂直 cosmo。我們可以直接以右手為例構建拍點圖（beat graph）（圖 52）。

該圖表再次呈現垂直不對稱，這意味著必須針對每個 poi 方向建立一組獨立的圖表。

![圖 51. 右手向內方向 hyper 之條件軌跡](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FTwIap0o32Wqm8SxWu85z%252FFig%252051.png%3Falt%3Dmedia%26token%3D278b248b-492b-4c90-b9c0-03414bb4974a&width=768&dpr=3&quality=100&sign=27487a70&sv=2)
_圖 51. 右手向內方向 hyper 之條件軌跡_

![圖 52. 右手 Hyper 之拍點圖（Beat graph）向內方向](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252F47DTtjjrhc4sj9O4Qtz7%252FFig%252052.png%3Falt%3Dmedia%26token%3D112548f6-744f-4bca-8184-7819edef1e54&width=768&dpr=3&quality=100&sign=90cf569e&sv=2)
_圖 52. 右手 Hyper 之拍點圖（Beat graph）向內方向_

此 hyper 具有 10 步週期，使我們能為此動作建立 10 種正時（timing）變體，其中 6 種是唯一的，另外 4 種則是其中某些變體的「鏡像」版本。

例如，我將提供 poi 相對向內方向（圖 53）以及同向逆時針運動（圖 54）的圖表。Hyper 正時的命名系統可能會有所不同，因此我在此不會為這些正時變體命名，僅保留分數偏移值。

![圖 53. 相對向內方向 hyper 之拍幅圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FzQCIhhqO6MyVKzoQvrRy%252FFig%252053.png%3Falt%3Dmedia%26token%3D5b499a7c-9b9d-4779-a6b4-4328d87b7b2c&width=768&dpr=3&quality=100&sign=cb13babc&sv=2)
_圖 53. 相對向內方向 hyper 之拍幅圖（Beat graphs）_

![圖 54. 同向逆時針 Hyper 之拍節圖（Beat graphs）](https://antispinner.gitbook.io/btf/~gitbook/image?url=https%3A%2F%2F3242591672-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FoDdWGHljmerhnK8y6IQO%252Fuploads%252FDl8fcUB2crbtikA1cJ3f%252FFig%252054.png%3Falt%3Dmedia%26token%3D27ff0f48-fc50-4916-a72b-dc9b83e5d01c&width=768&dpr=3&quality=100&sign=a1fdc109&sv=2)
_圖 54. 同向逆時針 Hyper 之拍節圖（Beat graphs）_

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
