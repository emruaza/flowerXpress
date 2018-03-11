const path = require('path');
const webpack = require('webpack');
const { PUBLIC_PATH, APP_PATH, STATIC_PATH } = './config/paths';

const PLUGINS = [
  new webpack.HotModuleReplacementPlugin()
];

const MODULE = {
  loaders: [{
    test: /\.js$/,
    loaders: ['react-hot-loader/webpack', 'babel-loader'],
    include: APP_PATH
  }, {
    test: /\.(png|jpg|gif|svg)$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: 'images/[name][hash].[ext]'
      }
    }]
  }, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }]
};

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './app/components/index.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    path: STATIC_PATH,
    filename: 'bundle.js',
    publicPath: PUBLIC_PATH
  },
  plugins: PLUGINS,
  module: MODULE
};
