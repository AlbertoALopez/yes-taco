const path = require('path');
const express = require('express');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

const app = express();
const config = require('../config/webpack.config.js');

const compiler = webpack(config);

if (isDevelopment) {
  // Tell express to use the webpack-dev-middleware and use
  // the webpack.config.js configuration file as a base.
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,

  }));

  // Webpack hot middleware config options
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    heartbeat: 10 * 1000,
    path: '/__webpack_hmr',
  }));
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Server running on port 3000\n');
});
