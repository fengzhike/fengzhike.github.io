var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HappyPack = require('happypack')

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

plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap:false,
        compressor: {
            warnings: false
        },
        output: {
            comments: false,
        },
    })
)


plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor'))

plugins.push(new HtmlWebpackPlugin({
    filename: './index.html', //生成的html存放路径，相对于 path
    favicon: './assets/img/favicon.ico', //favicon路径
    template: './index.html', //html模板路径
    inject: true, //允许插件修改哪些内容，包括head与body`
}))


plugins.push(
    new HappyPack({
        loaders: ['babel-loader']
    })
)
module.exports = {
    devtool: 'false',
    entry: {
        bundle: ["./index.js", "./assets/styles/index.less"],
        react: ["react", 'react-dom', 'moment'],
        mks:['mk-meta-engine', 'mk-component', 'mk-utils']
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
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'happypack/loader',
            exclude: function (path) {
                // 路径中含有 node_modules 的就不去解析。
                var isNpmModule = !!path.match(/node_modules/);
                return isNpmModule;
            },
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
