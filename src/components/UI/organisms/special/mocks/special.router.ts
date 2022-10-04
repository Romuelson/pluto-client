import { rest } from 'msw';

import { SpecialAPI } from '@store/slices/components/special/special.enum';

import { SpecialPostInfo } from './special.type';
import SpecialController from './special.controller';

export const specialRouter = [
	rest.post<SpecialPostInfo>(SpecialAPI.getSpecialInfo, (req, res, ctx) =>
		SpecialController.getInfo(
			{ recipient: req.body.recipient },
			{ req, res, ctx }
		)
	),
];
