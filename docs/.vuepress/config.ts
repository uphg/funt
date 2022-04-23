import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')

const isProd = process.env.NODE_ENV === 'production'

const nav = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '文档',
    link: '/docs'
  }
]

export default defineUserConfig<DefaultThemeOptions>({
  base: '/funt/',
  title: 'funt',
  description: 'JavaScript 处理数组对象字符串等函数库合集',

  themeConfig: {
    docsDir: 'docs',
    // logo: '/images/logo.svg',
    // theme-level locales config
    repo: 'uphg/funt',
    // navbar
    navbar: nav,

    // sidebar
    sidebar: nav,

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

    // // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },

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
  // markdown: {
  //   code: { lineNumbers: false }
  // },

  plugins: [
    // only enable shiki plugin in production mode
    // [
    //   '@vuepress/plugin-shiki',
    //   isProd
    //     ? {
    //         theme: 'dark-plus',
    //       }
    //     : false,
    // ],
    [
      '@vuepress/plugin-search',
      { placeholder: '搜索' },
    ],
  ],
})