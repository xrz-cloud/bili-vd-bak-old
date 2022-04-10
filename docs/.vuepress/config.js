module.exports = {
  // 站点配置
  base: '/new/',
  lang: 'zh-CN',
  title: 'bili-vd-bak',
  description: '这是一个 备份各种(站长想备份的)资源 站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar: [
      {
        text: '切回旧版文档',
        link: '//tp.xrzyun.top/bili-vd-bak',
      },
      {
        text: '其它',
        children: [
          {
            text: '帮助',
            link: '/help/',
          },
          {
            text: '日志',
            link: '/log/',
          },
        ],
      },
    ],
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'xrz-cloud/bili-vd-bak',
    sidebar: {
      '/': [{
          text: '首页',
          link: '/',
        },
        {
          text: '库',
          link: '/lib/',
        },
        {
          text: '如果显示404怎么做?',
          link: '/404'
        }
      ],
    },
    editLinkText: '在GitHub上修改此页',
    docsBranch: 'wiki',
    docsDir: 'docs',
    notFound: [`这个页面火星了...`],
    backToHome: '返回首页',
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        // 允许搜索 Frontmatter 中的 `tags`
        getExtraFields: (page) => page.frontmatter.tags ?? [],
      },
    ],
  ],
}