# 紀錄上傳 github page 相關的事項

1. 安裝 npm install gh-pages --save-dev
2. 設置 vite.config.js

   ```javascript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     base: "/{{ repository name }}/", //新增這行
   });
   ```

3. 更新 package.json

   ```json
   {
     //... other scripts
     "homepage": "https://{{your github io domain}}/{{ repository name }}/", //新增這行
     //... other scripts
     "scripts": {
       "deploy": "gh-pages -d dist" //新增這行
     }
   }
   ```

4. 執行 npm run deploy

   ```bash
   npm run build //先執行build 建立 dist
   npm run deploy //將dist資料夾推送到gh-pages分支
   ```

5. github repository 設定對應分支

   1. 到 repository 的頁面點擊 Settings
   2. 在點擊 Code and automation 下的 Pages
   3. Build and deployment 下的 branch 切換為 gh-pages

6. 上傳狀況查看的兩個方式

   - 到 repository > Code > 上傳的分支, 會出現黃色圓點或者是綠色勾勾代表上傳進行中或者上傳完畢
   - 到 repository > Actions 查看當前的上傳狀況
