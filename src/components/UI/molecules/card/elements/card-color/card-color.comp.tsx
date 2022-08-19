/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { CardColorProps } from '../../card.type';
import { useCardDispatch } from '../../use.card.dispatch';

function CardColor(props: CardColorProps) {
	const { className, colorList, id, initId, sectionType, activeIndex } =
		props;

	const dispatch = useCardDispatch();

	const changeCardHandler = (evt: React.SyntheticEvent<EventTarget>) => {
		const target = evt.target as Element;

		const targetId = target.getAttribute('data-id') || '';
		const targetIndex = target.getAttribute('data-index');
		const targetSection =
			target.getAttribute('data-section') || sectionType;

		if (targetId !== id) {
			dispatch.setActiveId({
				id: initId,
				section: targetSection,
				activeId: targetId,
			});
		}

		if (targetIndex)
			dispatch.setActiveColor({
				id: initId,
				section: sectionType,
				index: targetIndex,
			});
	};

	return (
		<div className={className} onClick={(evt) => changeCardHandler(evt)}>
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
					data-id={`${initId}`}
					data-index="0"
				/>
				{activeIndex === '0' ? (
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
							data-id={vendor.id}
							data-index={`${index + 1}`}
							data-section={vendor.sections}
						/>
						{activeIndex === `${index + 1}` ? (
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
