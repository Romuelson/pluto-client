import * as IconEnum from './icon.enum';

import { LogoSizeEnum } from '../../molecules/logo/logo.enum';

export type BrowserSpriteSymbol = {
	id: string;
	viewBox: string;
	content: string;
	node: SVGSymbolElement;
};

export type BrowserSVG = {
	size?: IconEnum.IconSizeEnum | LogoSizeEnum;
	color?: IconEnum.IconColorEnum;
	glyph?: string;
	className?: string;
};

export type BrowserSVGElement = React.SVGProps<SVGSVGElement> & BrowserSVG;
