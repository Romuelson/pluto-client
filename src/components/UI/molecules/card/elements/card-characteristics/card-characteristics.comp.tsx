import Text from '@components/UI/atoms/text/text.comp';

import {
	TextAsEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

import { CardCharacteristicsEnum, CardDesctiptionEnum } from '../../card.enum';

export type CardCharacteristicsProps = {
	className: string;
	brand: string;
	manufacturer: string;
};

function CardCharacteristics(props: CardCharacteristicsProps) {
	const { className, brand, manufacturer } = props;

	const textBrand = `${CardCharacteristicsEnum.brand}: ${brand}`;
	const textManufacturer = `${CardCharacteristicsEnum.manufacturer}: ${manufacturer}`;

	return (
		<div className={className}>
			<Text
				as={TextAsEnum.h3}
				className="card__subtitle"
				size={TextSizeEnum.SM}
				lineHeight={TextLineHeightEnum.XS}
			>
				{CardDesctiptionEnum.characteristics}
			</Text>
			<Text
				as={TextAsEnum.p}
				className="card__paragraph"
				lineHeight={TextLineHeightEnum.XS}
			>
				{textBrand}
			</Text>
			<Text
				as={TextAsEnum.p}
				className="card__paragraph"
				lineHeight={TextLineHeightEnum.XS}
			>
				{textManufacturer}
			</Text>
		</div>
	);
}

export default CardCharacteristics;
