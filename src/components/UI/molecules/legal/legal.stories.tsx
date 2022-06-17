import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { store } from '@store/store';

import Legal from './legal.comp';

export default {
	title: 'Components/Molecules/Legal',
	component: Legal,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Legal>;

const Template: ComponentStory<typeof Legal> = (args) => <Legal {...args} />;

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
};
