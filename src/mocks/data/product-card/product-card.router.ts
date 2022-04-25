import { rest } from 'msw';

import { AxiosAPI } from '../../../services/services.enum';

import ProductCardController from './product-card.controller';

const API = AxiosAPI;

export const productCardRouter = [
	rest.get(API.DataCardAll, (req, res, ctx) =>
		ProductCardController.getAllCard(req, res, ctx)
	),

	rest.get(API.DataCardSection, (req, res, ctx) =>
		ProductCardController.getSectionsCard(req, res, ctx)
	),
];
