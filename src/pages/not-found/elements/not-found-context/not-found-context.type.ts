import {
	TextContentProps,
	TextContentView,
} from '@components/UI/atoms/text/utils/text-content/text-content.type';

import * as EContextDisplay from './not-fount-context.enum';

export type NotFoundContextData = {
	content: Omit<TextContentProps, 'className' | 'view'>;
	// control: Omit<TextContentProps, 'className'>;
};

/**/

export type ContextViewElements = {
	content: { view: TextContentView };
	// control: { view: TextContentView };
};

export type ContextViewDisplay = {
	width: EContextDisplay.ENotFoundContextWidth;
};

export type NotFoundContextView = {
	display: ContextViewDisplay;
	elements: ContextViewElements;
};

export type NotFoundContextProps = {
	className: string;
	data: NotFoundContextData;
	view: NotFoundContextView;
};
