import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { store } from '@store/store';
import { infoRouter } from '@mocks/components/info/info.router';

import Personal from './personal.comp';

export default {
	title: 'Components/Organisms/Personal',
	component: Personal,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Personal>;

const Template: ComponentStory<typeof Personal> = (args) => <Personal />;

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
	msw: {
		handlers: [],
	},
};
