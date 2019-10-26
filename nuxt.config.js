import purgecssConfig from './config/purgecss.config'
import headConfig from './config/head.config'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: headConfig.description },
      { hid: 'keywords', name: 'keywords', content: headConfig.keywords.join(',') },
      { hid: 'author', name: 'author', content: headConfig.author },
      { hid: 'generator', name: 'generator', content: 'Nuxt.js' },
      { hid: 'robots', name: 'robots', content: headConfig.robots }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ],
    bodyAttrs: {
      class: 'bg-gray-100 antialiased font-sans overflow-x-hidden'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-composition-api',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-purgecss',
  ],

  purgeCSS: {
    mode: () => 'postcss',
    // enabled: true,
    ...purgecssConfig
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        tailwindcss: './tailwind.config.js',
        autoprefixer: {}
      }
    },
  }
}
