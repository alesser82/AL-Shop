const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js');

// module.exports = merge(common, {
//     mode: 'production',
// });

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'main.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Production',
        }),
    ],
    module: {
        rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: "babel-loader",
        },
        ],
    },
    mode: "production",
}

// module.exports = {
//     entry: ['babel-polyfill', './src/main.js'],

//     output: {
//         filename: 'bundle.js'       
//     },

//     module: {
//         loaders: [
//         { test: /\.js?$/, loader: 'babel', }
//         ]
//     },
//     mode: "production"
// };