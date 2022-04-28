export enum DataPrefixType {
	getCardAll = 'data/getCardAllThunk',
	getCardNovelties = 'data/getCardNoveltiesThunk',
	getCardCollections = 'data/getCardCollectionsThunk',
	getCardSale = 'data/getCardSaleThunk',
}

export enum DataStatusType {
	pending = 'Pending',
	fulfilled = 'Fulfilled',
	rejected = 'Rejected',
	sleeping = 'Sleeping',
}
