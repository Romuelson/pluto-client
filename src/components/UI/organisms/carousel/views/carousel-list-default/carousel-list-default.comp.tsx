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

import { CarouselListDefaultProps } from '../../carousel.type';

function CarouselListDefault(props: CarouselListDefaultProps) {
	const { title, linkTitle } = props;

	return (
		<>
			<Text
				as={TextAsEnum.span}
				size={TextSizeEnum.XLXXL}
				font={TextFontEnum.ForumRegular}
				textAlign={TextAlignEnum.center}
				lineHeight={TextLineHeightEnum.ML}
			>
				{title}
			</Text>
			<Button view={ButtonViewEnum.brand} size={ButtonSizeEnum.L}>
				<Text
					as={TextAsEnum.span}
					font={TextFontEnum.TypeTypeNorms}
					size={TextSizeEnum.M}
				>
					{linkTitle}
				</Text>
			</Button>
		</>
	);
}

export default CarouselListDefault;
