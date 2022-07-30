import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { store } from '@store/store';

import CardStories from './elements/card-stories/card-stories.comp';

import { cardRouter } from './mocks/card.router';

export default {
	title: 'Components/Molecules/Card',
	component: CardStories,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof CardStories>;

const Template: ComponentStory<typeof CardStories> = (args) => <CardStories />;

export const Playground = Template.bind({});
Playground.args = {};

Playground.parameters = {
	msw: {
		handlers: cardRouter,
	},
};
