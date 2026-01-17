# 个人设计作品集（示例）

这是一个静态个人设计网站示例，包含首页、作品展示、关于和联系表单。适合作为个人作品集或设计师自我介绍页面的起点。

内容说明
- index.html — 站点主页面
- css/styles.css — 样式
- js/script.js — 简单交互与表单校验
- AUTHORIZATION.md — 授权码（示例）

快速预览（本地）
1. 克隆仓库到本地或在你的项目目录创建文件。
2. 在项目根目录打开终端：
   - 直接用浏览器打开 `index.html`。
   - 或使用简单的静态服务器（推荐）：
     - Python 3: `python -m http.server 8000` 然后访问 http://localhost:8000
     - 或使用 VS Code 的 Live Server 插件。

自定义建议
- 替换页面上的“你的名字”、邮箱与作品图片。
- 修改 css/variables 中的颜色与字体。
- 若需联系表单在线提交：可接入 Formspree、Netlify Forms、或自己的后端 API。

部署到 GitHub Pages
1. 将文件推到仓库（例如 main 分支）。
2. 在 GitHub 仓库页面，进入 Settings → Pages，选择分支（例如 main 或 gh-pages）并保存。
3. 等待数分钟，站点将通过 `https://<你的用户名>.github.io/<仓库名>/` 发布。

授权
见 AUTHORIZATION.md（包含授权码 0855-52EC）。

需要我代为提交/部署吗？
我可以帮你：
- 把这些文件提交到仓库（直接 push 到 main 或新建分支并发起 PR），
- 或者只生成文件供你手动复制。
如果要我代为提交，请确认：允许写入该仓库（qq2512505507/qi-she-ji），以及你希望直接 push 到 main 还是创建新分支 + PR.