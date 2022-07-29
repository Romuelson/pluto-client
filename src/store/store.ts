import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

import { createAxiosAPI } from '@services/api/axios/axios.api';
import { rootReducer } from './reducers/root/root.reducer';

const api = createAxiosAPI();

enableMapSet();

export const createStore = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: api,
				},
				serializableCheck: false,
			}),
	});
};

export const store = createStore();

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppReducer = ReturnType<typeof rootReducer>;
