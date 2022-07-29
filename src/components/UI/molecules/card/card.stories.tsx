import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { store } from '@store/store';

import { useCard } from './use.card';
import { ELabelSections } from './mocks/card.mock.enum';

import Card from './card.comp';
import { cardRouter } from './mocks/card.router';
import { CardSizeEnum } from './card.enum';

export default {
	title: 'Components/Molecules/Card',
	component: Card,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
	const cards = useCard({
		type: ELabelSections.collections,
		id: ['94d17faa-ae31-4a2c-9b54-d2f465d294ca'],
		display: {
			size: CardSizeEnum.S,
		},
	});

	return <div style={{ maxWidth: 320 }}>{cards}</div>;
};

export const Playground = Template.bind({});
Playground.args = {
	size: CardSizeEnum.S,
};

Playground.parameters = {
	msw: {
		handlers: cardRouter,
	},
};
