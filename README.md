# 台灣火舞活動互動地圖

這是一個以 Vite + React 建立的台灣火舞活動地圖。第一版提供可互動的台灣縣市 SVG 地圖，滑鼠移動到縣市時會有高亮與立體位移回饋，點擊縣市後會顯示火舞活動小彈窗。

## 功能

- 台灣 22 縣市互動地圖
- 使用 `public/flow-donkey-logo-circle.png` 作為網站品牌 Logo 與 favicon
- 低成本立體視覺：SVG 陰影、底層偏移與 hover 位移
- 點擊縣市顯示活動數量、近期活動、日期、地點與連結
- 地圖 / 成發日曆分頁切換
- 參考 Fire & Flow Donkey 日曆視覺的 2026 年 5、6 月活動月曆
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
    TaiwanMap.tsx
  data/
    calendarEvents.ts
    events.ts
    taiwan-counties.topo.json
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
