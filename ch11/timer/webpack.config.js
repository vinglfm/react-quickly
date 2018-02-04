var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
  entry: __dirname + '/timer.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : __dirname,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
