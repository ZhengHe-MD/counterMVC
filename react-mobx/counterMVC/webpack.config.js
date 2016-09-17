const path = require('path');
const WebpackDashboard = require('webpack-dashboard/plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'counter', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'static',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: [
    new WebpackDashboard(),
  ],
};
