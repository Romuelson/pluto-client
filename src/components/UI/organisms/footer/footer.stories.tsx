import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { store } from '@store/store';
import { infoRouter } from '@mocks/components/info/info.router';

import Footer from './footer.comp';
import { categoriesRouter } from '../categories/mocks/categories.router';

export default {
	title: 'Components/Organisms/Footer',
	component: Footer,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
	msw: {
		handlers: [infoRouter, categoriesRouter],
	},
};
