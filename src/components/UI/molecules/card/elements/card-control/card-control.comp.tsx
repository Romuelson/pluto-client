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
	ButtonTypeEnum,
	ButtonViewEnum,
} from '@components/UI/molecules/button/button.enum';

import {
	IconColorEnum,
	IconSizeEnum,
} from '@components/UI/atoms/icon/icon.enum';

import { CardControlProps } from '../../card.type';
import { CardRouteApp } from '../../routes/card.enum';
import { CardControlLabelEnum } from '../../card.enum';

function CardControl({ className, config, display }: CardControlProps) {
	const { id, section } = config;
	const { page } = display;

	const { Heart, HeartFull } = useIcons();

	const dispatch = useAppDispatch();

	const favoriteStatus = useAppSelector((state) =>
		takeFavoriteStatus(state, id)
	);

	return (
		<div className={className}>
			<Button
				className="button__favorite"
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

			{!page || (
				<Button
					className="card__button button__free"
					type={ButtonTypeEnum.link}
					to={`${CardRouteApp.Root}/${id}${CardRouteApp.Section}/${section}`}
					view={ButtonViewEnum.white}
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
						{CardControlLabelEnum.free}
					</Text>
				</Button>
			)}

			<Button
				className="card__button button__select"
				type={ButtonTypeEnum.link}
				to={`${CardRouteApp.Root}/${id}${CardRouteApp.Section}/${section}`}
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
					{page
						? CardControlLabelEnum.add
						: CardControlLabelEnum.select}
				</Text>
			</Button>
		</div>
	);
}

export default CardControl;
