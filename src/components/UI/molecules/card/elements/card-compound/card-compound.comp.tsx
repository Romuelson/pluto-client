import Text from '@components/UI/atoms/text/text.comp';

import {
	TextAsEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

import { CardCompoundEmum, CardDesctiptionEnum } from '../../card.enum';
import { CardCompound as TCardCompound } from '../../mocks/card.mock.type';

export type CardCompoundProps = {
	className: string;
	compound: TCardCompound;
};

// 46% ПЭ; 42% ПА; 12% ЭЛ; 25% ХЛ

function CardCompound({ className, compound }: CardCompoundProps) {
	const createCompoundString = () =>
		Object.entries(compound)
			.map(
				(currentCompound, index) =>
					`${currentCompound[1]} ${CardCompoundEmum[index]}`
			)
			.join('; ');

	return (
		<div className={className}>
			<Text
				as={TextAsEnum.h3}
				className="card__subtitle"
				size={TextSizeEnum.SM}
				lineHeight={TextLineHeightEnum.XS}
			>
				{CardDesctiptionEnum.compound}
			</Text>
			<Text
				as={TextAsEnum.p}
				className="card__paragraph"
				lineHeight={TextLineHeightEnum.XS}
			>
				{createCompoundString()}
			</Text>
		</div>
	);
}

export default CardCompound;
