import { Loading } from '@store/store.type';

import { CategoriesDataEnum } from '@components/UI/organisms/categories/categories.enum';

export type CategoriesObjectData = {
	id: string;
	title: string;
	link: string;
};

export type CategoriesListData = CategoriesObjectData[];

export type ResponseDataCategories = {
	data: CategoriesListData;
	type: CategoriesDataEnum | string;
};

export type CategoriesResponce = {
	loading: Loading;
	data: CategoriesListData;
};

export type CategoriesSlice = {
	responce: {
		[key in CategoriesDataEnum]: CategoriesResponce;
	};
};
