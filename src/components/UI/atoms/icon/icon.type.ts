import * as IconEnum from './icon.enum';

export type BrowserSpriteSymbol = {
	id: string;
	viewBox: string;
	content: string;
	node: SVGSymbolElement;
};

export type BrowserSVG = {
	size?: IconEnum.IconSizeEnum;
	color?: IconEnum.IconColorEnum;
	glyph?: string;
	className?: string;
};

export type BrowserSVGElement = React.SVGProps<SVGSVGElement> & BrowserSVG;
