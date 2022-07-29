import { useAppDispatch, useAppSelector } from '@hooks/store/redux/use.redux';

import { setCard, deleteCard } from '@store/slices/favorite/favorite.slice';
import { takeFavoriteStatus } from '@store/slices/favorite/favorite.selector';

import useIcons from '@hooks/components/icons/use.icons';

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
	ButtonCursorEnum,
	ButtonSizeEnum,
	ButtonViewEnum,
} from '@components/UI/molecules/button/button.enum';

import {
	IconColorEnum,
	IconCursorEnum,
	IconSizeEnum,
} from '@components/UI/atoms/icon/icon.enum';

import { CardControlProps } from '../../card.type';

function CardControl({ className, id }: CardControlProps) {
	const { Heart, HeartFull } = useIcons();

	const dispatch = useAppDispatch();

	const favoriteStatus = useAppSelector((state) =>
		takeFavoriteStatus(state, id)
	);

	return (
		<div className={className}>
			<Button
				view={ButtonViewEnum.white}
				size={ButtonSizeEnum.SXS}
				cursor={ButtonCursorEnum.pointer}
				clickHandler={() =>
					favoriteStatus
						? dispatch(deleteCard(id))
						: dispatch(setCard(id))
				}
			>
				{favoriteStatus ? (
					<HeartFull
						size={IconSizeEnum.S}
						color={IconColorEnum.Valencia}
					/>
				) : (
					<Heart
						size={IconSizeEnum.S}
						color={IconColorEnum.Valencia}
					/>
				)}
			</Button>

			<Button
				className="card__button"
				view={ButtonViewEnum.brand}
				size={ButtonSizeEnum.S}
				cursor={ButtonCursorEnum.pointer}
			>
				<Text
					as={TextAsEnum.span}
					font={TextFontEnum.TypeTypeNorms}
					size={TextSizeEnum.XXS}
					lineHeight={TextLineHeightEnum.SXXS}
					textAlign={TextAlignEnum.center}
				>
					Выбрать
				</Text>
			</Button>
		</div>
	);
}

export default CardControl;
