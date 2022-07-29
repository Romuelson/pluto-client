export enum CardAPI {
	getCardId = '/api/card/id',
	getCardAll = '/api/card/all',
	getCardSection = '/api/card/section',
}

export const enum CardPrefixType {
	getCardId = 'card/getCardId',
	getCardAll = 'card/getCardAll',
	getCardSection = 'card/getCardSection',

	getCardNovelties = 'getCardNovelties',
	getCardCollections = 'getCardCollections',
	getCardSale = 'getCardSale',
}

export const enum CardActions {
	setLoadingStatus = 'setLoadingStatus',
	setLoadingError = 'setLoadingError',
}
