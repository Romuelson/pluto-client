import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { store } from '@store/store';

import { useHomeMediaQuery } from '@pages/home/use.home-media-query';
import { viewHomeSpecial } from '@pages/home/elements/home-special/view.home-special';

import Special from './special.comp';

import { specialRouter } from './mocks/special.router';
import { createSpecialData } from './mocks/mock/special.mock.data';

export default {
	title: 'Components/Organisms/Special',
	component: Special,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Special>;

const Template: ComponentStory<typeof Special> = (args) => {
	const mediaQuery = useHomeMediaQuery();
	return viewHomeSpecial({
		className: 'special__stories',
		mediaQuery,
		info: createSpecialData(),
	});
};

export const Playground = Template.bind({});
Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
	msw: {
		handlers: specialRouter,
	},
};
