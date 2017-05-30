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
    main: './src/main/asset/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'asset/js/[name][chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin('asset/css/[name][chunkhash].css'),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/main/index.html',
      chunks: ['main']
    }),
    new htmlWebpackPlugin({
      filename: 'page/2/index.html',
      template: './src/main/index.html',
      chunks: ['main']
    }),
    new htmlWebpackPlugin({
      filename: 'aboutme.html',
      template: './src/main/aboutme.html',
      chunks: ['']
    }),
    new htmlWebpackPlugin({
      filename: 'friendlink.html',
      template: './src/main/friendlink.html',
      chunks: ['']
    }),
    new htmlWebpackPlugin({
      filename: 'demo.html',
      template: './src/main/demo.html',
      chunks: ['']
    })
  ]
}
