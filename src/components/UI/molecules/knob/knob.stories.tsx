/* eslint-disable react-hooks/rules-of-hooks */

/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import useKnob from '@hooks/components/knob/use.knob';

/* Components */
import useIcons from '@hooks/components/icons/use.icons';
import Knob from './knob.comp';

export default {
	title: 'Components/Molecules/Knob',
	component: Knob,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
} as ComponentMeta<typeof Knob>;

const { Search } = useIcons();

export const { KnobSearch, KnobUser, KnobHeart, KnobShop, KnobMenu } =
	useKnob().collections;

const Template: ComponentStory<typeof Knob> = (args) => <Knob {...args} />;
export const Playground = Template.bind({});
Playground.args = {
	Icon: Search,
	children: 'Поиск',
};
