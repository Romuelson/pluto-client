/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/use.redux';

import { getAllCards } from '../../store/slices/data/data.selectors';

import { IProductCard, ProductCardList } from '../../types/data/product-card/product-card.type';

type PersonalCardsProps = {
	getCards: () => void;
	cards: ProductCardList;
};

function PersonalCards({getCards, cards}: PersonalCardsProps) {
	const blindHandler = () => {};
	const favoriteHandler = () => {};

	console.log(cards);

	useEffect(() => {
		if (!cards.length) {
			getCards();
		}
	}, [cards]);

	const card = (items: IProductCard[]) =>
		items.map((item) => (
			<div className="personal__card" key={item.id}>
				<img
					className="personal__image"
					src={`./images/desktop/personal/${item.properties.vendor}/${item.id}/${item.images.mainFront}.jpg`}
					alt="Изображение товара"
				/>
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
							width="11"
							height="11"
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
