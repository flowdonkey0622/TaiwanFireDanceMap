# 台灣火舞活動互動地圖

這是一個以 Vite + React 建立的台灣火舞活動地圖。第一版提供可互動的台灣縣市 SVG 地圖，滑鼠移動到縣市時會有高亮與立體位移回饋，點擊縣市後會顯示火舞活動小彈窗。

## 功能

- 台灣 22 縣市互動地圖
- 使用 `public/flow-donkey-logo-circle.png` 作為網站品牌 Logo 與 favicon
- 低成本立體視覺：SVG 陰影、底層偏移與 hover 位移
- 點擊縣市顯示活動數量、近期活動、日期、地點與連結
- 地圖 / 成發日曆 / 教學影片 / 文章連結分頁切換
- 參考 Fire & Flow Donkey 日曆視覺的 2026 年 5、6 月活動月曆
- 依 Poi、流星、短棍分類嵌入 YouTube 教學播放清單
- 收錄文章連結與預覽卡片
- 在互動地圖頁收錄不限定縣市的網路活動分享
- 無活動資料的縣市提供穩定 fallback 內容
- 支援鍵盤操作：縣市 path 可用 `Tab` 聚焦，按 `Enter` 或空白鍵選取
- 響應式版面，桌面與手機寬度皆可操作

## 開發環境

需要 Node.js 20 以上。專案目前使用 Node.js 24 驗證。

```bash
npm install
npm run dev
```

啟動後開啟終端機顯示的本機網址，預設通常是：

```bash
http://localhost:5173
```

## 常用指令

```bash
npm run dev
npm run build
npm run preview
```

- `npm run dev`：啟動本機開發伺服器
- `npm run build`：執行 TypeScript 檢查並建立正式版檔案
- `npm run preview`：預覽正式版 build 結果

## GitHub Pages 部署

此專案部署在：

```text
https://flowdonkey0622.github.io/TaiwanFireDanceMap/
```

Vite 已在 `vite.config.ts` 設定 `base: "/TaiwanFireDanceMap/"`，讓正式版資源路徑符合 GitHub Pages 的 repo 子路徑。部署流程由 `.github/workflows/deploy.yml` 自動執行，推送到 `main` 後會安裝依賴、執行 `npm run build`，並將 `dist` 發布到 GitHub Pages。

GitHub repository 的 Pages 設定需選擇：

- Source: `GitHub Actions`

## 活動資料維護

範例活動資料位於：

```text
src/data/events.ts
```

新增活動時，請維持 `FireDanceEvent` 欄位：

- `id`：唯一活動 ID
- `county`：縣市名稱，需與地圖資料一致，例如 `臺北市`、`新北市`、`高雄市`
- `title`：活動名稱
- `date`：日期，格式為 `YYYY-MM-DD`
- `venue`：活動地點
- `type`：活動類型，可用 `workshop`、`jam`、`performance`、`festival`
- `summary`：簡短介紹
- `link`：活動連結

地圖資料來源使用 2010 年縣市資料，部分名稱會在元件中轉為目前 UI 使用名稱，例如 `台北市` 顯示為 `臺北市`，`桃園縣` 顯示為 `桃園市`。活動資料請使用畫面顯示的縣市名稱。

## 成發日曆資料維護

成發日曆資料位於：

```text
src/data/calendarEvents.ts
```

每筆日曆資料包含：

- `id`：唯一日曆活動 ID
- `title`：顯示在月曆膠囊上的活動名稱
- `date`：日期，格式為 `YYYY-MM-DD`
- `tone`：膠囊色系，可用 `blue`、`red`、`orange`、`purple`

目前日曆畫面先整理 2026 年 5 月與 6 月的成發活動。若要新增月份，可在 `CalendarView.tsx` 的 `months` 陣列加入新的年月。

## 教學影片資料維護

教學影片播放清單資料位於：

```text
src/data/tutorialPlaylists.ts
```

目前網站使用 YouTube playlist embed，因此不需要逐支新增影片。只要 YouTube 播放清單本身有新增、刪除或排序影片，網站中的嵌入播放器會跟著更新。

每筆播放清單資料包含：

- `id`：唯一分類 ID，例如 `poi`
- `title`：頁面上顯示的分類名稱
- `description`：分類簡介
- `playlistId`：YouTube playlist ID
- `accent`：卡片左側色條，可用 `ember`、`sky`、`sun`

從 YouTube 播放清單網址取得 `playlistId` 的方式：

```text
https://youtube.com/playlist?list=PLtwryFmhqGCN4RSPoFJSB-lTwYDHzrXz3
                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                  這段就是 playlistId
```

新增分類範例：

```ts
{
  id: "fan",
  title: "火扇教學",
  description: "火扇基礎手位、開合與流動練習播放清單。",
  playlistId: "你的 YouTube playlist ID",
  accent: "ember",
}
```

## 文章連結資料維護

文章連結資料位於：

```text
src/data/articles.ts
```

文章預覽採手動維護，不會在前端即時抓 Medium 或其他外部網站內容。這樣可以避免外部平台限制抓取、標題摘要變動或載入失敗造成頁面不穩。

每筆文章資料包含：

- `id`：唯一文章 ID，例如 `contact-staff-semiotics-a0`
- `title`：文章標題
- `description`：文章預覽摘要
- `url`：文章連結
- `source`：來源平台，例如 `Medium`
- `publishedLabel`：顯示在卡片上的補充資訊，例如 `文章連結` 或日期
- `tags`：文章標籤陣列
- `accent`：卡片左側色條，可用 `ember`、`sky`、`sun`

新增文章範例：

```ts
{
  id: "new-flow-article",
  title: "新的 Flow Arts 文章",
  description: "這裡放文章摘要，建議一到兩句即可。",
  url: "https://example.com/article",
  source: "Medium",
  publishedLabel: "2026.05",
  tags: ["Flow Arts", "火舞"],
  accent: "sky",
}
```

## 網路活動資料維護

網路活動資料位於：

```text
src/data/onlineActivities.ts
```

此區塊適合放不限定縣市的 Instagram 挑戰、影片招募、線上共創或表單活動。資料採手動維護，不會嵌入 Instagram 貼文或即時抓取表單狀態，避免外部平台限制造成畫面不穩。

每筆網路活動資料包含：

- `id`：唯一活動 ID，例如 `taiwan-poi-challenge`
- `title`：活動名稱
- `description`：活動摘要
- `period`：活動期間，可省略
- `primaryLink`：主要連結，包含 `label` 與 `url`
- `secondaryLink`：第二連結，可省略，適合放報名表單
- `accent`：卡片左側色條，可用 `ember`、`sky`、`sun`

新增網路活動範例：

```ts
{
  id: "new-online-challenge",
  title: "新的線上挑戰",
  description: "這裡放活動摘要，建議一到兩句即可。",
  period: "活動期間：6/1 ～ 6/30",
  primaryLink: {
    label: "查看活動貼文",
    url: "https://www.instagram.com/your-post",
  },
  secondaryLink: {
    label: "填寫表單",
    url: "https://forms.gle/your-form",
  },
  accent: "ember",
}
```

## 地圖資料

縣市邊界資料放在：

```text
src/data/taiwan-counties.topo.json
```

資料來源為 [g0v/twgeojson](https://github.com/g0v/twgeojson) 的 `twCounty2010merge.topo.json`。該專案 README 標示為 CC0 1.0 Universal，適合用於資料視覺化與原型開發。本專案將資料內建於 repo，讓前端執行時不需要再從外部 CDN 載入地圖。

## 專案結構

```text
src/
  components/
    CalendarView.tsx
    CountyPopup.tsx
    OnlineActivities.tsx
    TaiwanMap.tsx
    TutorialVideos.tsx
    ArticleLinks.tsx
  data/
    articles.ts
    calendarEvents.ts
    events.ts
    onlineActivities.ts
    taiwan-counties.topo.json
    tutorialPlaylists.ts
  styles/
    global.css
  App.tsx
  main.tsx
  types.ts
```

## 後續擴充建議

- 將 `src/data/events.ts` 改為讀取 CMS、Google Sheets 或後端 API
- 增加活動類型篩選、日期範圍篩選與搜尋
- 在縣市彈窗中加入報名狀態、主辦單位與安全注意事項
- 加入資料更新時間與活動來源標示
- 若活動數量增加，可加入縣市熱度顏色或活動 marker 圖層
