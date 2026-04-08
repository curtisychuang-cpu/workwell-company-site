# 好好上班公司網站

這是一個部署在 GitHub Pages 的靜態網站。

## 網站檔案

- `index.html`：首頁
- `styles.css`：樣式
- `script.js`：前端互動
- `thank-you.html`：表單送出成功頁

## 修改網站

直接修改這些檔案內容即可：

- `index.html`
- `styles.css`
- `script.js`
- `thank-you.html`

## 重新部署

在這個資料夾開 PowerShell，依序執行：

```powershell
git add .
git commit -m "更新網站內容"
git push
```

## 查看部署狀態

- GitHub Actions：
  `https://github.com/curtisychuang-cpu/workwell-company-site/actions`

- 網站網址：
  `https://curtisychuang-cpu.github.io/workwell-company-site/`

## 聯絡表單

網站表單目前使用 FormSubmit。

- 收件信箱：`ggggyyyy@hotmail.com`
- 第一次使用時，需到信箱收 FormSubmit 驗證信並完成確認

## 注意事項

- 每次 `git push` 之後，通常要等 1 到 3 分鐘網站才會更新
- 如果網站沒更新，先去 GitHub Actions 確認部署是否成功
