const Dotenv = require('dotenv-webpack');

const path = require('path');

module.exports = {
  plugins: [
    new Dotenv()
  ],
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ],
  },
};
