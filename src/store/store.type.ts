import { AppStore } from './store';
import { LoadingStatus } from './store.enum';

export type SelectorState<T> = [state: AppStore, props: T];

export type LoadingErrorStatus = string | undefined | unknown;

export type Loading = {
	status: LoadingStatus;
	error: LoadingErrorStatus;
};
