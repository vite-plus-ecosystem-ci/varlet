import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: { deps: { resolveDepSubpath: true }, outDir: 'lib', dts: true, fixedExtension: false, hash: false },
})
