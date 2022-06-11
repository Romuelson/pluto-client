/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '@store/store';

import { MemoryRouter } from 'react-router-dom';

import Hamburger from './hamburger.comp';

export default {
	title: 'Components/Molecules/Hamburger',
	component: Hamburger,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Hamburger>;

const Template: ComponentStory<typeof Hamburger> = (args) => (
	<Hamburger {...args} />
);

export const Playground = Template.bind({});

Playground.args = {};
