export enum AxiosAPI {
	DataCardAll = '/api/data/card/all',
	DataCardSection = 'api/data/card/section',
	DataCardNovelties = 'api/data/card/?section=novelties',
	DataCardCollections = 'api/data/card/?section=collections',
	DataCardSale = 'api/data/card/?section=sale',
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
