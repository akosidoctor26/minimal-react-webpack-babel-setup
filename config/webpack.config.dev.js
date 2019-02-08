const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

// -- Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = {
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3001,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [ //TODO: Fix later. For now, can start development
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          //MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  mode: 'development'
};

module.exports = webpackMerge.smart(baseConfig, devConfig);