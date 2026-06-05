import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TianChen Docs',
  description: 'TianChen documentation site',
  lang: 'zh-CN',
  base: '/TianChen-Docs/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/2026-6-5-update' }
    ],
    sidebar: [
      {
        text: '文章',
        items: [
          { text: '公司AI中转平台调用方法（已废弃）', link: '/articles/company-ai-platform' },
          { text: '2026.6.5 更新', link: '/articles/2026-6-5-update' }
        ]
      }
    ],
    socialLinks: []
  }
})
