/* Modules */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { IconColorEnum } from '../../atoms/icon/icon.enum';
import LogoStories from './elements/logo-stories/logo-stories.comp';

/* Components */
import Logo from './logo.comp';

export default {
	title: 'Components/Molecules/Logo',
	component: LogoStories,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
} as ComponentMeta<typeof LogoStories>;

const Template: ComponentStory<typeof Logo> = (args) => (
	<LogoStories {...args} />
);

export const Playground = Template.bind({});

Playground.args = {
	children: 'Жизнь - яркая штука!',
	className: 'logo__icon',
	logoColor: IconColorEnum.Brand,
};
