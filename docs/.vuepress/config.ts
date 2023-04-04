import path from 'path'
import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/funt/',
  title: 'funt',
  description: 'JavaScript 处理数组对象字符串等函数库合集',

  theme: defaultTheme({
    docsDir: 'docs',
    // logo: '/images/logo.svg',
    // theme-level locales config
    repo: 'uphg/funt',

    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',

    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',

    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',

    openInNewWindow: '在新窗口打开',
    colorModeSwitch: true,
    toggleSidebar: '切换侧边栏',
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  }),

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
    code: { lineNumbers: false }
  },
  plugins: [
    searchPlugin({ locales: { '/': { placeholder: '搜索' } } })
  ]
})