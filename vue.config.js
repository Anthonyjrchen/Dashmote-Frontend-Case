const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/Dashmote-Frontend-Case/",
  // disable hashes in filenames
  filenameHashing: false,
  // delete HTML related webpack plugins
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  build: {
    rollupOptions: {
      // overwrite default .html entry
      input: 'E:/Downloads/Dashmote-Frontend-Case-master/Dashmote-Frontend-Case/src/App.vue',
    },
  }
})