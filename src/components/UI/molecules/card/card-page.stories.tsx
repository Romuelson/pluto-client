import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { store } from '@store/store';

import CardPage from './elements/card-page/card-page.comp';

import { cardRouter } from './mocks/card.router';
import { ELabelSections } from './mocks/card.mock.enum';
import { CardSizeEnum } from './card.enum';

export default {
	title: 'Components/Organisms/CardPage',
	component: CardPage,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof CardPage>;

const Template: ComponentStory<typeof CardPage> = () => <CardPage />;

export const Playground = Template.bind({});
Playground.args = {
	id: '94d17faa-ae31-4a2c-9b54-d2f465d294ca',
	section: ELabelSections.collections,
	display: { size: CardSizeEnum.S },
};

Playground.parameters = {
	layout: 'fullscreen',
	msw: {
		handlers: cardRouter,
	},
};
