/* eslint-disable no-nested-ternary */
import Link from '@components/UI/atoms/link/link.comp';

import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

import Text from '@components/UI/atoms/text/text.comp';
import {
	TextAsEnum,
	TextFontEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';
import { PromoListProps } from '../../promo.type';
import { promoMock } from '../../mocks/promo.mock';

function PromoList({ children }: PromoListProps) {
	const { promoListData } = promoMock();
	const { isMinHigh, isMinMedium } = useSingleMediaQuery();

	return (
		<ul className="promo__list list">
			{promoListData.map((item, index) => {
				if (index === 0 && children) {
					return (
						<li className="promo__item" key={item.id}>
							{children}
						</li>
					);
				}

				return (
					<li className="promo__item" key={item.id}>
						{!isMinHigh && (
							<Text
								as={TextAsEnum.h4}
								className="promo__title title"
							>
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
					</li>
				);
			})}
		</ul>
	);
}

export default PromoList;
