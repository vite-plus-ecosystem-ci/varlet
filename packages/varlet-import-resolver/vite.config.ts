import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    deps: { resolveDepSubpath: true },
    format: ['esm', 'cjs'],
    outDir: 'lib',
    fixedExtension: false,
    hash: false,
  },
})
