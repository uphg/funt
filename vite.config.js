const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'funny',
      formats: ['umd'], // default：['es', 'umd']
      fileName: (format) => `${format}/index.js`
    },
  }
})