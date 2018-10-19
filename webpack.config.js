module.exports = {
  context: __dirname + '/webpack_app',

  entry: {
    javascript: './app.js',
    html: './index.html'
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/webpack_dist',
    publicPath: '/'
  },

  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader?sourceMap',
        query: {
          presets: ['react', 'es2015'] // <--- here
        }

      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap&includePaths[]=' + bourbon + neat[0] + '&includePaths[]=' + neat[1]]
      }
    ]
  }
}