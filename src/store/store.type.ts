import { LoadingStatus } from './store.enum';

export type LoadingErrorStatus = string | undefined | unknown;

export type Loading = {
	status: LoadingStatus;
	error: LoadingErrorStatus;
};
