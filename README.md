# Ghibli Gallery｜重新設計吉卜力工作室作品相簿

![Photo](https://cdn.dribbble.com/users/3800131/screenshots/15181266/media/911d9783455dc45f4014b30eb15725e3.png)

[> Ghibli Gallery](https://ghibli-gallery.netlify.app/)

### 簡介
2020 下半年在全世界仍受到冠狀病毒肆虐期間，吉卜力工作室在官網四次公開合計 24 部動畫作品、共 1,178 張高畫質劇照，表示在未觸法的情形之下可自由下載使用，並且還會持續釋出過去動畫作品的劇照。由於 [官網](https://www.ghibli.jp/info/013409/) 的劇照呈現方式不太友好，也未在移動裝置上做排版優化，加上分批公開的作品劇照未整合在一起，對於歷史悠久且廣受好評的工作室而言實在可惜，因此這次透過對吉卜力工作室網站的網址命名邏輯和動畫出版年份做資料處理，設計開發出整合目前所有吉卜力工作室公開的作品劇照、且排版更為清晰和易於使用的新吉卜力相簿。

### 外觀與互動設計
- 依照動畫出版年份和作品劇照的網址命名邏輯，整合出新的作品劇照資料
- 網頁載入時加入 Loading 畫面，加深使用者對吉卜力工作室的品牌印象，並預設瀏覽位置回到最上方
- 使用 [Noto Serif JP](https://fonts.google.com/specimen/Noto+Serif+JP) 字體，統一日文、英文和數字基線
- 將網站設計為可在網址後加入 Query String 參數 `en`，輕鬆切換 [英文](https://ghibli-gallery.netlify.app/?en)、[日文](https://ghibli-gallery.netlify.app/) 介面
- 透過點擊作品目錄切換動畫劇照，達成不換頁觀看
- 將原本吉卜力工作室官網散佈式的劇照改為兩欄並排 (平板與手機則ㄧ欄) 並配合深色主題呈現，視覺上更為精緻且能長久觀看

### 開發紀錄
- 自製 [吉卜力動畫作品劇照資料](https://github.com/rayc2045/ghibli-gallery/blob/main/data/works.js)
- 使用相似於 [Preact](https://preactjs.com/) 的 micro-library [petite-vue](https://github.com/vuejs/petite-vue)，開發無需 build
- 將通用型程式碼與專案用程式碼進行拆分，需要時再模組化引入做使用 (module import)
- RWD 響應式設計上使用 `rem` 單位配合 Media Query 呈現，達成任意縮放螢幕、元素單位比例也能自適應