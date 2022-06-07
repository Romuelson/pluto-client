import { otherPropsToString } from '@utils/components/props';

import Icon from '@components/UI/atoms/icon/icon.comp';

import {
	BrowserSpriteSymbol,
	BrowserSVGElement,
} from '@components/UI/atoms/icon/icon.type';

import {
	IconColorEnum,
	IconSizeEnum,
} from '@components/UI/atoms/icon/icon.enum';

function withIcon(args: BrowserSpriteSymbol) {
	const { id, viewBox = '0 0 20 20' } = args;

	function WithIcon(props: BrowserSVGElement) {
		const {
			className,
			// size = IconSizeEnum.XL,
			// color = IconColorEnum.Black,
			...otherProps
		} = props;

		// const defaultProps = ['icon', size, color];
		const setClassName = otherPropsToString(
			otherProps,
			undefined,
			className
		);

		return <Icon glyph={id} viewBox={viewBox} className={setClassName} />;
	}

	return WithIcon;
}

export default withIcon;
