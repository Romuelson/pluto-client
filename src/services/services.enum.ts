export enum AxiosAPI {
	DataCardAll = '/api/data/card/all',
	DataCardNovelties = 'api/data/card/novelties',
	DataCardCollections = 'api/data/card/collections',
	DataCardSale = 'api/data/card/collections',
}

export enum ReduxAPI {}

export enum HttpCode {
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	NOT_FOUND = 404,
}

export enum AuthenticationStatus {
	AUTH = 'AUTH',
	NO_AUTH = 'NO_AUTH',
	UNKNOWN = 'UNKNOWN',
}
