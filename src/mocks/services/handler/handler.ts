import { rest } from 'msw';

/* Services */
import { AxiosAPI } from '../../../services/services.enum';

/* Request Mock Data */
import { getBrasCards } from '../../data/product-card/response/get-bras-cards';
import { getUnderpantsCards } from '../../data/product-card/response/get-underpants-cards';

/* Types */
import { IProductCard } from '../../../types/data/product-card/product-card.type';

/* Enums */
import { ELabelSections } from '../../../types/data/product-card/product-card.enum';

export const handlers = [
	rest.get(AxiosAPI.DataCardAll, (req, res, ctx) => {
		const cardList = getBrasCards.concat(getUnderpantsCards);

		return res(ctx.delay(400), ctx.status(200), ctx.json(cardList));
	}),
	rest.get(AxiosAPI.DataCardNovelties, (req, res, ctx) => {
		const cardList = getBrasCards.concat(getUnderpantsCards);

		const findNoveltes = (item: ELabelSections) =>
			item === ELabelSections.new;

		const filterNoveltes = (item: IProductCard) =>
			item.properties.labelList.sections.find(findNoveltes);

		const cardNovelties = cardList.filter(filterNoveltes);

		/* Произвести декомпозицию model, service, controller для product-card */

		return res(ctx.delay(400), ctx.status(200), ctx.json(cardNovelties));
	}),
	rest.get(AxiosAPI.DataCardCollections, (req, res, ctx) => {
		const cards = getBrasCards.concat(getUnderpantsCards);

		return res(ctx.delay(400), ctx.status(200), ctx.json(cards));
	}),
	rest.get(AxiosAPI.DataCardSale, (req, res, ctx) => {
		const cards = getBrasCards.concat(getUnderpantsCards);

		return res(ctx.delay(400), ctx.status(200), ctx.json(cards));
	}),
];
