import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue Bootstrap Autocomplete',
  description: 'A simple autocomplete component for Vue 3 using Bootstrap 4',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home', link: '/',
      }, {
        text: 'Guide', link: '/guide/gettingStarted',
      }, {
        text: 'Examples', link: '/examples/examples'
      }
    ],

    sidebar: [
      { link: '/' },
      { link: '/guide/gettingStarted' },
      { link: '/guide/reference' },
      { link: '/examples/examples' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bytemate-pro/vue-bootstrap-autocomplete/' }
    ]
  }
})
