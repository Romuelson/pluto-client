/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Sidebar from './sidebar.comp';

export default {
	title: 'Components/Organisms/Sidebar',
	component: Sidebar,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
	<Sidebar {...args} />
);

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
	layout: 'fullscreen',
};
