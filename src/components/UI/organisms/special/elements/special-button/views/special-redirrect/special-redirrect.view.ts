import {
	ButtonTypeEnum,
	ButtonViewEnum,
} from '@components/UI/molecules/button/button.enum';

import { ButtonProps } from '@components/UI/molecules/button/button.type';

import { UseSpecialViewsProps } from '../../special-button.type';

export const specialRedirrect = ({
	children,
}: UseSpecialViewsProps): ButtonProps => ({
	children,
	className: 'special__redirrect',
	type: ButtonTypeEnum.link,
	view: ButtonViewEnum.white,
});
