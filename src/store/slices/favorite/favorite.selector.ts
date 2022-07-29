import { AppStore } from '@store/store';

export const takeFavoriteStatus = (state: AppStore, id: string) =>
	state.favorite.cards.get(id) || false;
