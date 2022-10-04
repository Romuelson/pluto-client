/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useCardDispatch } from '../../hooks/use.card.dispatch';

import {
	CardColorProps,
	CardFieldsetConfig,
	CardFieldsetItem,
} from '../../card.type';
import { CardOptionsLegendEnum } from '../../card.enum';

import CardFieldset from '../card__fieldset/card-fieldset.comp';
import { VendorList } from '../../mocks/card.mock.type';
import { useCardSelector } from '../../hooks/use.card.selector';

function CardColor({ className, config, display }: CardColorProps) {
	const { init, current } = config;
	const { page } = display;

	const dispatch = useCardDispatch();
	const selector = useCardSelector();

	const changeCardHandler = (evt: React.SyntheticEvent<EventTarget>) => {
		const target = evt.target as Element;

		const targetId = target.getAttribute('data-id');
		const targetSection =
			target.getAttribute('data-section') || current.section;

		if (targetId && targetId !== current.id) {
			dispatch.setActiveId({
				id: init.id,
				section: targetSection,
				activeId: targetId,
			});
		}
	};

	const createFieldsetList = (list: VendorList[]): CardFieldsetItem[] =>
		list.map((item) => ({
			key: item.id,
			value: item.color.label,
			section: item.section,
			labelStyle: { backgroundColor: item.color.rgb },
		}));

	const createInitColorList = createFieldsetList([
		{ id: init.id, section: init.section, color: init.colorList.current },
	]);

	const createColorList = createFieldsetList(
		init.colorList.vendorList.map((vendor) => vendor)
	);

	const createFieldsetConfig: CardFieldsetConfig = {
		id: init.id,
		legend: [
			{
				className: 'legend__title title',
				children: CardOptionsLegendEnum.selectColor,
			},
			{
				className: 'legend__description description',
				children: current.colorList.current.label,
			},
		],
		list: {
			name: 'card__fieldset-color',
			values: [...createInitColorList, ...createColorList],
		},
		keyChecked: selector.activeId({ id: init.id }),
		page,
	};

	return (
		<CardFieldset
			className={className}
			config={createFieldsetConfig}
			display={{ disableLabel: false }}
			fieldsetClickHandler={(evt: React.SyntheticEvent<EventTarget>) =>
				changeCardHandler(evt)
			}
		/>
	);
}

export default CardColor;
