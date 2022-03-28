import axios from 'axios';

const REQUEST_TIMEOUT = 5000;
const PORT = process.env.APP_PORT || 1488;

const BACKEND_URL = 'http://localhost';
const BASE_URL = `${BACKEND_URL}:${PORT}/`;

export const createAxiosAPI = () => {
	const api = axios.create({
		baseURL: BASE_URL,
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
