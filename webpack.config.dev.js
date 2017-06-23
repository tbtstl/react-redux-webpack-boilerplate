const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const BaseConfig = require('./webpack.config.base');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const distPath = path.join(__dirname, '/public/');

module.exports = function(env) {
    return Merge(BaseConfig, {
        devtool: 'eval',
        entry: {
            app: [
                'babel-polyfill',
                'webpack-dev-server/client?http://localhost:8080',
                './app/index'
            ]
        },
        output: {
            path: distPath,
            pathinfo: true,
            publicPath: '/',
            filename: '[name].js',
            sourceMapFilename: '[name].map.js'
        },
        plugins: [
            new CaseSensitivePathsPlugin(),
            new DashboardPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development')
                }
            })
        ],
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            overlay: {
                warnings: false,
                errors: true
            },
            noInfo: true,
            hot: true,
            inline: true,
            historyApiFallback: true,
            contentBase: distPath,
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /^(?!.*\.spec\.jsx?$).*\.jsx?$/,
                    enforce: 'pre',

                    exclude: /(vendor|node_modules|dist)/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-0'],
                            plugins: ['react-hot-loader/babel']
                        }
                    }, {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true,
                            configFile: '.eslintrc.js'
                        }
                    }]
                }
            ]
        }
    })
}
