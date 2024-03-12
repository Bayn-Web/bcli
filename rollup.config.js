import { defineConfig } from 'rollup'

export default defineConfig({
  input: './index.js',
  output: [
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
  ],
})
