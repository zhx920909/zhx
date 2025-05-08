import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'My Awesome Project',
    description: 'A VitePress Site',
    base: '/zhx/',
    themeConfig: {
        // Logo
        logo: '/zhx-logo-mini.svg',

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                ],
            },
        ],

        // 社交账户链接
        socialLinks: [{ icon: 'github', link: 'https://github.com/zhx920909' }],

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
