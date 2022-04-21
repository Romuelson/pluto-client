/* Store */
import { AppStore } from '../../store';
import { ReducerType } from '../../store.enum';

/* Types */
import { IProductCard } from '../../../types/data/product-card/product-card.type';

export const getCards = (state: AppStore): IProductCard[] =>
	state[ReducerType.data]?.cardList || [];
