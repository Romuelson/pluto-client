export enum SizeMediaQuery {
	minLow = 320,
	maxLow = 319.98,

	minMedium = 1366,
	maxMedium = 1365.98,

	maxHigh = 1920,
	minHigh = 1919.98,

	minUltra = 2560,
	maxUltra = 2559.98,

	minExtreme = 3840,
	maxExtreme = 3839.98,
}

export enum RuleMediaQuery {
	low = '(min-width: 320px) and (max-width: 1365px)',
	medium = '(min-width: 1366px) and (max-width: 1919px)',
	high = '(min-width: 1920px) and (max-width: 2559px)',
	ultra = '(min-width: 2560px) and (max-width: 3839px)',
	extreme = '(min-width: 3840px)',
}
