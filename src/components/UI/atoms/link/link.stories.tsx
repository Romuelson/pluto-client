/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

/* Components */
import Link from './link.comp';
import { LinkAsEnum, LinkColor, LinkDecoration } from './link.enum';

import Text from '../text/text.comp';
import { TextAsEnum } from '../text/text.enum';

export default {
	title: 'Components/Atoms/Link',
	component: Link,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
	<Link {...args}>
		<Text as={TextAsEnum.span}>Жизнь - яркая штука!</Text>
	</Link>
);

export const Playground = Template.bind({});

Playground.args = {
	as: LinkAsEnum.a,
	to: '/',
	className: 'link',
	linkDecoration: LinkDecoration.none,
	linkColor: LinkColor.inherit,
};
