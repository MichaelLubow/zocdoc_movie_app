const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//PostCSS Modules
const autoprefixer = require('autoprefixer');
const lost = require('lost');
const cssnext = require('postcss-cssnext');

const path = require('path');

module.exports = {

  debug: true,

  devtool: 'source-map',

  //Not currently in use
  // devServer: {
  //   hot: true,
  //   inline: true
  // },

  entry: {
    app:  './src/js/main.js',
    vendor: ['babel-polyfill', 'react', 'react-dom', 'lodash']
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader' },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss',
          'sass?outputStyle=expanded'
        ]
      }
    ]
  },

  postcss: function () {
    return [cssnext, autoprefixer, lost];
  },

  plugins: [
    //new ExtractTextPlugin("styles.css"),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    // }
    // }),
    // new ExtractTextPlugin('[name].css', {
    //   allChunks: true
    // }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: 8080,
    //   proxy: 'http://localhost:8000/'
    // })

    // //TODO make BrowserSync configurable
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'/*, '.css', '.scss'*/]
  }
};