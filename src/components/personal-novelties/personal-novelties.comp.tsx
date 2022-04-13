/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { TouchEvent, MouseEvent, useEffect } from 'react';
import cardImage from '../../../public/images/desktop/personal/gerl-x/gerl-x.jpg';

function PersonalNovelties() {
	const blindHandler = () => {};
	const favoriteHandler = () => {};

	const touchStartHandler = (evt: TouchEvent<HTMLDivElement>) => {};
	const touchMoveHandler = (evt: TouchEvent<HTMLDivElement>) => {};
	const touchEndHandler = (evt: TouchEvent<HTMLDivElement>) => {};

	const mouseDownHandler = (evt: MouseEvent<HTMLDivElement>) => {};
	const mouseMoveHandler = (evt: MouseEvent<HTMLDivElement>) => {};
	const mouseLeaveHandler = (evt: MouseEvent<HTMLDivElement>) => {};

	return (
		<div className="personal__novelties">
			<div
				className="personal__container"
				onTouchStart={touchStartHandler}
				onTouchMove={touchMoveHandler}
				onTouchEnd={touchEndHandler}
				onMouseDown={mouseDownHandler}
				onMouseMove={mouseMoveHandler}
				onMouseLeave={mouseLeaveHandler}
			>
				<div className="personal__card">
					<img
						className="personal__image"
						src={cardImage}
						alt="Изображение товара"
					/>
					<p className="personal__description description">
						V-стринги с рисунком роз и декоративным бантиком
					</p>
					<span className="personal__cost">2 717,91 руб.</span>
					<div className="personal__wrapper">
						<button
							className="personal__button personal__button--favorite button"
							type="button"
							onClick={favoriteHandler}
						>
							<svg
								width="11"
								height="11"
								className="personal__icon"
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
						src={cardImage}
						alt="Изображение товара"
					/>
					<p className="personal__description description">
						V-стринги с рисунком роз и декоративным бантиком
					</p>
					<span className="personal__cost">2 717,91 руб.</span>
					<div className="personal__wrapper">
						<button
							className="personal__button personal__button--favorite button"
							type="button"
							onClick={favoriteHandler}
						>
							<svg
								width="11"
								height="11"
								className="personal__icon"
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
						src={cardImage}
						alt="Изображение товара"
					/>
					<p className="personal__description description">
						V-стринги с рисунком роз и декоративным бантиком
					</p>
					<span className="personal__cost">2 717,91 руб.</span>
					<div className="personal__wrapper">
						<button
							className="personal__button personal__button--favorite button"
							type="button"
							onClick={favoriteHandler}
						>
							<svg
								width="11"
								height="11"
								className="personal__icon"
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
						src={cardImage}
						alt="Изображение товара"
					/>
					<p className="personal__description description">
						V-стринги с рисунком роз и декоративным бантиком
					</p>
					<span className="personal__cost">2 717,91 руб.</span>
					<div className="personal__wrapper">
						<button
							className="personal__button personal__button--favorite button"
							type="button"
							onClick={favoriteHandler}
						>
							<svg
								width="11"
								height="11"
								className="personal__icon"
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
