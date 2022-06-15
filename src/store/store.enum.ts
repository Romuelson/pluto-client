export enum ReducerType {
	app = 'app',
	user = 'user',
	auth = 'auth',
	data = 'data',
	favorite = 'favorite',
	info = 'info',
	categories = 'categories',
}

export enum LoadingStatus {
	idle = 'idle',
	loading = 'loading',
	succeeded = 'succeeded',
	failed = 'failed',
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
