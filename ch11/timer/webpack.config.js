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
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};

module.exports = config;
