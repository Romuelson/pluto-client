import { UseHomeMediaQuery } from '@pages/home/use.home-media-query';
import { SpecialListInfo } from '@components/UI/organisms/special/special.type';

export type ViewHomeSpecialArgs = {
	className: string;
	info: SpecialListInfo;
	mediaQuery: UseHomeMediaQuery;
};

export type UseHomeSpecialViewProps = ViewHomeSpecialArgs;

export type UseHomeSpecialProps = {
	mediaQuery: UseHomeMediaQuery;
};
