export default {
  // entry point
  target: "server",
  // source directory
  srcDir: "src/",
  css: ["@/assets/custom.scss"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  plugins: ["~/plugins/bootstrap.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "@nuxtjs/vuetify",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt",
  ],
  // specify module rules for css and scss
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // use these settings to use custom css
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true,
  },
};
