import { rest } from 'msw';

import { CardAPI } from '../../../../../store/slices/components/card/card.enum';

import CardController from './card.controller';

import { ECardServiceType } from './card.mock.enum';
import { CardPostREQBodyId } from './card.mock.type';

export const cardRouter = [
	rest.post<CardPostREQBodyId>(CardAPI.getCardId, (req, res, ctx) =>
		CardController.getId({ id: req.body.id }, { req, res, ctx })
	),

	rest.get(CardAPI.getCardAll, (req, res, ctx) =>
		CardController.getAll(
			{ limit: req.url.searchParams.get('limit') },
			{ req, res, ctx }
		)
	),

	rest.get(CardAPI.getCardSection, (req, res, ctx) =>
		CardController.getSection(
			{ section: req.url.searchParams.get(ECardServiceType.section) },
			{ req, res, ctx }
		)
	),
];
