import * as ESpecialInfo from './special-info.enum';

import {
	SpecialControlProps,
	SpecialControlView,
} from '../special-control/special-control.type';

import {
	SpecialContextProps,
	SpecialContextView,
} from '../special-context/special-context.type';

export type SpecialInfoData = {
	context: Omit<SpecialContextProps, 'className' | 'view'>;
	control: Omit<SpecialControlProps, 'className' | 'view'>;
};

export type SpecialInfoDataView = {
	context: { view: SpecialContextView };
	control: { view: SpecialControlView };
};

export type SpecialInfoDisplay = {
	width: ESpecialInfo.SpecialInfoWidth;
	padding: ESpecialInfo.SpecialInfoPadding;
	alignSelf: ESpecialInfo.SpecialInfoAlignSelf;
	justifySelf: ESpecialInfo.SpecialInfoJustifySelf;
};

export type SpecialStyleBackground = {
	mobile: string;
	desktop: string;
};

export type SpecialInfoStyle = {
	backgroundImage: SpecialStyleBackground;
};

export type SpeciaInfoViewStyle = {
	backgroundSize: string;
	backgroundPosition: string;
};

export type SpecialInfoView = {
	display: SpecialInfoDisplay;
	style: SpeciaInfoViewStyle;
	elements: SpecialInfoDataView;
};

export type SpecialInfoProps = {
	className?: string;
	id: string;
	data: SpecialInfoData;
	style: SpecialInfoStyle;
	view: SpecialInfoView;
};
