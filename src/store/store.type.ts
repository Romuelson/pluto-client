import { LoadingStatus } from './store.enum';

export type LoadingErrorStatus = string | undefined;

export type Loading = {
	status: LoadingStatus;
	error: LoadingErrorStatus;
};
