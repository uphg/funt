import esbuild from 'rollup-plugin-esbuild'

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
      // exports: 'auto'
    },
    /* {
      dir: `dist/umd`,
      name: `funny`,
      format: 'umd',
    } */
  ],
  plugins: [
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    })
  ],
}
