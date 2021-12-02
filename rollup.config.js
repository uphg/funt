import esbuild from 'rollup-plugin-esbuild'

const createLib = (fileName) => ({
  input: `src/${fileName}.ts`,
  output: [
    {
      file: `dist/es/${fileName}.js`,
      format: 'es'
    },
    {
      file: `dist/umd/${fileName}.js`,
      name: `funny.${fileName}`,
      format: 'umd'
    }
  ],
  plugins: [
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    })
  ],
})

export default [
  createLib('find'),
  createLib('findIndex'),
  createLib('findLast'),
  createLib('findLastIndex'),
]
