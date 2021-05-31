const path = require('path');
const rules = require('./rules');
const plugins = require('./plugins');
const resolve = require('./resolve');

module.exports = {
  mode: process.env.NODE_ENV,
  watch: process.env.NODE_ENV === 'development',
  target: 'web',

  entry: './src/js/main.js',
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].js',
    publicPath: '/',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
  },

  module: {
    rules,
  },

  plugins,

  resolve,

  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    clientLogLevel: 'error',
    historyApiFallback: true,
    overlay: true,
    compress: true,
    writeToDisk: true,
    contentBase: path.join(__dirname, '../src'),
    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: '/node_modules/',
    },
  },

  performance: {
    hints: false,
  },

  devtool: 'source-map',
};
