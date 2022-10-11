const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
	mode: 'production',
	plugins: [
		new HtmlWebpackPlugin({
			filename: '[name].[contenthash].min.html',
			template: './public/index.html',
			minify: {
				collapseWhitespace: true
			}
		}),
		new CopyPlugin({
			patterns: [{ from: './public/assets/images', to: './assets/images' }],
		}),
		new MiniCssExtractPlugin({
			filename: './assets/styles/[name].[contenthash].min.css',
			chunkFilename: './assets/styles/[id].[contenthash].min.css'
		}),
	],
	output: {
		filename: './scripts/[name].[contenthash].min.js'
	},
	optimization: {
		minimize: true,
		minimizer: [
			// new ImageMinimizerPlugin({
			// 	minimizer: {
			// 		implementation: ImageMinimizerPlugin.squooshMinify,
			// 		options: {
			// 			encodeOptions: {
			// 				mozjpeg: {
			// 					// Этот параметр может быть близок к без потерь, но это не гарантируется.
			// 					// https://github.com/GoogleChromeLabs/squoosh/issues/85
			// 					quality: 90
			// 				},
			// 				webp: {
			// 					lossless: 1
			// 				},
			// 				// avif: {
			// 				// 	// https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
			// 				// 	cqLevel: 0
			// 				// }
			// 			}
			// 		}
			// 	}
			// }),
			new CssMinimizerPlugin(),
			new TerserPlugin()
		]
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|gif|webp|avif)$/i,
				type: 'asset/resource',
				generator: {
					filename: './assets/images/inline-css/[name].[contenthash].min[ext][query]'
				}
			},
			{
				test: /\.svg/,
				issuer: /\.(css|s[ac]ss)$/,
				use: 'svgo-loader',
				type: 'asset/resource',
				generator: {
					filename: './assets/images/inline-css/svg/[name].[contenthash].min[ext][query]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: './assets/fonts/[name].[contenthash][ext][query]'
				}
			}
		]
	}
}
