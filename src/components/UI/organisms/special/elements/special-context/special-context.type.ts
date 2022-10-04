import { ESpecialTextViews } from '../special-text/special-text.enum';

// export type SpecialContextTitle = {
// 	view: ESpecialTextViews;
// 	content: string;
// };

export type SpecialDescriptionItem = {
	id: string;
	text: string;
};

export type SpecialDescriptionContent = SpecialDescriptionItem[];

// export type SpecialContextDescription = {
// 	view: ESpecialTextViews;
// 	content: SpecialDescriptionContent;
// };

export type SpecialContextItem = {
	id: string;
	title: string;
	description: SpecialDescriptionContent;
};

export type SpecialContextData = SpecialContextItem[];

export type SpecialContextView = {
	title: ESpecialTextViews;
	description: ESpecialTextViews;
};

export type SpecialContextProps = {
	className: string;
	data: SpecialContextData;
	view: SpecialContextView;
};
