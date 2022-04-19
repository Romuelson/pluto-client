/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use.redux';
import { CardsList } from '../../mocks/data/card/card';

import { getCards } from '../../store/slices/data/data.selectors';
import { getCardsThunk } from '../../store/slices/data/data.thunk';

import image from '../../../public/images/desktop/personal/gerl-1/gerl-1.jpg';

function PersonalCards() {
	const blindHandler = () => {};
	const favoriteHandler = () => {};

	const dispatch = useAppDispatch();
	const cards = useAppSelector(getCards);

	useEffect(() => {
		if (!cards.length) {
			dispatch(getCardsThunk());
		}
	}, []);

	const card = (items: CardsList) =>
		items.map((item, index) => (
			<div className="personal__card" key={item.id}>
				<img
					className="personal__image"
					src={`./images/desktop/personal/${item.image}/${item.image}.jpg`}
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
					{item.description}
				</p>
				<span className="personal__price">{`${item.price} руб.`}</span>
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

	const loader = () => (
		<div>
			<p>Loader...</p>
		</div>
	);

	return <>{cards ? card(cards) : loader()}</>;
}

export default PersonalCards;
