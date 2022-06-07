/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';

/* Components */
import Text from './text.comp';
import * as TextEnum from './text.enum';

export default {
	title: 'Components/Atoms/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Playground = Template.bind({});

const context = () =>
	'Чтобы человек захотел это прочитать, у него должна быть очень веская причина. Может быть, его заставили. Может быть, это модный автор, и все друзья уже прочитали. Может быть, где-то здесь в тексте решение его насущной проблемы. Или он просто устроился в кресле, чтобы познакомиться с классной книгой. В любом случае нужна веская причина. Сам по себе этот текст ничем не привлекает.';

Playground.args = {
	as: TextEnum.TextAsEnum.p,
	display: TextEnum.TextDisplayEnum.block,
	weight: TextEnum.TextWeightEnum.Normal,
	font: TextEnum.TextFontEnum.TypeTypeNorms,
	size: TextEnum.TextSizeEnum.ML,
	lineHeight: TextEnum.TextLineHeightEnum.S,
	color: TextEnum.TextColorEnum.Black,
	fontStyle: TextEnum.TextFontStyleEnum.normal,
	textTransform: TextEnum.TextTransformEnum.none,
	letterSpacing: TextEnum.TextLetterSpacingEnum.L,
	textAlign: TextEnum.TextAlignEnum.start,
	textCursor: TextEnum.TextCursorEnum.auto,
	children: context(),
};
