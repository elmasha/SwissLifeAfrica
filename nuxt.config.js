import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
   server: {
    host: '127.0.0.1',
    port: 4000
  },

  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s ',
    title: 'SwissLife Africa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },



  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/mapGoogle.client.js","@/plugins/directionsRenderer.js",'@/plugins/chart.js'],

  router: {
    middleware: ["auth"]
  },

  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY || 'AIzaSyBohXT2fagF68PWxk4fnTSnH3tNf5Zo21o',
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  googleFonts: {
    download: true,
    families: {
      Quicksand: true,
    },
    display: "Quicksand",
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    "@nuxtjs/google-fonts",

  ],
  moment: {
    timezone: false
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    [
      "@nuxtjs/firebase",
      {
        config: {
        apiKey: "AIzaSyAwLDEb3zYp9_0KNzrmz4reYgI3Y6iFCkg",
        authDomain: "swiife-260ff.firebaseapp.com",
        projectId: "swiife-260ff",
        storageBucket: "swiife-260ff.firebasestorage.app",
        messagingSenderId: "872066992824",
        appId: "1:872066992824:web:b76134c4b884354b13424d",
        measurementId: "G-29FZ1PJ8HL"
        },
        services: {
          auth: {
            persistence: "local", // default
            initialize: {
              nAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
              subscribeManually: false,
            },
            ssr: false,
          },
          storage: true,
          firestore: true,

        },
      },
    ],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          green: "#66CC33",
          primary: "#B6FF00",
          accent: "#8051FF",
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
