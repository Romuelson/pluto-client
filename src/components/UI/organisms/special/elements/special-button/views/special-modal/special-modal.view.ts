import {
	ButtonSizeEnum,
	ButtonTypeEnum,
	ButtonViewEnum,
} from '@components/UI/molecules/button/button.enum';

import { ButtonProps } from '@components/UI/molecules/button/button.type';

import { UseSpecialViewsProps } from '../../special-button.type';

export const specialModal = ({
	children,
}: UseSpecialViewsProps): ButtonProps => ({
	children,
	className: 'special__modal',
	type: ButtonTypeEnum.link,
	view: ButtonViewEnum.brand,
});
