var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname+'/build/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
  ],
  module: {
    loaders: [{
      //exclude: '/node_modules/',
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build/'
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
