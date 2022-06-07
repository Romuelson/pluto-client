/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';

/* Components */
import Button from './button.comp';
import * as ButtonEnum from './button.enum';

export default {
	title: 'Components/Molecules/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {
	view: ButtonEnum.ButtonViewEnum.white,
	size: ButtonEnum.ButtonSizeEnum.S,
};