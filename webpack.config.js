module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.[ot]tf$/,
        loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ],
    rules: [{
      test: require.resolve('snapsvg/dist/snap.svg.js'),
      use: 'imports-loader?this=>window,fix=>module.exports=0',
    }],
  },
  resolve: {
    alias: {
      snapsvg: 'snapsvg/dist/snap.svg.js',
    }
  }
};
