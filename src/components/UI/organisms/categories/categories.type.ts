import { CategoriesListData } from '@store/slices/components/categories/categories.type';
import { CategoriesDataEnum, CategoriesViewEnum } from './categories.enum';

export type CategoriesProps = {
	children?: React.ReactNode;
	className?: string;
	view?: CategoriesViewEnum;
	data?: CategoriesDataEnum;
};

export type CategoriesListProps = {
	data: CategoriesListData;
};

export type UseCategoriesProps = {
	data: CategoriesDataEnum;
};
