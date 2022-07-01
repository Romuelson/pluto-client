/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import { store } from '@store/store';

import Carousel from './carousel.comp';

export default {
	title: 'Components/Organisms/Carousel',
	component: Carousel,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
	<Carousel {...args} />
);

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
};
