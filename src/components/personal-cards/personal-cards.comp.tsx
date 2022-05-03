/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use.redux';

import { getCardType } from '../../store/slices/data/data.thunk';

import { IProductCard} from '../../types/data/product-card/product-card.type';
import { ELabelSections } from '../../types/data/product-card/product-card.enum';
import { takeCardsStatus, takeCardsType } from '../../store/slices/data/data.selectors';
import { DataStatusType } from '../../store/slices/data/data.enum';

type PersonalCardsProps = {
	type: ELabelSections;
};

function PersonalCards({type}: PersonalCardsProps) {
	const dispatch = useAppDispatch();

	const cards = useAppSelector((state) => takeCardsType(state, type));
	const status = useAppSelector((state) => takeCardsStatus(state, type));

	const blindHandler = () => {};
	const favoriteHandler = () => {};

	useEffect(() => {
		if (status === DataStatusType.sleeping) {
			dispatch(getCardType({ type }));
		}
	}, [cards]);

	const card = (items: IProductCard[]) =>
		items.map((item) => (
			<div className="personal__card" key={item.id}>
				<picture>
					<source
						media='(min-width: 1366px)'
						srcSet={`./images/desktop/personal/${item.properties.vendor}/${item.id}/${item.images.mainFront}.jpg`} />
					<img
						className="personal__image"
						src={`./images/mobile/personal/${item.properties.vendor}/${item.id}/${item.images.mainFront}.jpg`}
						alt="Изображение товара"
					/>
				</picture>
				<svg
					width="19"
					height="17"
					className="personal__icon favorites--state"
				>
					<use xlinkHref="#sprite_svg__favorites" />
				</svg>
				<p className="personal__description description">
					{item.title}
				</p>
				<span className="personal__price">{`${item.properties.priceList.price} ₽`}</span>
				<div className="personal__wrapper">
					<button
						className="personal__button personal__button--favorite button"
						type="button"
						onClick={favoriteHandler}
					>
						<svg
							className="personal__icon favorites"
						>
							<use xlinkHref="#sprite_svg__favorites" />
						</svg>
					</button>
					<button
						className="personal__button personal__button--blind button"
						type="button"
						onClick={blindHandler}
					>
						Выбрать
					</button>
				</div>
			</div>
		));

	return <>{cards ? card(cards) : <p>Loader...</p>}</>;
}

export default PersonalCards;
