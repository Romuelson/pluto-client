import { AppStore } from '../../store';
import { ReducerType } from '../../store.enum';

import { NavigationStatus } from '../../../types/app/app.type';

export const getNavigationStatus = (state: AppStore): NavigationStatus =>
	state[ReducerType.app].isNavActive;
