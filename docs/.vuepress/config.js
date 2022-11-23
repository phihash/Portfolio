module.exports = {
  title: 'phihash',
  description: 'phihashのポートフォリオサイトです',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [["link", { rel: "shortcut icon", href: "/favicon.png" }],["link", { rel: "apple-touch-icon", href: "/apple-icon.png" }]],
  ],
  themeConfig: {
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/phihash'
      },
      {
        text: 'Twitter',
        link: 'https://v1.vuepress.vuejs.org'
      },
      {
        text: 'About',
        link: '/about/'
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
