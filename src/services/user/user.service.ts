import { ReducerType } from '../../store/store.enum';
import { AccessToken } from '../../types/token/token.type';

export const getUser = (): AccessToken => {
	const user = localStorage.getItem(ReducerType.user);
	return user ?? '';
};
