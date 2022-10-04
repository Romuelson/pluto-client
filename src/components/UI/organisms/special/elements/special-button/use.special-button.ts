import { createElement } from 'react';

import Button from '@components/UI/molecules/button/button.comp';

import { specialModal } from './views/special-modal/special-modal.view';
import { specialRedirrect } from './views/special-redirrect/special-redirrect.view';

import { UseSpecialViewsProps } from './special-button.type';
import { ESpecialButtonViews } from './special-button.enum';

export const useSpecialButton = () => {
	const createSpecialButton = (view: ESpecialButtonViews) => {
		switch (view) {
			case ESpecialButtonViews.modal:
				return (props: UseSpecialViewsProps) =>
					createElement(Button, specialModal({ ...props }));
			default:
				return (props: UseSpecialViewsProps) =>
					createElement(Button, specialRedirrect({ ...props }));
		}
	};

	return { createSpecialButton };
};
