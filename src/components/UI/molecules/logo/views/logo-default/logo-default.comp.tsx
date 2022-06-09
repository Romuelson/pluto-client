import Text from '@components/UI/atoms/text/text.comp';
import Icon from '@components/UI/atoms/icon/icon.comp';
import Link from '@components/UI/atoms/link/link.comp';

import {
	TextAsEnum,
	TextFontEnum,
	TextAlignEnum,
	TextSizeEnum,
	TextLineHeightEnum,
	TextColorEnum,
} from '@components/UI/atoms/text/text.enum';

import { IconColorEnum } from '@components/UI/atoms/icon/icon.enum';

import { LogoSizeEnum } from '../../logo.enum';
import { LogoProps } from '../../logo.type';

function LogoDefault(props: LogoProps) {
	const {
		glyph,
		viewBox,

		children,
		className,

		logoIconSize = LogoSizeEnum.S,
		logoIconColor = IconColorEnum.Brand,

		logoTextSize = TextSizeEnum.SXXS,
		logoTextLineHeight = TextLineHeightEnum.SXXS,
		logoTextColor = TextColorEnum.Tooltip,

		...otherProps
	} = props;

	return (
		<Link to="/" className="logo__link">
			<>
				<Icon
					glyph={glyph}
					viewBox={viewBox}
					className={className}
					size={logoIconSize}
					color={logoIconColor}
					{...otherProps}
				/>
				{children ? (
					<Text
						as={TextAsEnum.span}
						className="logo__text"
						font={TextFontEnum.TypeTypeNorms}
						size={logoTextSize}
						lineHeight={logoTextLineHeight}
						textAlign={TextAlignEnum.center}
						color={logoTextColor}
					>
						{children}
					</Text>
				) : null}
			</>
		</Link>
	);
}

export default LogoDefault;
