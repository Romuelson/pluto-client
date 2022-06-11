import { AppStore } from '../../store';

import { NavigationStatus } from './app.enum';

export const takeBodyOverflowHidden = (store: AppStore): boolean =>
	store.app.bodyOverflowHidden;

export const takeNavigationStatus = (state: AppStore): NavigationStatus =>
	state.app.navigationStatus;

export const takeCategoriesStatus = (store: AppStore): boolean =>
	store.app.categoriesStatus;
