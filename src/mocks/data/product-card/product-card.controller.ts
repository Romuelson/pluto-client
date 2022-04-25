/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
/* eslint-disable class-methods-use-this */

import { DefaultRequestBody, PathParams, ResponseComposition, RestContext, RestRequest } from 'msw';

import ProductCardService from './product-card.service';
import ProductCardDto from './product-card.dto';

class ProductCardController {
	getAllCard(req: RestRequest<never, PathParams>, res: ResponseComposition<DefaultRequestBody>, ctx: RestContext) {
		const cards = ProductCardService.getAll();
		console.log(req.url.searchParams.get('section'));

		return res(ctx.delay(400), ctx.status(200), ctx.json(cards));
	}

	getSectionsCard(req: RestRequest<never, PathParams>, res: ResponseComposition<DefaultRequestBody>, ctx: RestContext) {
		const dto = new ProductCardDto(req);
		const cards = ProductCardService.getLabel(dto.label);

		return res(ctx.delay(400), ctx.status(200), ctx.json(cards));
	}
}

export default new ProductCardController();
