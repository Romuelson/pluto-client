import { SpecialProps } from '@components/UI/organisms/special/special.type';

import * as ESpecialInfo from '@components/UI/organisms/special/elements/special-info/special-info.enum';

import { ESpecialTextViews } from '@components/UI/organisms/special/elements/special-text/special-text.enum';
import { ESpecialButtonViews } from '@components/UI/organisms/special/elements/special-button/special-button.enum';
import { ESpecialControlWrap } from '@components/UI/organisms/special/elements/special-control/special-control.enum';

import { UseHomeSpecialViewProps } from '../../home-special.type';

export const specialLow = (props: UseHomeSpecialViewProps): SpecialProps => {
	const { className, mediaQuery, info } = props;

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
									wrap: ESpecialControlWrap.wrap,
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
						width: mediaQuery.S
							? ESpecialInfo.SpecialInfoWidth.S
							: ESpecialInfo.SpecialInfoWidth.M,
						padding: ESpecialInfo.SpecialInfoPadding.S,
						alignSelf: ESpecialInfo.SpecialInfoAlignSelf.flexEnd,
						justifySelf: ESpecialInfo.SpecialInfoJustifySelf.center,
					},
					style: {
						backgroundSize: 'auto, 100%',
						backgroundPosition: 'top 6px left 55%, 0 96px',
					},
				},
			},
		},
	};
};
