# 部署到 GitHub Pages

## 快速部署步骤

### 1. 创建 GitHub 仓库

```bash
cd /Users/m2reyu/.openclaw/workspace/liquid-glass-blog
git init
git add .
git commit -m "Initial commit: Liquid glass blog"
```

### 2. 推送到 GitHub

```bash
# 替换为你的 GitHub 用户名和仓库名
git remote add origin https://github.com/你的用户名/liquid-glass-blog.git
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库的 Settings
2. 找到 Pages 选项
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main" 和 "/ (root)"
5. 点击 Save

几分钟后，你的网站就会在 `https://你的用户名.github.io/liquid-glass-blog/` 上线！

## 注意事项

### 视频资源

当前使用的是外部 CDN 视频链接，可以直接使用。如果想用自己的视频：

1. 将视频文件放在 `videos/` 目录
2. 修改组件中的视频路径
3. 注意：GitHub Pages 有文件大小限制（单个文件 100MB）

### 自定义域名（可选）

1. 在仓库根目录创建 `CNAME` 文件
2. 写入你的域名，如：`blog.yourdomain.com`
3. 在域名提供商处添加 CNAME 记录指向 `你的用户名.github.io`

## 本地预览

```bash
# 当前已启动在 http://localhost:8080
open http://localhost:8080
```

## 更新网站

修改文件后：

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Pages 会自动重新部署。
