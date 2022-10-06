import { TextCreateView } from '../../hooks/text-create/text-create.type';

export type TextDescriptionItem = {
	id: string;
	text: string;
};

export type TextDescriptionContent = TextDescriptionItem[];

// export type SpecialContextDescription = {
// 	view: ESpecialTextViews;
// 	content: SpecialDescriptionContent;
// };

export type TextContentItem = {
	id: string;
	title: string;
	description: TextDescriptionContent;
};

export type TextContentData = TextContentItem[];

export type TextContentView = {
	title: TextCreateView;
	description: TextCreateView;
};

export type TextContentProps = {
	className: string;
	data: TextContentData;
	view: TextContentView;
};
