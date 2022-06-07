const path = require('path');

const remarkSlug = require('../node_modules/remark-slug');
const remarkExternalLinks = require('../node_modules/remark-external-links');

const config = {
	stories: [
		'../src/**/*.docs.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-links',
		'@storybook/addon-measure',
		'@storybook/addon-outline',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
		disableTelemetry: true,
	},
	webpackFinal: async (config) => {
		config.module.rules = config.module.rules.map((rule) => {
			if (rule.test && rule.test.toString().includes("svg")) {
				const test = rule.test.toString().replace("svg|", "").replace(/\//g, "");
				return { ...rule, test: new RegExp(test) };
			} else {
				return rule;
			}
		});

		config.module.rules.push(
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				include: path.resolve(__dirname, '../'),
			},
			{
				test: /\.svg$/i,
				loader: require.resolve('svg-sprite-loader')
			},
			{
				test: /\.docs\.mdx$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react'],
						},
					},
					{
						loader: '@mdx-js/loader',
						options: {
							remarkPlugins: [remarkSlug, remarkExternalLinks],
						},
					},
				],
			}
		);

		config.resolve.alias = {
			...config.resolve?.alias,
			"@src": path.resolve(__dirname, '../src'),
			"@styles": path.resolve(__dirname, '../src/assets/styles'),
			"@components": path.resolve(__dirname, '../src/components'),
			"@hocs": path.resolve(__dirname, '../src/hocs'),
			"@hooks": path.resolve(__dirname, '../src/hooks'),
			"@mocks": path.resolve(__dirname, '../src/mocks'),
			"@pages": path.resolve(__dirname, '../src/pages'),
			"@routes": path.resolve(__dirname, '../src/routes'),
			"@services": path.resolve(__dirname, '../src/services'),
			"@store": path.resolve(__dirname, '../src/store'),
			"@types": path.resolve(__dirname, '../src/types'),
			"@utils": path.resolve(__dirname, '../src/utils'),
			"@public": path.resolve(__dirname, '../public'),
			"@images": path.resolve(__dirname, '../public/assets/images'),
			"@icons": path.resolve(__dirname, '../public/assets/images/common/icons'),
		};

		return config;
	},
}

module.exports = config;
