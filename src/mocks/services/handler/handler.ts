import { rest } from 'msw';
import { nanoid } from '@reduxjs/toolkit';

// import { HandlerRouteApp } from './handler.enum';

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
];
