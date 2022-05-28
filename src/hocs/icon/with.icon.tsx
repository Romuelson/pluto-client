import { IconSize } from '../../types/components/UI/icon/icon.enum';
import { BrowserSpriteSymbol } from '../../types/components/UI/icon/icon.type';

export type WithIconProps = {
	width?: string;
	height?: string;
};

function withIcon(args: BrowserSpriteSymbol) {
	const { id, viewBox = '0 0 20 20' } = args;

	function WithIcon(props: BrowserSpriteSymbol) {
		const { className = 'icon' } = props;

		return (
			<svg viewBox={viewBox} className={className} {...props}>
				<use xlinkHref={`#${id}`} />
			</svg>
		);
	}

	return WithIcon;
}

export default withIcon;
