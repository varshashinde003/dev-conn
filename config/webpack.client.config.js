'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function (webpackEnv) {
    const isProduction = webpackEnv !== "development";
    return {
        mode: webpackEnv,
        devtool: false,
        entry: [
            paths.clientEntry,
        ],
        output: {
            path: paths.clientBuildDir,
            pathinfo: false,
            filename: isProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js',
            futureEmitAssets: true,
            chunkFilename: isProduction ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
            publicPath: "/",
            globalObject: 'this',
        },
        optimization: {
            minimize: isProduction,
            minimizer: [
                isProduction && new TerserPlugin({
                    terserOptions: {
                        parse: {
                            ecma: 8,
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false,
                            inline: 2,
                        },
                        mangle: {
                            safari10: true,
                        },
                        keep_classnames: true,
                        keep_fnames: true,
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true,
                        },
                    },
                    parallel: true,
                    cache: true,
                    sourceMap: false,
                }),

                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        map: false
                    },
                }),

            ].filter(Boolean),
            splitChunks: {
                chunks: 'all',
                name: false,
            },
            runtimeChunk: {
                name: entrypoint => `runtime-${entrypoint.name}`,
            },
        },

        module: {
            strictExportPresence: true,
            rules: [
                { parser: { requireEnsure: false } },

                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: require.resolve('url-loader'),
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
                {
                    test: [/\.svg$/],
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    include: paths.clientSrc,
                    loader: require.resolve('babel-loader'),
                    options: {
                        customize: require.resolve('babel-preset-react-app/webpack-overrides'),
                        presets: [
                            [
                                require.resolve('babel-preset-react-app/dependencies'),
                                { helpers: true },
                            ],
                        ],
                        cacheDirectory: true,
                        cacheCompression: false,
                        compact: true,
                    },
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    loader: require.resolve('file-loader'),
                    exclude: [/\.(js|mjs|jsx|ts|tsx|css)$/, /\.html$/, /\.json$/],
                    options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                template: '!!html-loader?interpolate=require!' + paths.clientHtml,
                filename: paths.serverEjs,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                }
            }),
            new MiniCssExtractPlugin({
                filename: 'static/css/[name].[contenthash:8].css',
                chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        ].filter(Boolean),

    };
};


