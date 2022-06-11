export const otherPropsToString = (
	otherProps?: object,
	defaultProps?: string[],
	className?: string
): string => {
	const initialArray = [];

	if (className) {
		initialArray.push(className);
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
