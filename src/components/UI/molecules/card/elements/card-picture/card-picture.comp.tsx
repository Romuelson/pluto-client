import { useAppSelector } from '@hooks/store/redux/use.redux';
import { takeFavoriteStatus } from '@store/slices/favorite/favorite.selector';

import useIcons from '@hooks/components/icons/use.icons';

import {
	IconColorEnum,
	IconCursorEnum,
	IconSizeEnum,
} from '@components/UI/atoms/icon/icon.enum';

import { CardPictureProps } from '../../card.type';

function CardPicture({ id, path, className }: CardPictureProps) {
	const { Heart, HeartFull } = useIcons();

	const favoriteStatus = useAppSelector((state) =>
		takeFavoriteStatus(state, id)
	);

	return (
		<div className={className}>
			<picture>
				<source
					media="(min-width: 1366px)"
					srcSet={`../public/assets/images/desktop/personal/${path}.jpg`}
				/>
				<img
					className="card__image"
					src={`../public/assets/images/mobile/personal/${path}.jpg`}
					alt="Изображение товара"
				/>
			</picture>
			{favoriteStatus ? (
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
			)}
		</div>
	);
}

export default CardPicture;
