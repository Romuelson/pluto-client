import { rest } from 'msw';

import { CategoriesAxiosAPI } from '../../../../../store/slices/components/categories/categories.enum';

import CategoriesController from './categories.controller';

export const categoriesRouter = [
	rest.get(CategoriesAxiosAPI.requestCategories, (req, res, ctx) =>
		CategoriesController.getList(req, res, ctx)
	),
];
