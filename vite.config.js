import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  // Use environment variable for base path, fallback to root for local development
  base: process.env.NODE_ENV === 'production' ? (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/') : '/',
  plugins: [viteSingleFile()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    emptyOutDir: true
  },
  css: {
    postcss: './postcss.config.js'
  }
})