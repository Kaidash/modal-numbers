const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8090',
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    './src/index.story2.js'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      }]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
