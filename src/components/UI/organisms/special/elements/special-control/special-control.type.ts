import { ESpecialControlWrap } from './special-control.enum';

import { ESpecialTextViews } from '../special-text/special-text.enum';
import { ESpecialButtonViews } from '../special-button/special-button.enum';

export type SpecialControlItem = {
	id: string;
	title: string;
};

export type SpecialControlData = SpecialControlItem[];

export type SpecialControlDisplay = {
	wrap: ESpecialControlWrap;
};

export type SpecialControlViewElements = {
	title: ESpecialTextViews;
	view: ESpecialButtonViews;
	callback: () => void;
};

export type SpecialControlView = {
	elements: SpecialControlViewElements[];
	display: SpecialControlDisplay;
};

export type SpecialControlProps = {
	className: string;
	data: SpecialControlData;
	view: SpecialControlView;
};
