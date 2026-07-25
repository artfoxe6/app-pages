# App Pages

面向多个 App 的通用 GitHub Pages 内容仓库，可用于发布产品使用说明、隐私政策、用户协议、常见问题、更新说明和支持信息。

站点地址：<https://artfoxe6.github.io/app-pages/>

## 添加一个应用

1. 在 `apps/` 下新建应用目录，目录名建议使用稳定的英文短标识，例如 `focus-timer`。
2. 复制 `_templates/` 中合适的模板到应用目录：

   ```text
   apps/focus-timer/privacy-policy.html
   apps/focus-timer/terms-of-service.html
   apps/focus-timer/user-guide.html
   ```

3. 替换模板内所有 `{{...}}` 占位符，并根据应用的真实功能、数据处理方式和适用地区审阅条款。
4. 在首页 `index.html` 的 `document-list` 区域添加该应用的链接。
5. 提交并推送到 `main` 分支。GitHub Pages 通常会在几分钟内更新。

## 推荐链接格式

```text
https://artfoxe6.github.io/app-pages/apps/<app-id>/user-guide.html
https://artfoxe6.github.io/app-pages/apps/<app-id>/privacy-policy.html
https://artfoxe6.github.io/app-pages/apps/<app-id>/terms-of-service.html
```

## 注意

模板只是内容骨架。产品说明应与当前版本保持一致；法律类内容不构成法律意见，正式发布前应确保文字准确描述应用的实际行为，并在必要时交由专业人士审阅。
