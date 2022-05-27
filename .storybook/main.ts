const path = require('path');

import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
		disableTelemetry: true,
	},
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(css|s[ac]ss)$/i,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});

		return config;
	},
}

module.exports = config;
