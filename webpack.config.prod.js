const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './resources/src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: __dirname + '/public/'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {url: false}
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({filename: 'css/styles.css'})]
};