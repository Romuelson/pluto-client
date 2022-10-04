import Text from '@components/UI/atoms/text/text.comp';
import Button from '@components/UI/molecules/button/button.comp';

import {
	TextAlignEnum,
	TextAsEnum,
	TextFontEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

import {
	ButtonSizeEnum,
	ButtonViewEnum,
} from '@components/UI/molecules/button/button.enum';

import { ItemCarouselProps } from './item-carousel.type';

function ItemCarousel({ item }: ItemCarouselProps) {
	return (
		<>
			<Text
				as={TextAsEnum.span}
				size={TextSizeEnum.XLXXL}
				font={TextFontEnum.ForumRegular}
				textAlign={TextAlignEnum.center}
				lineHeight={TextLineHeightEnum.ML}
			>
				{item.title}
			</Text>
			<Button view={ButtonViewEnum.brand} size={ButtonSizeEnum.L}>
				<Text
					as={TextAsEnum.span}
					font={TextFontEnum.TypeTypeNorms}
					size={TextSizeEnum.M}
				>
					{item.linkTitle}
				</Text>
			</Button>
		</>
	);
}

export default ItemCarousel;
