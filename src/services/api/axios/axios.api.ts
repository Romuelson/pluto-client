import axios from 'axios';

const REQUEST_TIMEOUT = 5000;
const PORT = process.env.APP_PORT || 80;

const BACKEND_URL =
	process.env.BACKEND_URL || 'https://pluto-score.herokuapp.com';
const BASE_URL = `${BACKEND_URL}:${PORT}`;

export const createAxiosAPI = () => {
	const api = axios.create({
		baseURL: BACKEND_URL,
		timeout: REQUEST_TIMEOUT,
	});

	// api.interceptors.request.use((config: AxiosRequestConfig) => {
	// 	const token = getToken();

	// 	if (!config.headers) {
	// 		config.headers = {};
	// 	}

	// 	if (token) {
	// 		config.headers['x-access-token'] = token;
	// 	}

	// 	return config;
	// });

	return api;
};
