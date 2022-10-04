import { IMockServiceWorker } from '../../../../../types/services/msw/msw.type';
import { SpecialGetInfo } from './mock/special.mock.type';

import SpecialService from './special.service';

class SpecialController {
	getInfo<T>(
		{ recipient }: SpecialGetInfo,
		{ req, res, ctx }: IMockServiceWorker<T>
	) {
		return res(
			ctx.delay(400),
			ctx.status(200),
			ctx.json(SpecialService.getInfo({ recipient }))
		);
	}
}

export default new SpecialController();
