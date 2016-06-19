var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './src/index.js'
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
        })
    ],
    output: {
        path: 'dist',
        publicPath: '/',
        filename: 'bundle.js'
    },

    resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'src/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
    module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              cacheDirectory: true,
              presets: ['react', 'es2015', 'stage-0']
            },
        },
        {
            test: /\.(jpg|png)$/,
            loader: 'url?limit=25000',
            include: 'src/styles/img/',
            filename: 'demo-1-bg.jpg'
          }
      ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },

    sassLoader: {
      includePaths: [
        path.resolve(__dirname, './node_modules/foundation-sites/scss')
      ]
    },

};
