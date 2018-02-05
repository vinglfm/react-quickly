const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  entry: {
    app: __dirname + '/index.jsx'
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    TimerWrapper: __dirname + 'src/TimerWrapper.jsx'
  },
  resolve: {
    alias: {
      TimerWrapper: path.resolve(__dirname, 'src/TimerWrapper.jsx'),
      Button: path.resolve(__dirname, 'src/Button.jsx'),
      StartButton: path.resolve(__dirname, 'src/StartButton.jsx'),
      Sound: path.resolve(__dirname, 'src/Sound.jsx'),
      Timer: path.resolve(__dirname, 'src/Timer.jsx'),
    }
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : __dirname,
        loaders : ['react-hot-loader/webpack','babel-loader']
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true
  },
  plugins: [
      new CleanWebpackPlugin(['build']),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
      }),
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
