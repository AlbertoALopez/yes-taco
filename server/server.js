const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();
const config = require('../webpack.config.js');

const compiler = webpack(config);

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
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Server running on port 3000\n');
});
