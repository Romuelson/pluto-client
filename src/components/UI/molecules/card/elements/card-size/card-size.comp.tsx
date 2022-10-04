import { CardOptionsLegendEnum } from '../../card.enum';
import { CardFieldsetConfig } from '../../card.type';
import { useCardDispatch } from '../../hooks/use.card.dispatch';
import { CardSizeList, ProductCardId } from '../../mocks/card.mock.type';
import CardFieldset from '../card__fieldset/card-fieldset.comp';

export type CardSizeConfig = {
	id: ProductCardId;
	sizeList: CardSizeList;
};

export type CardSizeDisplay = {
	page: boolean;
};

export type CardFieldsetDisplay = {
	disableLabel: boolean;
};

export type CardSizeProps = {
	className: string;
	config: CardSizeConfig;
	display: CardSizeDisplay;
};

function CardSize({ className, config, display }: CardSizeProps) {
	const { id, sizeList } = config;
	const { page } = display;

	const dispatch = useCardDispatch();

	const changeCardSize = (evt: React.SyntheticEvent<EventTarget>) => {
		const target = evt.target as Element;

		const targetId = target.getAttribute('data-id');
		const targetAmount = target.getAttribute('data-amount');

		if (targetId && targetAmount) {
			dispatch.setActiveSize({
				id,
				activeSize: { barcode: targetId, amount: targetAmount },
			});
		}
	};

	const createFieldsetList = Object.entries(sizeList).map((item) => ({
		key: item[1].barcode,
		value: item[0],
		amount: item[1].amount,
	}));

	const createFieldsetConfig: CardFieldsetConfig = {
		id,
		legend: [
			{
				className: 'legend__title title',
				children: CardOptionsLegendEnum.selectSize,
			},
		],
		list: {
			name: 'card__fieldset-size',
			values: createFieldsetList,
		},
		keyChecked: '',
		page,
	};

	const createFieldsetDisplay: CardFieldsetDisplay = { disableLabel: true };

	return (
		<CardFieldset
			className={className}
			config={createFieldsetConfig}
			display={createFieldsetDisplay}
			fieldsetClickHandler={(evt: React.SyntheticEvent<EventTarget>) =>
				changeCardSize(evt)
			}
		/>
	);
}

export default CardSize;
