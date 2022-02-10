module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    https: true,
  },
  publicPath: './',
  configureWebpack: {
    devtool: 'source-map',
  },
  pwa: {
    name: 'RIPA Stops',
    themeColor: '#42b983',
    msTileColor: '#000000',
    appleMobileWebAppCache: 'yes',
    appleMobileWebAppStatusBarStyle: '#000000',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
    workboxOptions: {
      navigateFallback: '/index.html',
    },
  },
}
