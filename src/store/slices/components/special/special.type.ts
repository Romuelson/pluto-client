export type SpecialContent = {
	content: string;
};

export type SpecialContextTitle = SpecialContent;

//

export type SpecialContextDescriptionItem = {
	id: string;
	text: string;
};

export type SpecialContextContent = SpecialContextDescriptionItem[];

export type SpecialContextDescription = {
	content: SpecialContextContent;
};

export type SpecialContextItem = {
	id: string;
	title: SpecialContextTitle;
	description: SpecialContextDescription;
};

export type SpecialContext = SpecialContextItem[];

//

export type SpecialControlContent = SpecialContent;

export type SpecialControlItem = {
	id: string;
	title: SpecialControlContent;
};

export type SpecialControlData = SpecialControlItem[];

export type SpecialControl = {
	data: SpecialControlData;
};

//

export type SpecialData = {
	context: SpecialContext;
	control: SpecialControl;
};

export type SpecialStyleBackground = {
	mobile: string;
	desktop: string;
};

export type SpecialStyle = {
	background: SpecialStyleBackground;
};

export type SpecialInfoItem = {
	id: string;
	data: SpecialData;
	style: SpecialStyle;
};

export type SpecialInfo = SpecialInfoItem[];
