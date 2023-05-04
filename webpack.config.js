const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js",
        index5: "./src/index5.js",
      },
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    mode: 'development',
    module: {
        rules:[
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
              //test: /\.css$/,
              //use:['style-loader','css-loader']
      
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
            }
          ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index5.html",
            filename: "index5.html",
            chunks: ["index5"],
        })
    ]
};

