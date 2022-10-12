import toolkit from '@reduxjs/toolkit';

import { SpecialListInfo } from '../../special.type';

import {
	ESpecialBackground,
	ESpecialContextDescription,
	ESpecialContextTitle,
	ESpecialControl,
} from './special.mock.enum';

export const createSpecialData = (): SpecialListInfo => {
	const { nanoid } = toolkit;

	return [
		{
			id: nanoid(),
			data: {
				context: {
					data: [
						{
							id: nanoid(),
							title: ESpecialContextTitle.sign,
							description: [
								{
									id: nanoid(),
									text: ESpecialContextDescription.signTalk,
								},
								{
									id: nanoid(),
									text: ESpecialContextDescription.signReview,
								},
							],
						},
					],
				},
				control: {
					data: [
						{
							id: nanoid(),
							title: ESpecialControl.sign,
						},
						{
							id: nanoid(),
							title: ESpecialControl.reviews,
						},
					],
				},
			},
			style: {
				backgroundImage: {
					mobile: ESpecialBackground.mobile,
					desktop: ESpecialBackground.desktop,
				},
			},
		},
	];
};

export type CreateSpecialData = ReturnType<typeof createSpecialData>;
