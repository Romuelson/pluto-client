/* Modules */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Types */
import { InfoSlice, InfoListAddress } from './info.type';

/* Constants */
import { ReducerType } from '../../../store.enum';
import { InfoActions } from './info.enum';

const initialState: InfoSlice = {
	listAddress: [],
	activeButton: 0,
};

export const infoSlice = createSlice({
	name: ReducerType.info,
	initialState,
	reducers: {
		[InfoActions.setDataInfo]: (
			state,
			action: PayloadAction<InfoListAddress>
		) => {
			state.listAddress = action.payload;
		},
		[InfoActions.setActiveButton]: (
			state,
			action: PayloadAction<number>
		) => {
			state.activeButton = action.payload;
		},
	},
});

export const { setDataInfo, setActiveIndex } = infoSlice.actions;
