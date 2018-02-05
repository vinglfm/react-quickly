var webpack = require('webpack');

var config = {
  entry: __dirname + '/timer.jsx',
  output: {
    path: __dirname + '/build',
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
