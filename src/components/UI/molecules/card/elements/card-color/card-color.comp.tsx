/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';
import { CardColorProps } from '../../card.type';

function CardColor(props: CardColorProps) {
	const { className, colorList } = props;

	const [indexSVG, setIndexSVG] = useState('0');

	return (
		<div
			className={className}
			onClick={(evt) => {
				const target = evt.target as Element;
				const index = target.getAttribute('data-index');

				if (index) setIndexSVG(index);
			}}
		>
			<svg
				className="card__svg"
				width="18"
				height="18"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="10"
					cy="10"
					r="8"
					fill={colorList.current.rgb}
					data-index="0"
				/>
				{indexSVG === '0' ? (
					<circle
						cx="10"
						cy="10"
						r="9.5"
						stroke="black"
						onClick={(evt) => evt.stopPropagation()}
					/>
				) : null}
			</svg>
			{colorList.vendorList.map((vendor, index) => {
				return (
					<svg
						key={vendor.id}
						className="card__svg"
						width="18"
						height="18"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="10"
							cy="10"
							r="8"
							fill={vendor.color.rgb}
							data-index={`${index + 1}`}
						/>
						{indexSVG === `${index + 1}` ? (
							<circle
								cx="10"
								cy="10"
								r="9.5"
								stroke="black"
								onClick={(evt) => evt.stopPropagation()}
							/>
						) : null}
					</svg>
				);
			})}
		</div>
	);
}

export default CardColor;
