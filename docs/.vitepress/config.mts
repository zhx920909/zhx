import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "zhx's DOCS",
    description: '一个简单的文档库',
    base: '/zhx/',
    themeConfig: {
        // Logo
        logo: '/zhx-logo-mini.svg',

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: '指南', link: '/guide/tell-me-why' },
            { text: 'Node.js', link: '/nodejs/quick-start' },
        ],

        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    items: [{ text: '我的初衷', link: '/guide/tell-me-why' }],
                },
            ],
            '/nodejs/': [
                {
                    text: 'Node.js',
                    items: [
                        { text: '简介', link: '/nodejs/introduction' },
                        { text: '快速开始', link: '/nodejs/quick-start' },
                    ],
                },
            ],
        },

        // 社交账户链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/zhx920909' },
            { icon: 'twitter', link: 'https://x.com/zhx250213' },
        ],

        // 页脚
        footer: {
            message: '基于 MIT 许可发布',
            copyright: '版权所有 © 2025-2025 周勋',
        },

        // 搜索
        search: {
            provider: 'local',
        },
    },
    // 最后更新时间戳
    lastUpdated: true,
})
