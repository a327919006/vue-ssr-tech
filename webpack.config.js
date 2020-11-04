const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
    mode: process.env.NODE_ENV || 'production',
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            /*{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },*/
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.evn': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin(),
        new VueLoaderPlugin()
    ]
};

if (isDev) {
    config.module.rules.push({
        test: /\.styl(us)?$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: "postcss-loader",
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
    });
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        port: 8000,
        host: '127.0.0.1',
        overlay: {
            errors: true
        },
        open: true,
        hot: true,
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
    );
} else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    };
    config.output.filename = '[name].[chunkhash:8].js';
    config.module.rules.push({
        test: /\.styl(us)?$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                }
            },
            'stylus-loader'
        ]
    });
    config.plugins.push(
        new MiniCssExtractPlugin({filename: 'styles.[contentHash:8].css'}),
    );
    config.optimization = {
        runtimeChunk: {
            name: 'vendor'
        },
        splitChunks: {
            maxInitialRequests: 10,
            cacheGroups: {
                common: {
                    name: 'common',
                    //chunks: 'all'
                }
            }
        }
    }
}

module.exports = config;
