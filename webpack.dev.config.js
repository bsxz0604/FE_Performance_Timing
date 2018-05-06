module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: `${__dirname}/dev_build`,
        filename: '[name].js',
        library: '_performanceShow',
        libraryTarget: 'umd'
    }
};