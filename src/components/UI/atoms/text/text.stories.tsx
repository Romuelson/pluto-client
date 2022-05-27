/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Text from './text.comp';

export default {
	title: 'Atoms/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Title = Template.bind({});

Title.args = {
	value: 123,
};

export const Desctiption = Template.bind({});

Desctiption.args = {
	value: 321,
};
