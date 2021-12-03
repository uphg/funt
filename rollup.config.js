import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript';

export default {
  input: `src/index.ts`,
  output: [
    {
      name: 'funny',
      dir: 'dist',
      // file: 'dist/index.js',
      format: 'umd',
      sourcemap: true
    },
    {
      preserveModules: true, // 保留导入的模块为单独文件
      dir: `dist`,
      format: 'es',
      sourcemap: true
    },
    // {
    //   preserveModules: true, // 保留导入的模块为单独文件
    //   dir: `dist/es`,
    //   format: 'es',
    //   sourcemap: true
    // },
    // {
    //   preserveModules: true, // 保留导入的模块为单独文件
    //   dir: `dist/cjs`,
    //   format: 'cjs',
    //   sourcemap: true
    // },
    // {
    //   name: 'funny',
    //   file: 'dist/umd/index.js',
    //   format: 'umd',
    //   sourcemap: true
    // }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    // terser() // 压缩代码
  ]
}
