import { useMediaQuery } from 'react-responsive';

export const useHomeMediaQuery = () => {
	return {
		S: useMediaQuery({ maxWidth: 584.98 }),
		M: useMediaQuery({ minWidth: 1024 }),
	};
};

export type UseHomeMediaQuery = ReturnType<typeof useHomeMediaQuery>;
