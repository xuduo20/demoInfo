module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './build/index.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}