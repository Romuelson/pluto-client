import './styles/index.scss';

import Icon from '@components/UI/atoms/icon/icon.comp';
import Text from '@components/UI/atoms/text/text.comp';

import Link from '../../atoms/link/link.comp';

import { LogoProps } from './logo.type';
import {
	TextAlignEnum,
	TextAsEnum,
	TextFontEnum,
} from '../../atoms/text/text.enum';

function Logo(props: LogoProps) {
	const { glyph, viewBox, children, className, logoColor, ...otherProps } =
		props;

	return (
		<div className="logo">
			<Link to="/" className="logo__link">
				<>
					<Icon
						glyph={glyph}
						viewBox={viewBox}
						className={className}
						color={logoColor}
						{...otherProps}
					/>
					{children ? (
						<Text
							as={TextAsEnum.span}
							className="logo__text"
							font={TextFontEnum.TypeTypeNorms}
							textAlign={TextAlignEnum.center}
						>
							{children}
						</Text>
					) : null}
				</>
			</Link>
		</div>
	);
}

export default Logo;
