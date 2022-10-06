import { useMediaQuery } from 'react-responsive';

export const useNotFoundMediaQuery = () => {
	return {
		S: useMediaQuery({ maxWidth: 584.98 }),
		M: useMediaQuery({ minWidth: 1024 }),
	};
};

export type UseNotFoundMediaQuery = ReturnType<typeof useNotFoundMediaQuery>;
