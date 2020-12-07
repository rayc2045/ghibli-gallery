[![Photo](https://cdn.dribbble.com/users/3800131/screenshots/14489502/media/e740658dea07f7e82afa9e88d4dd880a.png)](https://dribbble.com/raychangdesign)

# Ghibli Gallery - スタジオジブリ作品の場面写真

> 2020 下半年在全世界仍受到冠狀病毒肆虐期間，吉卜力工作室在官網三次公開合計 19 部動畫作品、共 950 張高畫質劇照，表示在未觸法的情形之下可自由下載使用，並且還會持續釋出過去動畫作品的劇照。由於[官網](https://www.ghibli.jp/info/013381/)的劇照呈現方式不太友好，也未在移動裝置上做排版優化，加上分批公開的作品劇照未整合在一起，對於歷史悠久且廣受好評的工作室而言實在可惜，因此這次透過對吉卜力工作室網站的網址命名邏輯和動畫出版年份做資料處理，設計開發出整合目前所有吉卜力工作室公開的作品劇照、且排版更為清晰和易於使用的「吉卜力相簿」。

- 使用預處理器 Sass 撰寫 CSS；使用 Vue 3.0 開發網站架構，感受最新潮的 [Composition API](https://composition-api.vuejs.org/#logic-reuse-code-organization)
- 依照動畫出版年份和作品劇照的網址命名邏輯，整合出新的作品資料
- 透過點擊作品目錄切換動畫劇照，達成不換頁觀看
- 初次載入時加入 Loading 畫面，除了利用龍貓 Logo 加深使用者對吉卜力工作室的品牌印象，同時遮蔽掉 Vue 掛載元素前、一瞬間出現的模板語法
- 將原本吉卜力工作室官網散佈式的劇照呈現方式改為兩欄並排（平板與手機以ㄧ欄呈現），排版更為清晰友好
- 使用 [Noto Serif JP](https://fonts.google.com/specimen/Noto+Serif+JP) 字體，統一日、英、數字基線
- 參觀 [吉卜力相簿](https://rayc2045.github.io/ghibli-gallery/)