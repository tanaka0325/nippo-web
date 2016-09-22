import path from 'path';

module.exports = [
  {
    entry: path.join(__dirname, 'src', 'js', 'index.jsx'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
];
