const path = require('path')

module.exports = {
  entry: './frontend/src/js/index.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
