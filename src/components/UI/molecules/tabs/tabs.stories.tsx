import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Tabs from './tabs.comp';
import { tabsMock } from './mocks/tabs.mock';
import { TabsDirectionEnum, TabsLineEnum } from './tabs.enum';

export default {
	title: 'Components/Molecules/Tabs',
	component: Tabs,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
} as ComponentMeta<typeof Tabs>;

const { data } = tabsMock();

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Playground = Template.bind({});
Playground.args = {
	data,
	tabsLine: TabsLineEnum.bottom,
	tabsDirection: TabsDirectionEnum.row,
};
