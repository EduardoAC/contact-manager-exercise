const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // Public path is needed to tell HtmlWebpackPlugin
    // where the bundle should be accessed by webpack-dev-server
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Contact list exercose',
      filename: 'index.html',
      template: 'assets/index.html',
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
