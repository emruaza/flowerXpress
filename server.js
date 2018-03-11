const path = require('path');
const webpack = require('webpack');
const express = require('express');

const config = require('./webpack.config');
const { STATIC_PATH } = require('./config/paths');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler))

app.use(express.static(STATIC_PATH));

app.get('*', function(req, res) {
  res.sendFile(path.join(STATIC_PATH, 'index.html'));
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, function(err) {
  if (err) return console.error(err);
  console.log('Listening at http://localhost:3003/');
});
