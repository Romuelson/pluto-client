/* Styles */
import './styles/index.scss';

export type CardProps = {
	id: string;
	title: string;
	price: number;
	path: string;
};

function Card(props: CardProps) {
	const { id, title, price, path } = props;

	return (
		<div className="personal__card card" key={id}>
			<picture>
				<source
					media="(min-width: 1366px)"
					srcSet={`./assets/images/desktop/personal/${path}.jpg`}
				/>
				<img
					className="card__image"
					src={`./assets/images/mobile/personal/${path}.jpg`}
					alt="Изображение товара"
				/>
			</picture>
			<svg
				width="19"
				height="17"
				className="card__icon icon__favorite--state"
			>
				<use xlinkHref="#sprite_svg__favorites" />
			</svg>
			<p className="card__description description">{title}</p>
			<span className="card__price">{`${price} ₽`}</span>
			<div className="card__wrapper">
				<button
					className="card__button button--favorite button"
					type="button"
				>
					<svg className="card__icon icon__favorite">
						<use xlinkHref="#sprite_svg__favorites" />
					</svg>
				</button>
				<button
					className="card__button button--brand button"
					type="button"
				>
					Выбрать
				</button>
			</div>
		</div>
	);
}

export default Card;
