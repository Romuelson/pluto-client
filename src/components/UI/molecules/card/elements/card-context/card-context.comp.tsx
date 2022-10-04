import { CardContextProps } from '../../card.type';
import CardMainInfo from '../card-main-info/card-main-info.comp';

function CardContext(props: CardContextProps) {
	const { className, children, config } = props;

	return (
		<div className={className}>
			<CardMainInfo
				className="card__main-info context__item"
				{...config}
			/>
			{children}
		</div>
	);
}

export default CardContext;
