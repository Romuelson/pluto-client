import { SpecialProps } from '@components/UI/organisms/special/special.type';

import * as ESpecialInfo from '@components/UI/organisms/special/elements/special-info/special-info.enum';

import { ESpecialTextViews } from '@components/UI/organisms/special/elements/special-text/special-text.enum';
import { ESpecialButtonViews } from '@components/UI/organisms/special/elements/special-button/special-button.enum';
import { ESpecialControlWrap } from '@components/UI/organisms/special/elements/special-control/special-control.enum';

import { UseHomeSpecialViewProps } from '../../home-special.type';

export const specialMedium = (props: UseHomeSpecialViewProps): SpecialProps => {
	const { className, info } = props;

	return {
		className,
		data: {
			info: {
				listInfo: info,
				view: {
					elements: {
						context: {
							view: {
								title: ESpecialTextViews.title,
								description: ESpecialTextViews.description,
							},
						},
						control: {
							view: {
								display: {
									wrap: ESpecialControlWrap.nowrap,
								},
								elements: [
									{
										title: ESpecialTextViews.control,
										view: ESpecialButtonViews.modal,
										callback: () => {},
									},
									{
										title: ESpecialTextViews.control,
										view: ESpecialButtonViews.redirrect,
										callback: () => {},
									},
								],
							},
						},
					},
					display: {
						width: ESpecialInfo.SpecialInfoWidth.M,
						padding: ESpecialInfo.SpecialInfoPadding.M,
						alignSelf: ESpecialInfo.SpecialInfoAlignSelf.center,
						justifySelf:
							ESpecialInfo.SpecialInfoJustifySelf.flexStart,
					},
					style: {
						backgroundSize: 'auto, 100%',
						backgroundPosition: 'bottom left 73%, 0 96px',
					},
				},
			},
		},
	};
};
