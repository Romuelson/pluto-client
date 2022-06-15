import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { infoRouter } from '@mocks/components/info/info.router';
import { store } from '@store/store';

import Info from './info.comp';
import { InfoTypeEnums } from './info.enum';

export default {
	title: 'Components/Molecules/Info',
	component: Info,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Playground = Template.bind({});

Playground.args = {
	type: InfoTypeEnums.categories,
};

Playground.parameters = {
	layout: 'fullscreen',
	msw: {
		handlers: infoRouter,
	},
};
