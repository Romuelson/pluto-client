export enum ReducerType {
	app = 'app',
	user = 'user',
	auth = 'auth',
	data = 'data',
	favorite = 'favorite',
}

export enum ActionType {
	authentication = 'authentication',
	navigationStatus = 'navigationStatus',
}

export enum DataActionType {
	setCards = 'setCards',
}

export enum ThunkType {
	login = 'login',
	logout = 'logout',
}
