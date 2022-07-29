import * as ButtonEnum from './button.enum';

export type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	view?: ButtonEnum.ButtonViewEnum;
	size?: ButtonEnum.ButtonSizeEnum;
	cursor?: ButtonEnum.ButtonCursorEnum;
	clickHandler?: () => void;
};
