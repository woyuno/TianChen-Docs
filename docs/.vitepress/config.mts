import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TianChen Docs',
  description: 'TianChen documentation site',
  lang: 'zh-CN',
  base: '/TianChen-Docs/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/company-ai-platform' }
    ],
    sidebar: [
      {
        text: '文章',
        items: [
          { text: '公司AI平台调用方法', link: '/articles/company-ai-platform' }
        ]
      }
    ],
    socialLinks: []
  }
})
