/* eslint-disable no-undef */

const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),

  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'index.min.js',
    chunkFilename: 'chunks/[id]-[chunkhash].chunk.js',
    publicPath: process.env.WEBPACK_MODE
      ? '/wp-content/themes/sps/js/'
      : '/sps/wp-content/themes/sps/js/',
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new TerserPlugin({
      extractComments: false,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: [/core-js/],
      },
    ],
  },
};
