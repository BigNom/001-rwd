var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './src/index.js'
    ],
    output: {
        path: 'dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    externals: {
      jquery: 'jQuery'
    },
    resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'src/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              cacheDirectory: true,
              presets: ['react', 'es2015', 'stage-0']
            },
        }]
    },

    sassLoader: {
      includePaths: [
        path.resolve(__dirname, './node_modules/foundation-sites/scss')
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
        })
    ]
};
