module.exports = [
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
    exclude: /node_modules/,
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    include: /src/,
    exclude: /node_modules/,
    options: { optimizeSSR: false, },
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.(woff(2)?|ttf|eot)$/,
    loader: 'url-loader?limit=20000',
    exclude: /node_modules/,
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader?limit=20000',
    exclude: /node_modules/,
  },
];
