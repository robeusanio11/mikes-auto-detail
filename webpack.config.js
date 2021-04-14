const webpack = require('webpack');
const path = require('path');

const config = {
  mode: "development",
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
},
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
};

module.exports = config;