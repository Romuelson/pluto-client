/* Store */
import { AppStore } from '../../store';
import { ReducerType } from '../../store.enum';

/* Types */
import { ProductCardList } from '../../../types/data/product-card/product-card.type';

export const getAllCards = (state: AppStore): ProductCardList =>
	state[ReducerType.data]?.cardList || [];

export const getNoveltiesCards = (state: AppStore): ProductCardList =>
	state[ReducerType.data]?.cardNovelties || [];

export const getCollectionsCards = (state: AppStore): ProductCardList =>
	state[ReducerType.data]?.cardCollections || [];

export const getSaleCards = (state: AppStore): ProductCardList =>
	state[ReducerType.data]?.cardSale || [];
