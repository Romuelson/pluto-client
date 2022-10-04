import Carousel from '@components/UI/organisms/carousel/carousel.comp';

import CardPicture from '../card-picture/card-picture.comp';

import { CardPictureListProps } from '../../card.type';

function CardPictureList({ className, config, display }: CardPictureListProps) {
	const { id, vendor, paths } = config;

	const ImageColletion = () => {
		return Object.entries(paths).map((path, index) => {
			const createPath = `${vendor}/${id}/${path[1]}`;
			const craeteConfig = { id, vendor, path: createPath };

			return (
				<CardPicture
					className="picture__item"
					config={craeteConfig}
					display={display}
				/>
			);
		});
	};

	return (
		<div className={className}>
			{display.carousel ? (
				<Carousel
					config={{ list: ImageColletion() }}
					display={{
						spaceBetween: 12,
						slidesPerView: 2,
						navigation: false,
						pagination: true,
						loop: true,
					}}
				/>
			) : (
				ImageColletion()
			)}
		</div>
	);
}

export default CardPictureList;
