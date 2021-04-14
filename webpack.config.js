const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, '/client/public'),
    filename: 'bundle.js'
  }
};

module.exports = config;