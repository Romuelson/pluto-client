import Text from '@components/UI/atoms/text/text.comp';

import {
	TextAsEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

import { CardDesctiptionEnum } from '../../card.enum';

export type CardDescriptionProps = {
	className: string;
	description: string;
};

function CardDescription({ className, description }: CardDescriptionProps) {
	return (
		<div className={className}>
			<Text
				as={TextAsEnum.h3}
				className="card__subtitle"
				size={TextSizeEnum.SM}
				lineHeight={TextLineHeightEnum.XS}
			>
				{CardDesctiptionEnum.description}
			</Text>
			<Text
				as={TextAsEnum.p}
				className="card__paragraph"
				lineHeight={TextLineHeightEnum.XS}
			>
				{description}
			</Text>
		</div>
	);
}

export default CardDescription;
