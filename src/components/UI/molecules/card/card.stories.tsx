import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { store } from '@store/store';

import CardWrapper from './elements/card-wrapper/card-wrapper.comp';

import { cardRouter } from './mocks/card.router';
import { ELabelSections } from './mocks/card.mock.enum';
import { CardSizeEnum } from './card.enum';

export default {
	title: 'Components/Molecules/Card',
	component: CardWrapper,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof CardWrapper>;

const Template: ComponentStory<typeof CardWrapper> = (args) => (
	<CardWrapper {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
	id: '94d17faa-ae31-4a2c-9b54-d2f465d294ca',
	section: ELabelSections.collections,
	display: { picture: { page: false, carousel: false } },
};

Playground.parameters = {
	msw: {
		handlers: cardRouter,
	},
};
