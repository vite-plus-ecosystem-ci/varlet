import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: [
    {
      deps: {
        // tsdown <0.23 compatibility: resolve external dependency subpaths.
        // Remove to preserve subpath imports as written (the new default).
        // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
        resolveDepSubpath: true,
      },
      format: ['esm'],
      outDir: 'lib',
      fixedExtension: false,
      hash: false,
    },
    {
      format: ['cjs'],
      outDir: 'lib',
      fixedExtension: false,
      hash: false,
      deps: {
        // tsdown <0.23 compatibility: resolve external dependency subpaths.
        // Remove to preserve subpath imports as written (the new default).
        // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
        resolveDepSubpath: true,
        alwaysBundle: ['rattail'],
      },
    },
  ],
})
