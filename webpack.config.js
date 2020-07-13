const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './app.js',
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    optimization: {
        splitChunks: {
            minSize: 1,
            // maxSize: 2,
        },
    },
    module: {
        rules: [
            { test: /\.(png|jpg|gif|((ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?))$/i, loader: "file-loader" },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    }
}
