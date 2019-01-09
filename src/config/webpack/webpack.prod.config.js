const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode  : 'production',
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename     : '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test  : /[\\/]node_modules[\\/]/,
          name  : 'vendor',
          chunks: 'initial'
        }
      }
    }
  }
});
