import { AppStore } from '../../../store';

export const takeListAddress = (state: AppStore) => state.info.listAddress;
export const takeActiveButton = (state: AppStore) => state.info.activeButton;
