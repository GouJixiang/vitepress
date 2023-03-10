module.exports = {
    title: 'QT-MBox',
    description: 'A Magic Develop Tool!',
    themeConfig: {
        logo: '/logo.png',
        editLink: {
            text: '为此页提供修改建议',
            pattern: ''
        },
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/GouJixiang'},
            {icon: 'discord', link: ''},
        ],
        nav: [
            {text: '使用指南', link: '/info/'},
            {text: '开发文档', link: '/dev/'},
            {
                text: '学习笔记',
                items: [
                    {
                        text: '网络',
                        link: '/study/network/'
                    },
                    {
                        text: '算法',
                        link: '/study/math/'
                    },
                    {
                        text: 'Docker',
                        link: '/study/docker/'
                    },
                    {
                        text: 'C++',
                        link: '/study/cplus/'
                    },
                    {
                        text: '开发小记',
                        link: '/study/other/'
                    }
                ]
            },
        ],
        sidebar: {
            '/study/other/': [
                {
                    text: '开发小记',
                    items: [
                        {text: 'Github Action 配置项目自动化部署至服务器', link: '/study/other/github-action'}
                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present yangxy'
        }
    }
}