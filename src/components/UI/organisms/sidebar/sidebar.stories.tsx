/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import { store } from '@store/store';

import Sidebar from './sidebar.comp';

export default {
	title: 'Components/Organisms/Sidebar',
	component: Sidebar,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
	<Sidebar {...args} />
);

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
};
