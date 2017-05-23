const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest']
          }
        }
      }
    ]
  },
  entry: {
    carousel: './src/demo/focus-picture-carousel/focus-picture-carousel.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/demo/focus-picture-carousel'),
    filename: '[name][hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name][hash].css'),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/demo/focus-picture-carousel/focus-picture-carousel.html',
      chunks: ['carousel']
    })
  ]
}
