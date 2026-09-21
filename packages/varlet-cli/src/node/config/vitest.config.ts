import { cpus } from 'os'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite-plus'
import { VITE_RESOLVE_EXTENSIONS } from '../shared/constant.js'

const cpuNum = Math.max(cpus().length - 1, 1)

export default defineConfig({
  resolve: {
    extensions: VITE_RESOLVE_EXTENSIONS,
  },

  plugins: [vue(), jsx()],

  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://rfc-vitest-v5-upgrade-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.{vue,ts,tsx,js,jsx}'],
      exclude: ['**/*.d.ts', '**/*.md', '**/example/**', '**/__tests__/**'],
    },
    globals: true,
    vmMemoryLimit: Math.min((1 / cpuNum) * 2, 0.2),
  },
})
