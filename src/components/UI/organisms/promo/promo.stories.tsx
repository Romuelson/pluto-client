import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { store } from '@store/store';

import Promo from './promo.comp';

export default {
	title: 'Components/Organisms/Promo',
	component: Promo,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Promo>;

const Template: ComponentStory<typeof Promo> = (args) => (
	<Promo className="promo__stories promo" />
);

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
	msw: {
		handlers: [],
	},
};
