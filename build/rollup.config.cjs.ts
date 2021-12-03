import commonPlugins from './commonPlugins';
import typescript from '@rollup/plugin-typescript';

export default {
  input: `src/index.ts`,
  output:  {
    preserveModules: true, // 保留导入的模块为单独文件
    dir: `dist/cjs`,
    format: 'cjs',
    sourcemap: 'hidden',
    exports: 'auto'
  },
  plugins: [
    typescript({
      tsconfig: './build/tsconfig.cjs.json',
    }),
    ...commonPlugins
  ]
}