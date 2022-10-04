import { useAppSelector } from '@hooks/store/redux/use.redux';
import { takeFavoriteStatus } from '@store/slices/favorite/favorite.selector';

import Picture from '@components/UI/molecules/picture/picture.comp';

import useIcons from '@hooks/components/icons/use.icons';

import {
	IconColorEnum,
	IconCursorEnum,
	IconSizeEnum,
} from '@components/UI/atoms/icon/icon.enum';

import { PictureProps } from '@components/UI/molecules/picture/picture.type';

import { CardPictureProps } from '../../card.type';

function CardPicture({ className, config, display }: CardPictureProps) {
	const { id, path } = config;
	const { Heart, HeartFull } = useIcons();

	const favoriteStatus = useAppSelector((state) =>
		takeFavoriteStatus(state, id)
	);

	const createPictureProps = (): PictureProps => ({
		className,
		config: {
			picture: {
				img: {
					// src: `../public/assets/images/mobile/personal/${path}.jpg`,
					src: `./assets/images/mobile/personal/${path}.jpg`,
					alt: 'Изображение товара',
				},
				source: [
					{
						media: '(min-width: 1366px)',
						srcSet: `./assets/images/desktop/personal/${path}.jpg`,
					},
				],
			},
		},
		display: { size: '' },
	});

	const createFavoriteStatus = () =>
		favoriteStatus ? (
			<HeartFull
				className="card__icon"
				size={IconSizeEnum.L}
				color={IconColorEnum.Valencia}
				cursor={IconCursorEnum.pointer}
			/>
		) : (
			<Heart
				className="card__icon"
				size={IconSizeEnum.L}
				color={IconColorEnum.Gold}
				cursor={IconCursorEnum.pointer}
			/>
		);

	return (
		<>
			<Picture {...createPictureProps()} />

			{display.page || createFavoriteStatus()}
		</>
	);
}

export default CardPicture;
