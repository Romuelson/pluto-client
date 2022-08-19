/* eslint-disable no-nested-ternary */

import { useMediaQuery } from 'react-responsive';

import { useCardList } from '@components/UI/molecules/card/use.card-list';
import Carousel from '@components/UI/organisms/carousel/carousel.comp';

import { PresonalSectionProps } from '../../personal.type';

function PersonalSection({ type, display }: PresonalSectionProps) {
	const cardList = useCardList({ section: type, display });

	const isCarouselLow = useMediaQuery({ minWidth: 552 });
	const isCarouselMedium = useMediaQuery({ minWidth: 736 });
	const isCarouselHigh = useMediaQuery({ minWidth: 1056 });
	const isCarouselNavigation = useMediaQuery({ minWidth: 1120 });

	return (
		<div className={`personal__section personal__${type}`}>
			<Carousel
				data={cardList}
				spaceBetween={!isCarouselHigh ? 16 : 32}
				slidesPerView={!isCarouselLow ? 2 : !isCarouselMedium ? 3 : 4}
				navigation={
					!isCarouselNavigation
						? false
						: {
								prevEl: '.swiper-button-prev-unique',
								nextEl: '.swiper-button-next-unique',
						  }
				}
				pagination={false}
				loop
			/>
			<div className="swiper-button-prev-unique" />
			<div className="swiper-button-next-unique" />
		</div>
	);
}

export default PersonalSection;
