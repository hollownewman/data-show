const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: './js/data-show.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        //  new uglify(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './data-show.html'
        })
    ],
    /*
     * 编译react：
     * 1.安装babel-loader加载器，后期不论是css、image，es2015基本都依赖这个加载器
     * 2.安装babel-core加载器运行核心（babel-loader基于这个核心运行）
     * 3.安装babel-preset-react，用来编译react的加载器
     * 4.配置webpack
     * */
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                options: {
                    name: "../images/[name].[ext]",
                    publicPath: './images'
                }
            }]
        }]
    },
    // devtool: 'source-map',
    devServer: {
        host: 'localhost',
        contentBase: path.resolve(__dirname, './'), //指定项目服务启动的位置（因为打包内容放置在dist中，所以服务内容针对的生产环境应该在dist目录中）
        port: 8087
    }
}
