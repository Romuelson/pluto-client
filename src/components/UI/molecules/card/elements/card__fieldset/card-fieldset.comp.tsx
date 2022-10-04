/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { createElement } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import Text from '@components/UI/atoms/text/text.comp';

import {
	TextAsEnum,
	TextDisplayEnum,
	TextLineHeightEnum,
	TextSizeEnum,
	TextWeightEnum,
} from '@components/UI/atoms/text/text.enum';

import { CardFieldsetProps, CraeteLegendContext } from '../../card.type';

function CardFieldset({
	className,
	config,
	display,
	fieldsetClickHandler,
}: CardFieldsetProps) {
	const { id, legend, list, keyChecked, page } = config;

	const createItems = () =>
		list.values.map((item, index) => {
			const { key, value, section, labelStyle, amount } = item;
			const isAmount = Number(amount) !== 0;

			return (
				<li className="list__item item" key={key}>
					<input
						className="item__input input"
						type="radio"
						value={value}
						id={key}
						name={list.name}
						defaultChecked={keyChecked === key}
						disabled={!isAmount}
					/>
					<label
						className="item__label label"
						htmlFor={key}
						style={labelStyle}
						data-id={key}
						data-index={index}
						data-section={section}
						data-amount={amount}
						onClick={(evt) => isAmount || evt.stopPropagation()}
					>
						{!display.disableLabel || value}
					</label>
				</li>
			);
		});

	const createLegendConfig = {
		as: TextAsEnum.span,
		size: TextSizeEnum.SM,
		weight: TextWeightEnum.Bold,
		display: TextDisplayEnum.inline,
		lineHeight: TextLineHeightEnum.XS,
	};

	const craeteLegendContext: CraeteLegendContext = (args) =>
		createElement(Text, { ...args, ...createLegendConfig, key: nanoid() });

	const createLegendList = () => legend.map(craeteLegendContext);

	return (
		<fieldset
			className={className}
			onClick={(evt) => fieldsetClickHandler(evt)}
		>
			{!page || (
				<legend className="feature__legend legend">
					{createLegendList()}
				</legend>
			)}
			<ul className="feature__list list">{createItems()}</ul>
		</fieldset>
	);
}

export default CardFieldset;
