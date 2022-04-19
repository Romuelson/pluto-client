import { rest } from 'msw';
import { nanoid } from '@reduxjs/toolkit';

// import { HandlerRouteApp } from './handler.enum';

/* Mocks - Card */
import getMockCards from '../../data/card/card';

const accessToken = nanoid();

export const handlers = [
	rest.post('login', (req, res, ctx) => {
		return res(
			ctx.delay(400),
			ctx.status(200),
			ctx.json({
				accessToken,
			})
		);
	}),

	rest.get('users', (req, res, ctx) => {
		return res(
			ctx.delay(400),
			ctx.status(200),
			ctx.json({
				accessToken,
			})
		);
	}),

	rest.get('cards', (req, res, ctx) => {
		return res(ctx.delay(400), ctx.status(200), ctx.json(getMockCards()));
	}),
];
