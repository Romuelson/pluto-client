const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');

const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const env = dotenv.config().parsed || {};
const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

module.exports = {
	entry: {
		index: './src/index.tsx'
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin(),
		new webpack.DefinePlugin(envKeys),
		new ForkTsCheckerWebpackPlugin(),
		new ESLintPlugin({
			extensions: ['js', 'jsx','ts', 'tsx']
		}),
		new SpriteLoaderPlugin(),
		new StylelintPlugin(),
	],
	output: {
		path: path.resolve(__dirname, '../../dist'),
		clean: true,
		pathinfo: false
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json', '.css','.scss', '.sass'],
		alias: {
			"@src": path.resolve(__dirname, '../../src'),
			"@styles": path.resolve(__dirname, '../../src/assets/styles'),
			"@components": path.resolve(__dirname, '../../src/components'),
			"@hocs": path.resolve(__dirname, '../../src/hocs'),
			"@hooks": path.resolve(__dirname, '../../src/hooks'),
			"@mocks": path.resolve(__dirname, '../../src/mocks'),
			"@pages": path.resolve(__dirname, '../../src/pages'),
			"@routes": path.resolve(__dirname, '../../src/routes'),
			"@services": path.resolve(__dirname, '../../src/services'),
			"@store": path.resolve(__dirname, '../../src/store'),
			"@types": path.resolve(__dirname, '../../src/types'),
			"@utils": path.resolve(__dirname, '../../src/utils'),
			"@public": path.resolve(__dirname, '../../public'),
			"@images": path.resolve(__dirname, '../../public/assets/images'),
			"@icons": path.resolve(__dirname, '../../public/assets/images/common/icons'),
		}
	},
	cache: {
		type: 'filesystem',
	},
	devtool: false,
	optimization: {
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(css|s[ac]ss)$/i,
				use: [MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env', {}
									]
								]
							}
						}
					},
					'sass-loader'
				],
			},
			{
				test: /\.([jt]s|[jt]sx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
						cacheDirectory: true
					}
				}
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly : true
				}
			},
			// {
			// 	test: /\.svg$/i,
			// 	issuer: /\.[jt]sx?$/,
			// 	resourceQuery: { not: [/url/] },
			// 	use: [
			// 		{
			// 			loader: '@svgr/webpack',
			// 			options: {
			// 				typescript: true,
			// 			}
			// 	 	}
			// 	],
			// },
			{
				test: /\.svg$/,
				issuer: /\.[jt]sx?$/,
				use: [
					'svg-sprite-loader',
					'svgo-loader'
				]
			}
		]
	}
}
