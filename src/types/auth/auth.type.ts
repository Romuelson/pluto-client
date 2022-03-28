import { AccessToken } from '../token/token.type';

export type AuthLoginForm = {
	login: string;
	password: string;
};

export type AuthLoginData = {
	data: {
		accessToken: AccessToken;
	};
};

export type AuthErrorMessage = {
	errorMessage: string;
};
