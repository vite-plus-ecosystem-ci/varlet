import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: [
    { deps: { resolveDepSubpath: true }, format: ['esm'], outDir: 'lib', fixedExtension: false, hash: false },
    {
      format: ['cjs'],
      outDir: 'lib',
      fixedExtension: false,
      hash: false,
      deps: { resolveDepSubpath: true, alwaysBundle: ['rattail'] },
    },
  ],
})
