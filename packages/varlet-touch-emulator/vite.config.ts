import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    deps: { resolveDepSubpath: true },
    entry: 'index.js',
    format: ['iife'],
    outDir: '.',
    globalName: 'VarletTouchEmulator',
    clean: false,
    hash: false,
  },
})
