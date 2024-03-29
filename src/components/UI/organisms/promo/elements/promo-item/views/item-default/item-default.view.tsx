/* eslint-disable no-nested-ternary */

import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

import Text from '@components/UI/atoms/text/text.comp';
import Link from '@components/UI/atoms/link/link.comp';

import {
	TextAsEnum,
	TextFontEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

import { ItemDefaultProps } from './item-default.type';

function ItemDefault({ item }: ItemDefaultProps) {
	const { isMinHigh, isMinMedium } = useSingleMediaQuery();

	return (
		<>
			{!isMinHigh && (
				<Text as={TextAsEnum.h4} className="promo__title title">
					{item.title}
				</Text>
			)}

			{item.description && !isMinHigh ? (
				<Text
					as={TextAsEnum.p}
					className="promo__description description"
				>
					{item.description}
				</Text>
			) : null}

			<Link to={item.link} className="promo__link link">
				<Text
					as={TextAsEnum.span}
					size={
						isMinHigh
							? TextSizeEnum.XLXXL
							: isMinMedium
							? TextSizeEnum.M
							: TextSizeEnum.XS
					}
					font={TextFontEnum.ForumRegular}
				>
					{isMinHigh ? item.title : item.linkTitle}
				</Text>
			</Link>
		</>
	);
}

export default ItemDefault;
