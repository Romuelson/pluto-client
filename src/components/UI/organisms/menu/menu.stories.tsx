/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Menu from './menu.comp';

export default {
	title: 'Components/Organisms/Menu',
	component: Menu,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu />;

export const Playground = Template.bind({});

Playground.args = {};
