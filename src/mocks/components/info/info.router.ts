import { rest } from 'msw';

import { InfoAxiosAPI } from '../../../store/slices/components/info/info.enum';

import InfoController from './info.controller';

export const infoRouter = [
	rest.get(InfoAxiosAPI.requestListAddress, (req, res, ctx) =>
		InfoController.getListAddress(req, res, ctx)
	),
];
