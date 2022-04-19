/* Store */
import { AppStore } from '../../store';
import { ReducerType } from '../../store.enum';

/* Types */
import { CardsList } from '../../../mocks/data/card/card';

export const getCards = (state: AppStore): CardsList =>
	state[ReducerType.data]?.cards || [];
