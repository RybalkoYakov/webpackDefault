const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: "img",
                    name: "favicon.png"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/main.html",
            filename: "index.html"
        })
    ]
};