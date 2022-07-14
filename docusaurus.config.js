// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// 主要配置
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '北林计协官网',
  tagline: 'Welcome to CNA',
  url: 'https://bljx2022project.github.io',
  baseUrl: '/bljx_blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bljx2022project', // Usually your GitHub org/user name.
  projectName: 'bljx_blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    [
      //搜索插件
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bljx2022project/bljx_blog',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bljx2022project/bljx_blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  //主题配置
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //页面导航栏
      navbar: {
        title: '',  //页面标题
        logo: {
          alt: 'LOGO',
          src: 'img/logo.png',
        },
        // announcementBar: {
        //   id: 'announcementBar-3',
        //   content: '你还',
        // },
        items: [
          //导航栏配置项
                  {
          to: "/",
          label: "首页",
          position: "right",
        },
          {
             //文档选项
            type: 'doc',
            docId: 'intro',   // docs的ID号，对应docs文件夹中的xxx.md文件
            position: 'right',  // item在导航栏上的位置，分为左右
            label: '技术博客',  // 这个item显示的文字
          },
          //博客选项
          { to: '/blog', label: '计协新闻', position: 'right' },
          //Github仓库连接
          {
            href: 'https://github.com/bljx',
            label: 'GitHub',
            position: 'right',
          },
          // { to: '/docs/welcome.md', label: '关于计协', position: 'right' },
        ],
      },
      
      footer: {
        style: 'light',
        links: [
          {
            title: '关注计协',
            items: [
              {
                label: '微信公众号',
                href: 'https://mp.weixin.qq.com/s?__biz=MjM5MTE2MzgwNw==&mid=2651753352&idx=2&sn=f809d07e56ccbf10fc109578015c1e84',
              },
              {
                label: '发送邮件',
                href: 'mailto:help@bljx.org',
              },
              {
                label: 'QQ群',
                href:'https://tva1.sinaimg.cn/large/006SHRs9gy1h41x9jtpkkj30ku0nxjv0.jpg',
              }
            ],
          },
          {
            title: '计协项目',
            items: [
              {
                label: '北京林业大学视觉识别系统',
                href: 'http://vi.bjfu.edu.cn/',
              },
              {
                label: '2021暑期实践',
                href: 'https://github.com/bljx2021project',
              },
              {
                label: '2022暑期实践',
                href: 'https://github.com/bljx2022project',
              },
      
            ],
          },
          {
            title: '快速链接',
            items: [
              {
                label: '北京林业大学',
                href: 'http://www.bjfu.edu.cn/',
              },
              {
                label: '北京林业大学信息学院',
                href: 'http://it.bjfu.edu.cn/',
              },
              {
                label: 'BJFUoj',
                href: 'https://www.bjfuacm.com/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/bljx',
              },
              
              {
                label: 'Jetzihan',
                href: 'https://czhan.netlify.app',
              },
            ],
          },
        ],
        copyright: `<br/> Copyright © ${new Date().getFullYear()} 北京林业大学计算机与网络协会 <br/> Made with ❤ by Chengzihan. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
