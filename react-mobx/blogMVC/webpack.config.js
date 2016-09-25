const path = require('path')

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  static: path.join(__dirname, 'static')
};

module.exports = {
  devtool: 'source-map',
  entry: {
    src: PATHS.src
  },
  output: {
    filename: 'bundle.js',
    path: PATHS.dist
  },
  devServer: {
    host: 'localhost',
    port: 8000,
    contentBase: PATHS.dist
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude: /node_modules/
      }
    ]
  }
}
