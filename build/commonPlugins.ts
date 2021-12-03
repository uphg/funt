import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'

export default [
  esbuild({
    include: /\.[jt]s$/,
    minify: process.env.NODE_ENV === 'production',
    target: 'es2015' 
  }),
  terser() // 压缩代码
]