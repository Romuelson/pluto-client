import { Loading } from '@store/store.type';
import { SpecialListInfo } from '@components/UI/organisms/special/special.type';

export type HomeSpecialInfo = {
	list: SpecialListInfo;
	loading: Loading;
};

export type HomeSpecial = {
	info: HomeSpecialInfo;
};

export type HomeState = {
	special: HomeSpecial;
};
