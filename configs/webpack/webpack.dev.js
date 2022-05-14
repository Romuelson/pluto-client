const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const APP_PORT = process.env.APP_PORT || 1488;
const SERVE = process.env.SERVE || false;

const pluginService = (SERVE) => {
	const collector =  [
		new HtmlWebpackPlugin({
			filename: '[name].html',
			template: './public/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: './assets/styles/[name].css',
			chunkFilename: './assets/styles/[id].css'
		}),
		new webpack.SourceMapDevToolPlugin({
			filename: './[file].map',
			exclude: [/runtime.*.*/ ,/vendors.*.*/]
		})
	];

	if (SERVE) {
		collector.push(new ReactRefreshWebpackPlugin());
	}

	return collector;
}

module.exports = {
	mode: 'development',
	devServer: {
		port: APP_PORT,
		historyApiFallback: true
	},
	plugins: pluginService(SERVE),
	output: {
		filename: './scripts/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|gif|webp|avif)$/i,
				type: 'asset/resource',
				generator: {
					filename: './assets/images/inline-css/[name][ext][query]'
				}
			},
			{
				test: /\.svg/,
				issuer: /\.(css|s[ac]ss)$/,
				use: 'svgo-loader',
				type: 'asset/resource',
				generator: {
					filename: './assets/images/inline-css/svg/[name][ext][query]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: './assets/fonts/[name][ext][query]'
				}
			},
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve('babel-loader'),
						options: {
							plugins: [SERVE && require.resolve('react-refresh/babel')].filter(Boolean),
						}
					}
				]
			}
		]
	}
}
