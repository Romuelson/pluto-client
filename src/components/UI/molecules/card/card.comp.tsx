import './styles/index.scss';

import { otherPropsToString } from '@utils/components/props';

import { CardProps } from './card.type';

import CardColor from './elements/card-color/card-color.comp';
import CardContext from './elements/card-context/card-context.comp';
import CardControl from './elements/card-control/card-control.comp';
import CardPicture from './elements/card-picture/card-picture.comp';

function Card(props: CardProps) {
	const { className, children, ...otherProps } = props;
	const { id, title, price, path, colorList } = children;

	const defaultProps = ['card'];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	return (
		<div className={setClassName}>
			<CardPicture className="card__picture" path={path} id={id} />

			<CardColor className="card__color" colorList={colorList} />

			<CardContext
				className="card__context"
				title={title}
				price={price}
			/>

			<CardControl className="card__control" id={id} />
		</div>
	);
}

export default Card;
