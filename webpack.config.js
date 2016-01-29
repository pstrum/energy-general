var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    path: path.join(__dirname, 'src')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }
};
