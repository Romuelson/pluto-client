/* Store */
import { AppStore } from '../../store';

/* Types */
// import { ProductCardList } from '../../../types/data/product-card/product-card.type';
// import { ELabelSections } from '../../../types/data/product-card/product-card.enum';
// import { DataStatusType } from './data.enum';

// export const takeCardsType = (
// 	state: AppStore,
// 	type?: ELabelSections
// ): ProductCardList => {
// 	let result;

// 	switch (type) {
// 		case ELabelSections.novelties:
// 			result = state.data?.cards.novelties.data || [];

// 			break;
// 		case ELabelSections.collections:
// 			result = state.data?.cards.collections.data || [];

// 			break;
// 		case ELabelSections.sale:
// 			result = state.data?.cards.sale.data || [];

// 			break;
// 		default:
// 			result = state.data?.cards.all.data || [];

// 			break;
// 	}

// 	return result;
// };

// export const takeCardsStatus = (
// 	state: AppStore,
// 	type?: ELabelSections
// ): DataStatusType => {
// 	let result;

// 	switch (type) {
// 		case ELabelSections.novelties:
// 			result =
// 				state.data?.cards.novelties.isLoading ||
// 				DataStatusType.sleeping;

// 			break;
// 		case ELabelSections.collections:
// 			result =
// 				state.data?.cards.collections.isLoading ||
// 				DataStatusType.sleeping;

// 			break;
// 		case ELabelSections.sale:
// 			result =
// 				state.data?.cards.sale.isLoading || DataStatusType.sleeping;

// 			break;
// 		default:
// 			result = state.data?.cards.all.isLoading || DataStatusType.sleeping;

// 			break;
// 	}

// 	return result;
// };
