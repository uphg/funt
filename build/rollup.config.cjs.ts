import commonPlugins from './commonPlugins';

export default {
  input: `src/index.ts`,
  output:  {
    preserveModules: true, // 保留导入的模块为单独文件
    dir: `dist/cjs`,
    format: 'cjs',
    exports: 'auto'
  },
  plugins: commonPlugins
}