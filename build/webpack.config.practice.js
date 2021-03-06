const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const baseConfig = require('./webpack.config.base')

const devServer = {
    port: 8080,
    host: '127.0.0.1',
    overlay: {
        errors: true
    },
    open: true,
    hot: true,
}

const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.evn': {
            NODE_ENV: '"development"'
        }
    }),
    new HTMLPlugin({
        // 定义默认模板
        template: path.join(__dirname, 'template.html')
    }),
    new VueLoaderPlugin()
]

let config

config = merge(baseConfig, {
    entry: path.join(__dirname, '../practice/index.js'),
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.styl(us)?$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        }]
    },
    devServer,
    // 这里配置vue加载指定的vue.esm.js，默认是runtime版本，index.js中不能使用template
    resolve: {
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
    ])
})

module.exports = config
