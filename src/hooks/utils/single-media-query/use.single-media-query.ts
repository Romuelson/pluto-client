import { useMediaQuery } from 'react-responsive';

export const useSingleMediaQuery = () => {
	const MediaQueryList = {
		isMinLow: useMediaQuery({ minWidth: 320 }),
		isMaxLow: useMediaQuery({ maxWidth: 319.98 }),

		isMinSwitchLow: useMediaQuery({ minWidth: 640 }),
		isMaxSwitchLow: useMediaQuery({ maxWidth: 639.98 }),

		isMinSwitchMedium: useMediaQuery({ minWidth: 1156 }),
		isMaxSwitchMedium: useMediaQuery({ maxWidth: 1155.98 }),

		isUnionSwitchMedium: useMediaQuery({
			minWidth: 1156,
			maxWidth: 1365.98,
		}),

		isMinMedium: useMediaQuery({ minWidth: 1366 }),
		isMaxMedium: useMediaQuery({ maxWidth: 1365.98 }),

		isMinHigh: useMediaQuery({ minWidth: 1920 }),
		isMaxHigh: useMediaQuery({ maxWidth: 1919.98 }),

		isMinUltra: useMediaQuery({ minWidth: 2560 }),
		isMaxUltra: useMediaQuery({ maxWidth: 2559.98 }),

		isMinExtreme: useMediaQuery({ minWidth: 3840 }),
		isMaxExtreme: useMediaQuery({ maxWidth: 3839.98 }),
	};

	return MediaQueryList;
};
