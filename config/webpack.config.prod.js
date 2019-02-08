const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

// -- Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id]-[hash].css'
    })
  ],
  mode: 'production'
};

module.exports = webpackMerge.smart(prodConfig);