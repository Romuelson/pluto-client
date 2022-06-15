import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { store } from '@store/store';
import { infoRouter } from '@mocks/components/info/info.router';

import Header from './header.comp';

export default {
	title: 'Components/Organisms/Header',
	component: Header,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
	msw: {
		handlers: infoRouter,
	},
};
