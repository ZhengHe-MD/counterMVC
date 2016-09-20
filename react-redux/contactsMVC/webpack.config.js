const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './contacts.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist')
  // },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react']
        }
    }]
  }
}
