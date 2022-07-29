import Text from '@components/UI/atoms/text/text.comp';
import {
	TextAsEnum,
	TextFontEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

import { CardContextProps } from '../../card.type';

function CardContext(props: CardContextProps) {
	const { className, title, price } = props;

	return (
		<div className={className}>
			<Text
				as={TextAsEnum.p}
				className="text__title title"
				font={TextFontEnum.ForumRegular}
				size={TextSizeEnum.S}
				lineHeight={TextLineHeightEnum.XXS}
			>
				{title}
			</Text>

			<Text
				as={TextAsEnum.span}
				font={TextFontEnum.TypeTypeNorms}
				size={TextSizeEnum.XS}
				lineHeight={TextLineHeightEnum.LX}
			>
				{`${price} ₽`}
			</Text>
		</div>
	);
}

export default CardContext;
