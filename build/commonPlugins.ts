import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'

const commonPlugins = [
  esbuild({
    include: /\.[jt]s$/,
    minify: process.env.NODE_ENV === 'production',
    target: 'es2015' 
  }),
  terser() // 压缩代码
]

export default commonPlugins