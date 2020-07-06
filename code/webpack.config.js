var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var webpack = require('webpack');


module.exports = {
  mode:'development',
  devtool:'eval-cheap-module-source-map',
  entry: {
    main:'./src/index.js',
  },
  devServer:{
    contentBase:'./dist',
    open:true,
    hot:true
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      'js': path.resolve(__dirname, './src/js'),
      'assets': path.resolve(__dirname, './src/assets'),
    }
  },
  module: {
    rules: [{
        test: /\.(jpg|png|gif)$/,
        use: {
            loader: 'url-loader',
            // placeholder占位符
            options: {
                name: '[name]_[hash].[ext]',
                limit: 20480
            }
        }
    },{
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
    },{
      test:/\.art$/,
      use: {
        loader:'art-template-loader'
      }
    }
  ]
},
  output: {
    publicPath:'/',
    filename:'[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({template:'./src/index.html'}),
    new webpack.ProvidePlugin({
      $:'jquery'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};