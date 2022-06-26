import path from 'path'
import typescript from 'rollup-plugin-typescript2';
import esbuild from 'rollup-plugin-esbuild'

const entryConfigs = {
  cjs: 'src/index.ts',
  umd: 'src/funt.ts',
  esm: 'src/index.ts'
}

const outputConfigs = {
  cjs: {
    preserveModules: true,
    dir: 'dist',
    format: 'cjs',
    exports: 'auto'
  },
  umd: {
    name: 'funt',
    file: 'dist/funt.js',
    format: 'umd'
  },
  esm: {
    file: 'dist/index.es.js',
    format: 'es'
  }
}

const tsPlugin = typescript({
  check: process.env.NODE_ENV === 'production',
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  tsconfigOverride: {
    compilerOptions: {
      sourceMap: false,
      declaration: true,
      declarationMap: false,
      rootDir: './src',
      outDir: 'dist',
      declarationDir: 'dist'
    }
  }
})

const esbuildPlugin = esbuild({
  include: /\.[jt]s$/,
  minify: process.env.NODE_ENV === 'production',
  target: 'es2015'
})

function createConfig(env) {
  const { CJS = false, ESM = false } = env || {}

  const format = CJS ? 'cjs' : (ESM ? 'esm' : 'umd')

  return {
    input: path.resolve(__dirname, entryConfigs[format]),
    output: outputConfigs[format],
    plugins: [esbuildPlugin, ...(CJS ? [tsPlugin] : [])]
  }
}

export default createConfig(process.env)
