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
	navigationState = 'navigationState',
}

export enum DataActionType {
	setCards = 'setCards',
	statusCards = 'statusCards',
}

export enum ThunkType {
	login = 'login',
	logout = 'logout',
}
