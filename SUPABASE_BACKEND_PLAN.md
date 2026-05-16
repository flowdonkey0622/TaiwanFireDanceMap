# Supabase 後台與內容資料庫規劃

## 目標

當前網站是 Vite + React 靜態網站，活動、日曆、教學影片資料都寫在程式碼中。未來目標是保留一般使用者可直接瀏覽公開網站，同時新增管理員後台，讓管理員透過簡單的帳號密碼登入後台更新網站資料。

第一版建議採用 Supabase 作為低成本代管後端，維持目前 GitHub Pages 部署公開前端。公開頁面直接讀取 Supabase 中已發布的資料，後台登入後可新增、編輯、下架內容。

## 核心方針

- 一般使用者不需要登入即可瀏覽網站。
- 只有管理員需要登入後台。
- 不開放公開註冊、會員功能、留言、投稿或付款。
- 第一版不自建後端 API，避免增加部署與維運成本。
- 公開前端可使用 Supabase anon key，但資料安全必須依靠 Row Level Security。
- 絕對不要把 Supabase `service_role` key 放入前端程式碼、GitHub repo 或公開部署環境。
- 活動與日曆共用同一份活動資料，避免未來重複維護。
- 教學影片與部落格文章先用同一套內容模型，等內容量變大後再拆分。

## 建議架構

```text
一般使用者
  -> GitHub Pages 靜態網站
  -> Supabase anon key
  -> 只能讀取 published 資料

管理員
  -> /admin/login
  -> Supabase Auth email/password
  -> /admin 後台
  -> 新增、編輯、下架資料

Supabase
  -> Postgres Database
  -> Auth
  -> Row Level Security
  -> Storage（未來需要圖片時再啟用）
  -> Edge Functions（未來需要批次任務、通知、爬蟲時再啟用）
```

## 資料模型規劃

### events

活動與成發日曆共用同一張表。

建議欄位：

- `id`：唯一 ID。
- `title`：活動名稱。
- `date`：活動日期。
- `county`：縣市名稱，需與地圖顯示名稱一致，例如 `臺北市`、`新北市`。
- `venue`：活動地點。
- `type`：活動類型，例如 `workshop`、`jam`、`performance`、`festival`。
- `summary`：簡短介紹。
- `link`：活動連結。
- `status`：`draft` 或 `published`。
- `created_at`：建立時間。
- `updated_at`：更新時間。

公開頁只讀取 `status = published` 的資料。地圖活動數量、縣市 popup、日曆都由這張表產生。

### clubs

各校火舞社團資訊。

建議欄位：

- `id`：唯一 ID。
- `school_name`：學校名稱。
- `club_name`：社團名稱。
- `county`：縣市名稱。
- `summary`：社團簡介。
- `instagram_url`：Instagram 連結。
- `website_url`：其他網站或社群連結。
- `status`：`draft` 或 `published`。
- `created_at`：建立時間。
- `updated_at`：更新時間。

第一版只需支援公開展示與後台管理，不需要社團自行登入管理。

### content_categories

教學與文章分類。

建議欄位：

- `id`：唯一 ID。
- `name`：分類名稱，例如 Poi、流星、短棍、火扇、安全知識、器材保養。
- `slug`：網址或系統用識別字。
- `sort_order`：排序。
- `status`：`draft` 或 `published`。

### learning_contents

教學影片、播放清單、文章連結與未來站內文章共用同一張表。

建議欄位：

- `id`：唯一 ID。
- `category_id`：分類 ID。
- `content_type`：`video`、`playlist`、`article_link`、`internal_article`。
- `title`：內容標題。
- `summary`：精簡摘要。
- `external_url`：外部文章、影片或播放清單連結。
- `youtube_playlist_id`：YouTube playlist ID，只有播放清單需要。
- `thumbnail_url`：縮圖網址，第一版可選。
- `body`：站內文章內容，第一版可先不使用。
- `status`：`draft` 或 `published`。
- `published_at`：發布日期。
- `created_at`：建立時間。
- `updated_at`：更新時間。

第一版教學影片可延續目前 YouTube playlist embed 的方式，只把 playlist 資料改成由後台管理。

## 權限規劃

### 匿名使用者

- 可讀取 `status = published` 的活動、社團、分類與教學內容。
- 不可新增、更新或刪除任何資料。
- 不可讀取草稿或下架內容。

### 管理員

- 使用 Supabase Auth 的 email/password 登入。
- 管理員帳號由 Supabase Dashboard 建立，不開放網站前台註冊。
- 登入後可新增、更新、下架資料。
- 第一版不做多角色權限，避免過度複雜。

### Row Level Security 原則

每張公開資料表都應啟用 RLS。

基本規則：

- `select`：匿名與登入使用者只能讀取 `status = published`。
- `insert/update/delete`：只允許管理員。

若第一版只有一位或少數管理員，可先建立 `admin_users` 表，將允許管理的 Supabase user id 放入其中。RLS policy 透過這張表判斷是否為管理員。

## 後台功能規劃

### /admin/login

- Email + password 登入。
- 登入成功後導向後台首頁。
- 已登入時不需要重複登入。

### /admin/events

- 活動列表。
- 新增活動。
- 編輯活動。
- 發布或下架活動。
- 欄位先保持精簡，避免第一版表單過重。

### /admin/clubs

- 社團列表。
- 新增社團。
- 編輯社團。
- 發布或下架社團。

### /admin/learning

- 教學與文章列表。
- 依分類或內容類型篩選。
- 新增播放清單、影片、文章連結。
- 編輯內容。
- 發布或下架內容。

## 前端調整方向

### 資料服務層

應建立集中資料讀取層，避免各 React 元件直接散落 Supabase query。

建議方向：

- `getPublishedEvents()`
- `getPublishedClubs()`
- `getPublishedLearningContents()`
- `getPublishedCategories()`

元件只使用這些函式回傳的資料，不直接知道資料庫查詢細節。

### 地圖

- 活動數量從 `events` 計算。
- 縣市 popup 從 `events` 篩選該縣市活動。
- 無資料縣市保留目前 fallback 內容。

### 日曆

- 不再維護獨立 `calendarEvents.ts`。
- 從 `events.date` 自動產生日曆。
- 若未來需要日曆專用顏色，可在 `events` 增加 `calendar_tone` 欄位，或由活動類型決定顏色。

### 教學與文章

- 參考概念是「教學與文章內容資料庫」，不複製特定網站結構。
- 第一版可做分類篩選、搜尋、卡片列表、外部連結與 YouTube playlist embed。
- 先支援外部文章連結與播放清單，站內長文可等內容量明確後再做。

## 成本與營運考量

### Supabase

Supabase Free 適合 MVP 與低流量初期使用。

需要注意：

- Free plan 有資料庫、Storage、流量與 MAU 額度限制。
- Free project 可能因閒置而暫停。
- 正式營運後可考慮升級 Pro。
- Pro 會產生固定月費，但可取得更高資源與更完整的營運保障。

可能產生成本的地方：

- Supabase Pro 月費。
- Database 超額。
- Storage 圖片或檔案容量。
- Egress 流量。
- 備份與保留時間。
- 未來 Edge Functions 執行量。

### GitHub Pages

目前公開前端可繼續使用 GitHub Pages，維持低成本靜態部署。

只要前端是 Vite build 出來的靜態檔案，就可以繼續使用 GitHub Pages。

### 未來可能改用 Vercel 的情境

如果未來需要以下功能，可再評估 Vercel 或其他前端平台：

- SSR。
- Server routes。
- Preview deployments。
- 更完整的環境變數與部署環境管理。
- 與後端或 Edge Runtime 更緊密整合。

第一版不需要為這些需求提前切換。

## 實作階段建議

### Phase 1：資料庫與權限

- 建立 Supabase project。
- 建立資料表：`events`、`clubs`、`content_categories`、`learning_contents`、`admin_users`。
- 啟用 RLS。
- 建立匿名讀取 published 資料的 policy。
- 建立管理員寫入資料的 policy。
- 建立第一個管理員帳號。

成功標準：

- 匿名使用者只能讀取 published 資料。
- 匿名使用者無法新增、更新、刪除資料。
- 管理員可管理資料。

### Phase 2：前端公開頁接 Supabase

- 安裝 Supabase client。
- 建立環境變數：`VITE_SUPABASE_URL`、`VITE_SUPABASE_ANON_KEY`。
- 建立資料服務層。
- 讓地圖、縣市 popup、日曆改讀 Supabase 的活動資料。
- 讓教學頁改讀 Supabase 的 learning contents。
- 保留本地靜態資料作為開發或讀取失敗時的 fallback，可視需求決定。

成功標準：

- 未登入可瀏覽公開資料。
- 新增一筆 published 活動後，地圖與日曆都會出現。
- 下架活動後，公開頁不再顯示。

### Phase 3：管理員後台

- 建立 `/admin/login`。
- 建立後台 layout。
- 建立活動管理。
- 建立社團管理。
- 建立教學與文章管理。
- 加入登出功能。

成功標準：

- 未登入不能進入後台管理頁。
- 管理員可新增、編輯、發布、下架資料。
- 後台更新後公開頁會反映最新資料。

### Phase 4：內容體驗補強

- 教學與文章加入分類篩選。
- 加入搜尋。
- 加入資料更新時間或來源標示。
- 視需求加入圖片 URL 或 Supabase Storage。

成功標準：

- 使用者能依分類快速找到教學與文章。
- 管理員能在不改程式碼的情況下維護主要內容。

## 測試重點

### 公開頁

- 未登入即可看到 published 活動、社團、教學與文章。
- draft 或下架內容不出現在公開頁。
- Supabase 讀取失敗時，畫面顯示明確狀態，不靜默空白。
- 無活動縣市仍有穩定 fallback。

### 後台

- 未登入不能進入 `/admin` 管理頁。
- 管理員登入後可進入後台。
- 管理員可新增、編輯、發布、下架活動。
- 新增活動後，地圖、縣市 popup、日曆同步更新。
- 新增教學內容後，教學列表依分類顯示。

### 安全

- 匿名使用者無法 insert/update/delete。
- 使用公開 anon key 也不能繞過 RLS。
- `service_role` key 不存在於前端程式碼、GitHub repo 或公開部署環境。

## 暫不做的功能

- 一般使用者會員系統。
- 公開投稿。
- 留言或討論區。
- 付款或報名金流。
- 多角色審核流程。
- 自建後端 API。
- 自動爬取 Instagram 或 YouTube 資料。
- 站內長文編輯器。

這些功能都可以等資料量、管理流程與實際需求更明確後再加入。

