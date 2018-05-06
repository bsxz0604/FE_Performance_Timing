const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        _performanceShow: './index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: '_performanceShow',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules|vendor|bootstrap/,
                loader: 'babel-loader?presets[]=es2015-loose&cacheDirectory&plugins[]=transform-runtime',
            },
        ]
    },
    // devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: false
        })
    ]
};