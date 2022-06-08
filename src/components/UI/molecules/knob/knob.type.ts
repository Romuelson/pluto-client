import { BrowserSVG } from '../../atoms/icon/icon.type';

export type KnobProps = {
	Icon: (props: BrowserSVG) => JSX.Element;
	children: string;
	to: string;
};
