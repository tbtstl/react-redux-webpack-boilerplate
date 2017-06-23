const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const distPath = path.join(__dirname, '/public/');

const env = {
    production: NODE_ENV === 'production',
    development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

const config = {
    entry: {
        app: './app/index.js',
        vendor: [
            'jquery',
            'moment',
            'react',
            'lodash'
        ]
    },
    output: {
        path: distPath,
        filename: '[name].js',
        sourceMapFilename: '[name].map.js',
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            _: 'lodash',
            React: 'react'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        })
    ],
    resolve: {
        modules:[
            path.join(__dirname, 'app/'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /^(?!.*\.spec\.jsx?$).*\.jsx?$/,
                exclude: /(vendor|node_modules|dist)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-0']
                        }
                    }]
            },
            {
                test: /\.json$/,
                use: [{loader: 'json-loader'}]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|gif|ico|jpg)($|\?)/,
                loader: 'file-loader?name=' + '[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }

        ]
    }
};


module.exports = config;
