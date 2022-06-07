import * as ButtonEnum from './button.enum';

export type ButtonProps = {
	children: string;
	className?: string;
	view?: ButtonEnum.ButtonViewEnum;
	size?: ButtonEnum.ButtonSizeEnum;
};
