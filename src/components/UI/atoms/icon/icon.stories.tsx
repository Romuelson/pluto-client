import { ComponentMeta, ComponentStory } from '@storybook/react';

import IconStories from './elements/icon-stories/icon-stories.comp';
import { IconColorEnum, IconSizeEnum } from './icon.enum';

export default {
	title: 'Components/Atoms/Icons',
	component: IconStories,
} as ComponentMeta<typeof IconStories>;

const Template: ComponentStory<typeof IconStories> = (args) => (
	<IconStories {...args} />
);

export const Playground = Template.bind({});

Playground.args = {
	color: IconColorEnum.Black,
	size: IconSizeEnum.L,
};
