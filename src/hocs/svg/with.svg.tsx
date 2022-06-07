/* eslint-disable react/no-children-prop */

import { ComponentType } from 'react';

import { BrowserSpriteSymbol } from '@components/UI/atoms/icon/icon.type';
import { otherPropsToString } from '@utils/components/props';

type HOCProps = {
	children?: string;
	className?: string;
};

function withSVG<T>(Component: ComponentType<T>, icon: BrowserSpriteSymbol) {
	type ComponentProps = T & HOCProps;

	const { id, viewBox } = icon;

	function WithSVG(props: ComponentProps) {
		const { children, className, ...otherProps } = props;

		const setClassName = otherPropsToString(
			otherProps,
			undefined,
			className
		);

		return (
			<Component
				{...props}
				glyph={id}
				viewBox={viewBox}
				className={setClassName}
				children={children}
			/>
		);
	}

	return WithSVG;
}

export default withSVG;
