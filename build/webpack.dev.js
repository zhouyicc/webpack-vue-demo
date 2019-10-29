const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');

module.exports = webpackMerge({
    mode: 'development',
    devServer: {
        // contentBase: '../dist',
        publicPath: '/',
        compress: true,
        hot: true,
        hotOnly: true,
        port: 8080,
        overlay: true,
        clientLogLevel: 'none'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(stylus|styl)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'stylus-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}, common);