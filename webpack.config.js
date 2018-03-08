var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin')

const marked = require("marked")
const renderer = new marked.Renderer()

var env = process.env.NODE_ENV
var compress = process.env.COMPRESS
var plugins = []

//node环境变量，生产环境：production，开发环境：development
plugins.push(new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(env)
}))

//代码丑化
if (env === 'production' && compress) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    )
}
plugins.push(new CopyWebpackPlugin([{
    context: './public',
    from: '**/*',
    to: 'public'
}]))

plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: [ 'reactbundle','mkbundle'],
    filename:'[name].[hash:8].bundle.js',
    minChunks: 5
}))

plugins.push(new HtmlWebpackPlugin({
    filename: './index.html', //生成的html存放路径，相对于 path
    favicon: './assets/img/favicon.ico', //favicon路径
    template: './index.html', //html模板路径
    inject: true, //允许插件修改哪些内容，包括head与body`
}))

const extractCSS = new ExtractTextPlugin('[name]-one-[hash:8].css');
const extractLESS = new ExtractTextPlugin('[name]-two-[hash:8].css');

plugins.push(extractCSS)
plugins.push(extractLESS)
module.exports = {
    devtool: 'source-map',
    entry: {
        bundle: ["./index.js", "./assets/styles/index.less"],
        reactbundle:['react',"react-dom", "moment"],
        mkbundle:["mk-meta-engine","mk-component","mk-utils"],
        // vendor: ["react", "react-dom", "moment"],
        //  mk: ["mk-meta-engine", "mk-component", "mk-utils"]
    },

    output: {
        path: path.join(__dirname, "/dist/"),
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name].[hash:8].chunk.js'
    },

    resolve: {
        extensions: [".js"]
    },

    module: {
        rules: [{
            test: /\.css$/,
            //exclude: /node_modules/,
            use: extractCSS.extract({
               fallback: "style-loader",
               use: ['css-loader']
           })
        }, {
            test: /\.less$/,
            use: extractLESS.extract({
               fallback: "style-loader",
               use: ['css-loader', 'less-loader']
           })
        }, {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                    limit: 8192
                }
            }
        },{
            test: /\.md$/,
            use: [{
                loader: "html-loader"
            }, {
                loader: "highlight-loader"
            }, {
                loader: "markdown-loader",
                options: { renderer }

            }]
        }],
    },
    devServer: {
        contentBase: './dist/',
        proxy: {
            '/v1/*': 'http://127.0.0.1:8000/'
        }
    },
    plugins: plugins
}
