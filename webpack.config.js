const path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 entry: "./src/index.js",
 output: {
   filename: "bundle.js?[chunkhash]",
   path: path.resolve(__dirname, "dist")
 },

 resolve: {
   extensions: [".js", ".es6"]
 },
 watch: true,
 module: {
   loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: "babel-loader",
       query: {
         cacheDirectory: true,
         presets: ["react", "es2015"]
       }
     },
     {
       test: /\.css$/,
       loaders: ["style-loader", "css-loader"]
     },
     {
       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
       loader: "url-loader",
       options: {
         limit: 10000
       }
     }
   ]
 },
 plugins: [
   new HtmlWebpackPlugin({
     title: "SPA React-Redux-Jest",
     filename: "index.html",
     template: "src/index.html"
   })
 ]
};
