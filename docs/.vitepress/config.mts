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
            {
                text: 'Vue 生态',
                items: [
                    { text: 'Vue.js', link: '/vue/vuejs/essentials' },
                    { text: 'Vue Router', link: '/vue/vue-router/essentials' },
                    { text: 'Pinia', link: '/vue/pinia/essentials' },
                ],
            },
            {
                text: 'React 生态',
                items: [{ text: 'React.js', link: '/react/reactjs' }],
            },
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
            '/vue/vuejs/': [
                {
                    text: 'Vue.js',
                    items: [
                        { text: 'Vue 基础', link: '/vue/vuejs/essentials' },
                        { text: 'Vue 进阶', link: '/vue/vuejs/extras' },
                    ],
                },
            ],
            '/vue/vue-router/': [
                {
                    text: 'Vue Router',
                    items: [
                        {
                            text: 'Vue Router 基础',
                            link: '/vue/vue-router/essentials',
                        },
                        {
                            text: 'Vue Router 进阶',
                            link: '/vue/vue-router/extras',
                        },
                    ],
                },
            ],
            '/vue/pinia/': [
                {
                    text: 'Pinia',
                    items: [
                        {
                            text: 'Pinia 基础',
                            link: '/vue/pinia/essentials',
                        },
                        {
                            text: 'Pinia 进阶',
                            link: '/vue/pinia/extras',
                        },
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
