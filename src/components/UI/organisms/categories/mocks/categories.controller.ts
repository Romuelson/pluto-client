import {
	DefaultBodyType,
	PathParams,
	ResponseComposition,
	RestContext,
	RestRequest,
} from 'msw';

import CategoriesService from './categories.service';
import { CategoriesDataEnum } from '../categories.enum';

class CategoriesController {
	getList(
		req: RestRequest<never, PathParams>,
		res: ResponseComposition<DefaultBodyType>,
		ctx: RestContext
	) {
		const section = req.url.searchParams.get(
			'section'
		) as CategoriesDataEnum;

		const data = CategoriesService.getData(section);

		return res(ctx.delay(200), ctx.status(200), ctx.json(data));
	}
}

export default new CategoriesController();
