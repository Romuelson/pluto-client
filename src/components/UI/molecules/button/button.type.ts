import { LinkProps } from '@components/UI/atoms/link/link.type';

import * as ButtonEnum from './button.enum';

export type ButtonProps = {
	key?: string;
	children: JSX.Element | string;
	className?: string;
	view?: ButtonEnum.ButtonViewEnum;
	size?: ButtonEnum.ButtonSizeEnum;
	cursor?: ButtonEnum.ButtonCursorEnum;
	type?: ButtonEnum.ButtonTypeEnum;
	to?: LinkProps['to'];
	clickHandler?: () => void;
};
