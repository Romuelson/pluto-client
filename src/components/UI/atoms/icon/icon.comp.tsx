import './styles/index.scss';

import { otherPropsToString } from '@utils/components/props';

import { BrowserSVGElement } from './icon.type';

function Icon(props: BrowserSVGElement) {
	const { glyph, viewBox, className, ...otherProps } = props;

	const setClassName = otherPropsToString(otherProps, undefined, className);

	return (
		<svg viewBox={viewBox} className={setClassName}>
			<use xlinkHref={`#${glyph}`} />
		</svg>
	);
}

export default Icon;
