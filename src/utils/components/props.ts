export const otherPropsToString = (
	otherProps?: object,
	defaultProps?: string[],
	className?: string | ((props: { isActive: boolean }) => string | undefined),
	activeClassName?: string
): string => {
	const initialArray = [];

	if (typeof className === 'string') {
		initialArray.push(className);
	}

	if (activeClassName) {
		initialArray.push(activeClassName);
	}

	if (defaultProps) {
		initialArray.push(defaultProps);
	}

	if (otherProps) {
		initialArray.push(Object.values(otherProps));
	}

	const result = initialArray.flat().join(' ');

	return result;
};
