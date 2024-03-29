import { DefaultBodyType } from 'msw';
import { IMockServiceWorker } from '../../../../../types/services/msw/msw.type';

import CardService from './card.service';
import { CardGetAll, CardGetId, CardGetSection } from './card.mock.type';

class CardController {
	getId<T extends DefaultBodyType>(
		{ id }: CardGetId,
		{ req, res, ctx }: IMockServiceWorker<T>
	) {
		return res(
			ctx.delay(400),
			ctx.status(200),
			ctx.json(CardService.getId({ id }))
		);
	}

	getAll<T extends DefaultBodyType>(
		{ limit }: CardGetAll,
		{ req, res, ctx }: IMockServiceWorker<T>
	) {
		return res(
			ctx.delay(400),
			ctx.status(200),
			ctx.json(CardService.getAll({ limit }))
		);
	}

	getSection<T extends DefaultBodyType>(
		{ section }: CardGetSection,
		{ req, res, ctx }: IMockServiceWorker<T>
	) {
		return res(
			ctx.delay(400),
			ctx.status(200),
			ctx.json(CardService.getSection({ section }))
		);
	}
}

export default new CardController();
