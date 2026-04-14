import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署配置
// 如果仓库名为 xSimWeb，则 base 设置为 '/xSimWeb/'
// 本地开发时自动使用 '/'
export default defineConfig({
  plugins: [react()],
  // 部署到 GitHub Pages 时，请将此值改为你的仓库名
  // 例如: base: '/xSimWeb/'
  base: '/xSimWeb/',
  build: {
    outDir: 'dist',
    // 确保静态资源路径正确
    assetsDir: 'assets',
  },
})
