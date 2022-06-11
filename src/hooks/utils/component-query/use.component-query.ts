export {};

// import { useMediaQuery } from 'react-responsive';

// function useComponentQuery() {
// 	const UltraLow = ({ children }: { children: JSX.Element }) => {
// 		const isDesktop = useMediaQuery({ maxWidth: 319.98 });
// 		return isDesktop ? children : null;
// 	};

// 	const Low = ({ children }: { children: JSX.Element }) => {
// 		const isDesktop = useMediaQuery({ minWidth: 320, maxWidth: 1155.98 });
// 		return isDesktop ? children : null;
// 	};

// 	const MaxLow = ({ children }: { children: JSX.Element }) => {
// 		const isDesktop = useMediaQuery({ maxWidth: 1155.98 });
// 		return isDesktop ? children : null;
// 	};

// 	const SwitchMeduim = ({ children }: { children: JSX.Element }) => {
// 		const isDesktop = useMediaQuery({ minWidth: 1156, maxWidth: 1365.98 });
// 		return isDesktop ? children : null;
// 	};

// 	const MaxMedium = ({ children }: { children: JSX.Element }) => {
// 		const isDesktop = useMediaQuery({ maxWidth: 1365.98 });
// 		return isDesktop ? children : null;
// 	};

// 	const Medium = ({ children }: { children: JSX.Element }) => {
// 		const isTablet = useMediaQuery({ minWidth: 1366, maxWidth: 1919.98 });
// 		return isTablet ? children : null;
// 	};

// 	const High = ({ children }: { children: JSX.Element }) => {
// 		const isMobile = useMediaQuery({ minWidth: 1920, maxWidth: 2559.98 });
// 		return isMobile ? children : null;
// 	};

// 	const Ultra = ({ children }: { children: JSX.Element }) => {
// 		const isNotMobile = useMediaQuery({
// 			minWidth: 2560,
// 			maxWidth: 3839.98,
// 		});
// 		return isNotMobile ? children : null;
// 	};

// 	const Extreme = ({ children }: { children: JSX.Element }) => {
// 		const isNotMobile = useMediaQuery({ minWidth: 3840 });
// 		return isNotMobile ? children : null;
// 	};

// 	return {
// 		UltraLow,
// 		Low,
// 		MaxLow,
// 		SwitchMeduim,
// 		MaxMedium,
// 		Medium,
// 		High,
// 		Ultra,
// 		Extreme,
// 	};
// }

// export default useComponentQuery;
