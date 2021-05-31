const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = [
  new VueLoaderPlugin(),

  // copy html with js
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../src/index.html'),
  }),

  // minify css
  new OptimizeCSSAssetsPlugin(),

  // cache modules to speed up builds
  new HardSourceWebpackPlugin({ info: { level: 'warn' } }),

  // copy static files to web folder
  new CopyWebpackPlugin({
    patterns: [
      { from: './src/img', to: './img' },
    ],
  }),
];
