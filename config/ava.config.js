export default {
  require: ['../../config/ava-setup.js'],
  sources: ['**/*.{js,vue}', '!**/*.config*.js', '!**/*.alias*.js'],
  // snapshotDir: './snapshots',
  // babel: {
  //   testOptions: {
  //     babelrc: false,
  //     configFile: false,
  //     plugins: [
  //       [
  //         'babel-plugin-webpack-alias-7',
  //         {
  //           config: './webpack.config.babel.js'
  //         }
  //       ]
  //     ]
  //   }
  // },
  nyc: {
    extension: ['.js', '.vue']
  }
}
