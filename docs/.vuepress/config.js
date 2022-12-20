module.exports = {
  title: 'phihash',
  description: ' ',  // Welcome to your VuePress siteを消すために空
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * <meta property="og:description" content="phihashのイラストサイト" />
        <meta property="og:site_name" content="phihash-illust" />
        <meta property="og:image" content="hero.PNG" />
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      ["link", { rel: "shortcut icon", href: "/favicon.png" }],
      ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
      ["meta", { property: "og:description", content: "phihashのポートフォリオです。。。。" }],
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Works',
        link: '/works/'
      }
    ],
    sidebar: {
      '/about/': [
        {
          title: 'About',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },
}
