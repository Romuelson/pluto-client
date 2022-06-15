import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { store } from '@store/store';

import Сategories from './categories.comp';
import { categoriesRouter } from './mocks/categories.router';

export default {
	title: 'Components/Organisms/Сategories',
	component: Сategories,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Сategories>;

const Template: ComponentStory<typeof Сategories> = (args) => (
	<Сategories {...args} />
);

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
	msw: {
		handlers: categoriesRouter,
	},
};
