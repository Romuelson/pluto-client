/* eslint-disable no-nested-ternary */

import { useMediaQuery } from 'react-responsive';

import Carousel from '@components/UI/organisms/carousel/carousel.comp';

import { CardPropsDisplay } from '@components/UI/molecules/card/card.type';
import { useCardList } from '@components/UI/molecules/card/hooks/use.card-list';

import useIcons from '@hooks/components/icons/use.icons';
import { PresonalSectionProps } from '../../personal.type';

function PersonalSection({ type }: PresonalSectionProps) {
	const { Chevron } = useIcons();

	const createConfig: CardPropsDisplay = {
		picture: {
			page: false,
			carousel: false,
		},
	};

	const cardList = useCardList({ section: type, display: createConfig });

	const isCarouselLow = useMediaQuery({ minWidth: 552 });
	const isCarouselMedium = useMediaQuery({ minWidth: 736 });
	const isCarouselHigh = useMediaQuery({ minWidth: 1056 });
	const isCarouselNavigation = useMediaQuery({ minWidth: 1120 });
	const isCarouselButton = useMediaQuery({ minWidth: 1196 });

	return (
		<div className={`personal__section personal__${type}`}>
			<Carousel
				config={{ list: cardList }}
				display={{
					spaceBetween: !isCarouselHigh ? 16 : 32,
					slidesPerView: !isCarouselLow
						? 2
						: !isCarouselMedium
						? 3
						: 4,
					navigation: !isCarouselNavigation
						? false
						: {
								prevEl: '.swiper-button-prev-unique',
								nextEl: '.swiper-button-next-unique',
						  },
					pagination: false,
					loop: true,
				}}
			/>
			{!isCarouselButton || (
				<>
					<div className="personal__button swiper-button-prev-unique">
						<Chevron className="personal__chevron-prev" />
					</div>
					<div className="personal__button swiper-button-next-unique">
						<Chevron className="personal__chevron-next" />
					</div>
				</>
			)}
		</div>
	);
}

export default PersonalSection;
