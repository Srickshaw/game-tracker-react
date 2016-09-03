var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + "/src",

  devServer: {
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    historyApiFallback: true
  },

  devtool: 'source-map',

  resolve: {
    modulesDirectories: ['node_modules']
  },

  entry: [
		'webpack/hot/only-dev-server',
    './index.js'
	],

  output: {
    path: __dirname + '/dist',
		publicPath: 'http://localhost:8080/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ["style", "css", "postcss-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },

  postcss: function () {
    return [autoprefixer];
  }
};
