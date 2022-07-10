// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// 主要配置
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '北林计协官网',
  tagline: 'Welcome to CNA',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '北林计协', // Usually your GitHub org/user name.
  projectName: '北林计协官网', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        items: [
          //导航栏配置项
          {
             //文档选项
            type: 'doc',
            docId: 'intro',   // docs的ID号，对应docs文件夹中的xxx.md文件
            position: 'right',  // item在导航栏上的位置，分为左右
            label: '技术博客',  // 这个item显示的文字
          },
          //博客选项
          //{ to: '/blog', label: '技术博客', position: 'right' },
          //Github仓库连接
          {
            href: 'https://github.com/facebook/docusaurus',
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
            title: 'Docs',
            items: [
              {
                label: '技术博客',
                to: '/blog',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `<br/> Copyright © ${new Date().getFullYear()} 北京林业大学计算机与网络协会 <br/> Made with ❤ by Chengzihan. <br> Built with <a herf="https://docusaurus.io/zh-CN/">Docusaurus<a/>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
