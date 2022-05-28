declare module '*.png';
declare module '*.svg' {
	import * as React from 'react';
	import { BrowserSpriteSymbol } from './types/components/UI/icon/icon.type';

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;

	const content: BrowserSpriteSymbol;

	export default content;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
