# 台灣火舞地圖與資料庫

這是一個以 Vite + React + TypeScript 建立的台灣火舞資訊網站。公開頁面提供互動縣市地圖、成發日曆、教學影片、火舞社團與文章連結，各分類有獨立網址；管理員可從 `/admin` 登入後台，透過 Supabase 管理活動與社團資料。

## 目前功能

- 台灣 22 縣市互動地圖，支援滑鼠、鍵盤聚焦與點擊選取。
- 公開內容使用獨立路由：`/`、`/calendar`、`/tutorials`、`/clubs`、`/articles`。
- 依縣市顯示已發布活動數量、近期活動、日期、地點與外部連結。
- 成發日曆由已發布活動日期自動產生月份，不再手動維護固定月份陣列。
- 教學影片分頁以 YouTube playlist embed 呈現 Poi、流星、短棍等播放清單。
- 火舞社團分頁從 Supabase 讀取已發布社團，依區域與縣市排序，並提供社團分布地圖。
- 文章連結與網路活動分享仍由本地 TypeScript 資料檔手動維護。
- `/admin` 後台支援 Supabase Email/Password 登入，可新增、編輯、封存社團與活動。
- 使用 `public/flow-donkey-logo-circle.png` 作為網站品牌 Logo 與 favicon。
- GitHub Pages 部署，Vite base path 設為 `/TaiwanFireDanceMap/`。

## 技術架構

```text
瀏覽器
  -> GitHub Pages 靜態前端
  -> React Router-less route 判斷
      /：互動地圖與網路活動分享
      /calendar：成發日曆
      /tutorials：教學影片
      /clubs：火舞社團
      /articles：文章連結
      /admin 或 #/admin：AdminApp 管理後台
  -> Supabase JS client
      events：公開頁讀 published，後台讀全部並可寫入
      clubs：公開頁讀 published，後台讀全部並可寫入

本地靜態資料
  -> tutorialPlaylists.ts：教學播放清單
  -> articles.ts：文章卡片
  -> onlineActivities.ts：網路活動卡片
  -> taiwan-counties.topo.json：台灣縣市地圖邊界
```

主要設計取捨：

- 活動與社團已接 Supabase，讓後台修改後可直接反映到公開頁。
- 教學影片、文章與網路活動目前仍是靜態資料，避免在內容量還小時過度擴張後台。
- 日曆不再維護獨立活動清單，而是使用同一份 published events，避免地圖與日曆資料不一致。
- 沒有使用前端路由套件；入口在 `src/main.tsx` 用 pathname/hash 判斷是否載入後台。

## 開發環境

需要 Node.js 20 以上。GitHub Actions 部署使用 Node.js 22。

```bash
npm install
npm run dev
```

啟動後開啟終端機顯示的本機網址，預設通常是：

```text
http://localhost:5173
```

後台本機入口：

```text
http://localhost:5173/admin
```

## 環境變數

活動、社團與後台都需要 Supabase 設定。未設定時，相關區塊會顯示錯誤狀態。

本機可建立 `.env.local`：

```text
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-or-anon-key
```

相容舊命名：

```text
VITE_SUPABASE_ANON_KEY=your-anon-key
```

注意：

- 前端只能放 publishable/anon key，不可放 Supabase `service_role` key。
- `VITE_SUPABASE_URL` 可接受 Supabase project URL；程式會移除誤帶的 `/rest/v1` path。
- GitHub Pages 部署需在 repository secrets 設定 `VITE_SUPABASE_URL` 與 `VITE_SUPABASE_PUBLISHABLE_KEY`。

## 常用指令

```bash
npm run dev
npm run build
npm run preview
```

- `npm run dev`：啟動本機開發伺服器。
- `npm run build`：執行 TypeScript build 與 Vite production build。
- `npm run preview`：預覽 production build 結果。

## GitHub Pages 部署

公開網址：

```text
https://flowdonkey0622.github.io/TaiwanFireDanceMap/
```

部署設定：

- `vite.config.ts` 設定 `base: "/TaiwanFireDanceMap/"`。
- `.github/workflows/deploy.yml` 在推送到 `main` 或手動觸發時執行。
- workflow 使用 `npm ci`、`npm run build`，再把 `dist` 發布到 GitHub Pages。
- GitHub repository 的 Pages source 需選擇 `GitHub Actions`。

## 專案結構

```text
src/
  App.tsx                     公開網站主入口、導覽與公開路由切換
  main.tsx                    根據 /admin 或 #/admin 切換 App/AdminApp
  assets.ts                   依 Vite base path 產生 public asset URL
  types.ts                    活動、社團、地圖 feature 型別
  hooks/
    usePublishedEvents.ts     公開活動資料載入 hook
  pages/
    MapPage.tsx               互動地圖與網路活動分享頁
    CalendarPage.tsx          成發日曆頁
    TutorialsPage.tsx         教學影片頁
    ClubsPage.tsx             火舞社團頁
    ArticlesPage.tsx          文章連結頁
  lib/
    supabase.ts               Supabase client 與環境變數檢查
  services/
    events.ts                 活動資料讀寫、DB row 轉換與欄位驗證
    clubs.ts                  社團資料讀寫、DB row 轉換與欄位驗證
  components/
    AdminApp.tsx              Supabase 登入與社團/活動管理後台
    TaiwanMap.tsx             台灣縣市互動 SVG 地圖
    CountyPopup.tsx           縣市活動列表
    CalendarView.tsx          已發布活動月曆
    ClubDirectory.tsx         社團列表與社團分布地圖
    ClubLocationMap.tsx       社團縣市分布互動地圖
    TutorialVideos.tsx        YouTube 播放清單卡片
    OnlineActivities.tsx      網路活動卡片
    ArticleLinks.tsx          文章連結卡片
  data/
    taiwanRegions.ts          區域與縣市排序
    taiwan-counties.topo.json 台灣縣市邊界資料
    tutorialPlaylists.ts      教學播放清單靜態資料
    articles.ts               文章連結靜態資料
    onlineActivities.ts       網路活動靜態資料
    events.ts                 活動類型標籤、日期格式工具與舊靜態活動資料
    calendarEvents.ts         日曆色調型別與舊靜態日曆資料
  styles/
    global.css                全站樣式

database/
  seed_static_content.sql     建立/seed events、learning_contents、online_activities
  add_events_club_id.sql      events.club_id 外鍵補丁
```

## Supabase 資料表

目前前端實際讀寫的表：

### `events`

公開頁只讀取 `status = published`。後台可讀取全部狀態並新增、更新、封存。

主要欄位：

- `id`
- `slug`
- `title`
- `event_date`
- `county`
- `venue`
- `type`：`workshop`、`jam`、`performance`、`festival`
- `summary`
- `link`
- `status`：`draft`、`published`、`archived`
- `club_id`
- `calendar_title`
- `calendar_tone`：目前 UI 支援 `blue`、`red`、`orange`、`purple`

### `clubs`

公開頁只讀取 `status = published`。後台可讀取全部狀態並新增、更新、封存。

主要欄位：

- `id`
- `school_name`
- `club_name`
- `county`
- `summary`
- `instagram_url`
- `youtube_url`
- `status`：`draft`、`published`、`archived`

### 目前尚未接到前端 service 的表

`database/seed_static_content.sql` 也包含 `learning_contents` 與 `online_activities` 的 seed，但目前公開頁的教學、文章與網路活動仍讀取 `src/data/*.ts` 靜態資料。

## 資料維護

### 活動與成發日曆

主要維護方式是登入 `/admin` 的活動後台。

活動資料同時供應：

- 互動地圖活動數量。
- 縣市 popup 活動列表。
- 成發日曆月份與每日活動。

欄位注意事項：

- `county` 必須使用畫面上的縣市名稱，例如 `臺北市`、`新北市`、`高雄市`。
- `link` 只允許 `http` 或 `https` URL。
- `status` 設為 `published` 才會出現在公開頁。
- `calendar_tone` 留空時日曆預設為 `blue`。

### 火舞社團

主要維護方式是登入 `/admin` 的社團後台。

欄位注意事項：

- `county` 必須使用 `src/data/taiwanRegions.ts` 中列出的縣市名稱。
- Instagram 與 YouTube URL 可留空；若填寫，只允許 `http` 或 `https` URL。
- `status` 設為 `published` 才會出現在公開社團頁。

### 教學影片

靜態資料位於：

```text
src/data/tutorialPlaylists.ts
```

網站使用 YouTube playlist embed，因此通常只需維護播放清單 ID。YouTube 播放清單本身新增、刪除或排序影片後，網站播放器會跟著更新。

### 文章連結

靜態資料位於：

```text
src/data/articles.ts
```

文章預覽採手動維護，不會在前端即時抓 Medium、GitBook 或其他外部網站內容。

### 網路活動

靜態資料位於：

```text
src/data/onlineActivities.ts
```

此區塊適合放不限定縣市的 Instagram 挑戰、影片招募、線上共創或表單活動。資料採手動維護，不嵌入 Instagram 貼文或即時抓取表單狀態。

## 地圖資料

縣市邊界資料位於：

```text
src/data/taiwan-counties.topo.json
```

資料來源為 [g0v/twgeojson](https://github.com/g0v/twgeojson) 的 `twCounty2010merge.topo.json`。該專案 README 標示為 CC0 1.0 Universal。本專案將資料內建於 repo，前端執行時不需要再從外部 CDN 載入地圖。

`TaiwanMap.tsx` 會把部分舊縣市名稱轉為目前 UI 使用名稱，例如 `台北市` 顯示為 `臺北市`，`桃園縣` 顯示為 `桃園市`。

## 已知維護注意事項

- `src/data/events.ts` 與 `src/data/calendarEvents.ts` 仍保留舊靜態資料，但公開頁活動與日曆目前以 Supabase `events` 為準。
- `database/seed_static_content.sql` 尚未建立 `clubs` 表；若新建 Supabase 專案，需要另外建立 `clubs` schema，或補齊 migration。
- `SUPABASE_BACKEND_PLAN.md` 是早期規劃文件，部分內容已被目前實作取代，實際狀態以程式碼與本 README 為準。
