import { ActionReducerMapBuilder } from '@reduxjs/toolkit/dist/mapBuilders';

import { LoadingStatus } from '@store/store.enum';

import { InfoRecipient } from './info.type';
import { getListAddressThunk } from './info.thunk';

type InfoBuilderProp = ActionReducerMapBuilder<InfoRecipient>;
type InfoBuilder = (builder: InfoBuilderProp) => void;

export const infoBuilder: InfoBuilder = (builder) => {
	builder
		.addCase(getListAddressThunk.pending, (state, action) => {
			const { recipient } = action.meta.arg;
			const recipientState = state[recipient];

			if (recipientState) {
				recipientState.loading.status = LoadingStatus.loading;
			}
		})
		.addCase(getListAddressThunk.fulfilled, (state, action) => {
			const { recipient } = action.meta.arg;
			const recipientState = state[recipient];

			if (recipientState) {
				recipientState.loading.status = LoadingStatus.succeeded;
				recipientState.listAddress = action.payload;
			}
		})
		.addCase(getListAddressThunk.rejected, (state, action) => {
			const { recipient } = action.meta.arg;
			const recipientState = state[recipient];

			if (recipientState) {
				recipientState.loading.status = LoadingStatus.failed;
				recipientState.loading.error = action.error.message;
			}
		});
};
