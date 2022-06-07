import * as LinkEnum from './link.enum';

export type LinkProps = {
	children: JSX.Element;
	as?: LinkEnum.LinkAsEnum;
	to: string;
	className?: string;
	linkDecoration?: LinkEnum.LinkDecoration;
	linkColor?: LinkEnum.LinkColor;
};
