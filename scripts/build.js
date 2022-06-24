const path = require('path')
const execa = require('execa')
const fs = require('fs-extra')

const distDir = path.resolve(__dirname, '../dist')
const resolve = (p) => path.resolve(distDir, p)
const argv = require('minimist')(process.argv.slice(2));

// use pnpm build -v 0.1.2
run(argv)

async function run(argv) {
  const { v: version = '0.1.6' } = argv
  const packageJson = {
    name: 'funt',
    version,
    license: 'MIT',
    main: 'index.js',
    types: 'index.d.js',
    description: 'A javascript function collection library',
    keywords: ['javascript', 'array', 'object', 'function', 'methods'],
    homepage: 'https://github.com/uphg/funt#readme',
    repository: 'uphg/funt',
    bugs: 'uphg/funt/issues',
    author: 'Lv Heng <lvheng233@gmail.com>'
  }

  await execa('tsc')
  if (fs.existsSync(distDir)) {
    await fs.remove(distDir)
  }

  await execa('rollup', ['-c', '--environment', 'CJS'])
  await fs.remove(resolve('index.js'))
  await execa('rollup', ['-c'])
  const strPackage = JSON.stringify(packageJson, null, 2)
  fs.writeFile(resolve('./package.json'), strPackage)
  await execa('cp', ['README.md', 'dist'])
  console.log('build ok!')
}
