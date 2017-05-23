// basic imports
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const autoprefixer = require('autoprefixer');

//main webpack configuration
module.exports = () => {


    const plugins = [
        new ExtractTextPlugin('./stylesheets/[name].css')
    ]

    return {
        devtool: 'inline-source-map',

        resolve: {
            extensions: ['.webpack.js', '.web.js', '.js', '.min.js', '.jsx']
        },

        entry: {
            // entry points JS files that will be loaded
            bundle: path.join(__dirname, 'src', 'styles', 'main.scss'),
        },

        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js'
        },

        module: {
            rules: [
                {
                    test: /\.(jpg|jpeg|png|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: 'images/[name].[ext]',
                                limit: 32 * 1024 // 32kb - data-url limit for IE
                            }
                        }
                    ]
                },
                {
                    test: /(\.css|\.scss)$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    sourceMap: true,
                                    importLoaders: true,
                                    plugins: [ autoprefixer ]
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: true,
                                    plugins: [ autoprefixer ]
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }]
                }
            ]
        },

        plugins
    }
};