import {
	DefaultBodyType,
	PathParams,
	ResponseComposition,
	RestContext,
	RestRequest,
} from 'msw';

import InfoService from './info.service';

class InfoController {
	getListAddress(
		req: RestRequest<never, PathParams>,
		res: ResponseComposition<DefaultBodyType>,
		ctx: RestContext
	) {
		const data = InfoService.getData();

		return res(ctx.delay(200), ctx.status(200), ctx.json(data));
	}
}

export default new InfoController();
