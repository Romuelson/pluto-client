import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { store } from '@store/store';

import Default from '@components/UI/templates/default/default.comp';

import { infoRouter } from '@mocks/components/info/info.router';
import { categoriesRouter } from '@components/UI/organisms/categories/mocks/categories.router';

import NotFound from './not-found.page';

export default {
	title: 'Pages/NotFound',
	component: NotFound,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => (
	<Default routes={<NotFound />} />
);

export const Playground = Template.bind({});
Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
	msw: {
		handlers: [infoRouter, categoriesRouter],
	},
};
