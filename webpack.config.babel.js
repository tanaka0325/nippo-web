import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = [
  {
    name: 'js',
    entry: path.join(__dirname, 'src', 'js', 'index'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.json?$/,
          loader: 'json-loader',
        },
      ],
    },
  },
  {
    name: 'style',
    cache: true,
    entry: path.join(__dirname, 'src', 'sass', 'style.sass'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'style.css',
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract('css?minimize!sass'),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
    ],
  },
];
