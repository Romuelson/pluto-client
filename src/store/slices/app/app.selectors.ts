import { AppStore } from '../../store';
import { NavigationStatus } from '../../../types/app/app.type';
import { ReducerType } from '../../store.enum';

export const getNavigationStatus = (state: AppStore): NavigationStatus =>
	state[ReducerType.app].navigationStatus;
