const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: {
    app: './src/main.js',
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
output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
},
};