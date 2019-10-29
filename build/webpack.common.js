const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].js'
    },
    resolve:{
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        }
    },
    optimization: {
        // 生产环境默认启用tree shaking
        usedExports: true,
        // 用于代码分离
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // 使用vue必要的plugins
        new VueLoaderPlugin(),
        // 自动生成index.html
        new htmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            inject: true
        })
    ]
};