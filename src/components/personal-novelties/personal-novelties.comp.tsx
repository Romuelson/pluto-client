/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* React */
import { TouchEvent, MouseEvent, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use.redux';
import { dataGetCardsThunk } from '../../store/slices/data/data.thunk';

// import cardImage from '../../../public/images/desktop/personal/gerl-x/gerl-x.jpg';

function PersonalNovelties() {
	const blindHandler = () => {};
	const favoriteHandler = () => {};

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(dataGetCardsThunk(null));
	});

	return (
		<div className="personal__novelties">
			<div className="personal__container">
				<div className="personal__card">
					<img
						className="personal__image"
						src={`${''}`}
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
						V-стринги с рисунком роз и декоративным бантиком
					</p>
					<span className="personal__price">2 717,91 руб.</span>
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
				<div className="personal__card">
					<img
						className="personal__image"
						src={`${''}`}
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
						V-стринги с рисунком роз и декоративным бантиком
					</p>
					<span className="personal__price">2 717,91 руб.</span>
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
				<div className="personal__card">
					<img
						className="personal__image"
						src={`${''}`}
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
						V-стринги с рисунком роз и декоративным бантиком
					</p>
					<span className="personal__price">2 717,91 руб.</span>
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
				<div className="personal__card">
					<img
						className="personal__image"
						src={`${''}`}
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
						V-стринги с рисунком роз и декоративным бантиком
					</p>
					<span className="personal__price">2 717,91 руб.</span>
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
			</div>
		</div>
	);
}

export default PersonalNovelties;
