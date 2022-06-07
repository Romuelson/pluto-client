export const otherPropsToString = (
	otherProps: object,
	defaultProps?: string[],
	className?: string
): string => {
	const initialArray = [];

	const values: string[] = Object.values(otherProps);

	if (className) {
		initialArray.push(className);
	}

	if (defaultProps) {
		initialArray.push(defaultProps);
	}

	initialArray.push(values);

	const result = initialArray.flat().join(' ');

	return result;
};
