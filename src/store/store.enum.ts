export enum ReducerType {
	app = 'app',
	auth = 'auth',
	user = 'user',
	data = 'data',

	favorite = 'favorite',
	info = 'info',
	categories = 'categories',
	card = 'card',
	header = 'header',
	footer = 'footer',

	home = 'home',
}

export enum LoadingStatus {
	idle = 'idle',
	loading = 'loading',
	succeeded = 'succeeded',
	failed = 'failed',
}

export enum LoadingActions {
	setLoadingStatus = 'setLoadingStatus',
	setLoadingError = 'setLoadingError',
}

export enum ReduxStatus {
	pending = 'pending',
	fulfilled = 'fulfilled',
	rejected = 'rejected',
}

export enum ActionType {
	authentication = 'authentication',
}

export enum DataActionType {
	setCards = 'setCards',
	statusCards = 'statusCards',
}

export enum ThunkType {
	login = 'login',
	logout = 'logout',
}
