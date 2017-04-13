/*
    ./webpack.config.js
*/

const path = require('path');

//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//  template: './client/index.html',
//  filename: 'index.html',
//  inject: 'body'
//})

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve('public/js'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}