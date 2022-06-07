import Icon from '@components/UI/atoms/icon/icon.comp';
import Text from '@components/UI/atoms/text/text.comp';
import Link from '@src/components/UI/atoms/link/link.comp';

import Logo from '../../logo.comp';

function LogoDefault() {
	return (
		<Logo>
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
							// color={TextColorEnum.Brand}
							// textDecoration={TextDecorationEnum.underline}
						>
							{children}
						</Text>
					) : null}
				</>
			</Link>
		</Logo>
	);
}

export default LogoDefault;
