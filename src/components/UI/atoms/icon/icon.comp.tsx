import './styles/index.scss';

import { BrowserSVGElement } from './icon.type';

function Icon(props: BrowserSVGElement) {
	const { glyph, viewBox, className } = props;

	return (
		<svg viewBox={viewBox} className={className}>
			<use xlinkHref={`#${glyph}`} />
		</svg>
	);
}

export default Icon;
