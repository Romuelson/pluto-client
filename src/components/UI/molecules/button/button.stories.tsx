import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Text from '@components/UI/atoms/text/text.comp';
import { TextAsEnum, TextSizeEnum } from '@components/UI/atoms/text/text.enum';

import Button from './button.comp';
import * as ButtonEnum from './button.enum';

export default {
	title: 'Components/Molecules/Button',
	component: Button,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>
		<Text as={TextAsEnum.span} size={TextSizeEnum.XXS}>
			Пример
		</Text>
	</Button>
);

export const Playground = Template.bind({});

Playground.args = {
	view: ButtonEnum.ButtonViewEnum.white,
	size: ButtonEnum.ButtonSizeEnum.S,
};
