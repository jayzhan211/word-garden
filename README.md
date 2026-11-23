# word-garden
## 發佈新版

每次改動推上去前，把 `version.txt` 和 `index.html` 裡的 `APP_VER`（以及 `cloze-data.js?v=`）改成同一個新的數字（例如 `date +%Y%m%d%H%M`）。主畫面 App 回到前景時會比對 `version.txt`，不同就自動重新載入。
