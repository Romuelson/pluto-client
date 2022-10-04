import { TakeSpecialInfo, TakeSpecialInfoLoading } from './home.selector.type';

export const takeSpecialInfo: TakeSpecialInfo = (state) =>
	state.home.special.info.list || [];

export const takeSpecialLoading: TakeSpecialInfoLoading = (state) =>
	state.home.special.info.loading;
