/* Core */
import { configureStore } from '@reduxjs/toolkit';

/* Services */
import { createAxiosAPI } from '../services/api/axios/axios.api';

/* Reducers */
import { rootReducer } from './reducers/root/root.reducer';

const api = createAxiosAPI();

export const createStore = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: api,
				},
			}),
	});
};

export const store = createStore();

export type AppStore = ReturnType<typeof store.getState>;
// export type AppDispatch = AppStore['dispatch'];
export type AppDispatch = typeof store.dispatch;
export type AppReducer = ReturnType<typeof rootReducer>;
