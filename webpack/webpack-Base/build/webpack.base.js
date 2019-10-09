const dev = require('./webpack.dev');
const prod = require('./webpack.prod');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = (env) => {
    console.log(env);
    let isDev = env.development;
    const base = {
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist'),
        },
        plugins: [
            // 每次打包之前先清空dist目录
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['**/*']
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'),
                filename: 'index.html',
                minify: !isDev && {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true, // htnl 整个压缩成一行
                }
            })
        ]
    }

    // 函数要返回配置文件，没返回会采用默认配置
    if (isDev) {
        return merge(base, dev);
    } else {
        return merge(base, prod);
    }
}