// const AUTH_TOKEN_KEY_NAME = 'x-access-token';

/* Store */
import { ReducerType } from '../../store/store.enum';

import { AuthLoginData } from '../../types/auth/auth.type';

// export const getToken = (): Token => {
// 	const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
// 	return token ?? '';
// };

export const saveToken = (authLoginData: AuthLoginData): void =>
	localStorage.setItem(ReducerType.user, JSON.stringify(authLoginData.data));

// export const dropToken = (): void =>
// 	localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
