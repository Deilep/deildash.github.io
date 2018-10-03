const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry : {
		main: 
		path.resolve(__dirname, "src", "index.js")
	},
	output : {
		filename: "[name].js",
		path: path.resolve(__dirname, "build")
	},
	// watch: true,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "css-loader",
					}
				]

			},
			{
				test:/\.scss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.vue$/, 
				use: [
				{
					loader: "vue-loader"
				}
				]
			},
			{
				test: /\.(wolf|wolf2|eot|ttf|otf)$/,
					loader: "file-loader"
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
				{
					loader: "url-loader",
					options: {
						limit: 8000,
					}
				}]
			}
		]},
		devServer: {
		contentBase: path.join(__dirname, "build"),
		compress: true,
		disableHostCheck: true,
		port: 8080,
		open: true,
		hot: true
	},
		devtool: "eval",
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({ template: "./index.html" }),
			new CopyWebpackPlugin([
			{ from: 'assets/img/*', to: 'build/' }
			])
		]	
	}