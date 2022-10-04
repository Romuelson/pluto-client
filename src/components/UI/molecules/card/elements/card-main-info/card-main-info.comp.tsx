import Text from '@components/UI/atoms/text/text.comp';

import {
	TextAsEnum,
	TextSizeEnum,
	TextFontEnum,
	TextLineHeightEnum,
	TextTransformEnum,
	TextColorEnum,
} from '@components/UI/atoms/text/text.enum';

import { CardMainInfoProps } from '../../card.type';

function CardMainInfo(props: CardMainInfoProps) {
	const { className, title, price, page, section } = props;

	return (
		<div className={className}>
			{!page || (
				<Text
					as={TextAsEnum.span}
					className="text__section"
					color={TextColorEnum.Brand}
					textTransform={TextTransformEnum.uppercase}
					size={TextSizeEnum.S}
				>
					{section}
				</Text>
			)}
			<Text
				as={page ? TextAsEnum.h2 : TextAsEnum.p}
				className="text__title title"
				font={TextFontEnum.ForumRegular}
				size={page ? TextSizeEnum.XXL : TextSizeEnum.S}
				lineHeight={
					page ? TextLineHeightEnum.L : TextLineHeightEnum.XXS
				}
			>
				{title}
			</Text>
			<Text
				as={TextAsEnum.span}
				className="text__price"
				font={TextFontEnum.TypeTypeNorms}
				size={page ? TextSizeEnum.ML : TextSizeEnum.XS}
				lineHeight={page ? TextLineHeightEnum.S : TextLineHeightEnum.LX}
			>
				{`${price} ₽`}
			</Text>
		</div>
	);
}

export default CardMainInfo;
