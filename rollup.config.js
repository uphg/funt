import path from 'path'
import typescript from 'rollup-plugin-typescript2';
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'

export default {
  input: `src/index.ts`,
  output: [
    {
      preserveModules: true, // 保留导入的模块为单独文件
      dir: `dist/es`,
      format: 'es'
    },
    {
      preserveModules: true, // 保留导入的模块为单独文件
      dir: `dist/cjs`,
      format: 'cjs',
      exports: 'auto'
    }
  ],
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: false,
          declaration: true,
          declarationMap: false,
          rootDir: './src',
          outDir: 'dist',
          declarationDir: 'dist'
        },
      },
    }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    terser() // 压缩代码
  ]
}