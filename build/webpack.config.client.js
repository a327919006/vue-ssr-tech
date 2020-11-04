const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.config.base')
const isDev = process.env.NODE_ENV === 'development';

const devServer = {
    port: 8000,
    host: '127.0.0.1',
    overlay: {
        errors: true
    },
    open: true,
    hot: true,
};

const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.evn': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin(),
    new VueLoaderPlugin()
];

let config;

if (isDev) {
    config = merge(baseConfig, {
        devtool: '#cheap-module-eval-source-map',
        module: {
            rules: [{
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
            }]
        },
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
        ])
    });
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../src/index.js'),
            vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
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
                }
            ]
        },
        plugins: defaultPlugins.concat([
            new MiniCssExtractPlugin({filename: 'styles.[contentHash:8].css'}),
        ]),
        optimization: {
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
    });
}

module.exports = config;
