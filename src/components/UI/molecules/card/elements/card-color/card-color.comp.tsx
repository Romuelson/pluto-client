import { CardColorProps } from '../../card.type';

function CardColor(props: CardColorProps) {
	const { className, colorList } = props;

	return (
		<div className={className}>
			<svg
				className="card__svg"
				width="18"
				height="18"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="10" cy="10" r="8" fill={colorList.current.rgb} />
				<circle cx="10" cy="10" r="9.5" stroke="black" />
			</svg>
			{colorList.vendorList.map((vendor) => {
				return (
					<svg
						className="card__svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="8" cy="8" r="8" fill={vendor.color.rgb} />
					</svg>
				);
			})}
		</div>
	);
}

export default CardColor;
