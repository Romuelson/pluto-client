/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Сategories from './categories.comp';

export default {
	title: 'Components/Organisms/Сategories',
	component: Сategories,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
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
};
