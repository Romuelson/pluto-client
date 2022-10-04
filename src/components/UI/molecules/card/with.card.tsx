/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */

import CardRoute from '@components/UI/molecules/card/routes/card.route';

import Card from './card.comp';

import { CardColorConfig, CardColorDisplay, WithCardArgs } from './card.type';
import { useCardPicture } from './hooks/use.card-picture';

import CardContext from './elements/card-context/card-context.comp';
import CardFeature from './elements/card-feature/card-feature.comp';

import CardDetails from './elements/card-details/card-details.comp';
import CardDescription from './elements/card-description/card-description.comp';
import CardCompound from './elements/card-compound/card-compound.comp';
import CardCharacteristics from './elements/card-characteristics/card-characteristics.comp';

import CardColor from './elements/card-color/card-color.comp';
import CardControl from './elements/card-control/card-control.comp';
import CardSize from './elements/card-size/card-size.comp';

function withCard(props: WithCardArgs) {
	const { children, key, config, display } = props;

	const { id, properties, images, title, description } = children;
	const { vendor, priceList, labelList, compound, brand, manufacturer } =
		properties;

	const { initCard, indexActiveColor } = config;
	const { picture } = display;

	const path = `${vendor}/${id}/${images.mainFront}`;
	const paths = images;

	function WithCard() {
		const createPictureProps = {
			className: 'card__picture',
			config: { id, vendor, path, paths },
			display: picture,
		};

		const WithPicture = () => useCardPicture(createPictureProps);

		const createColorConfig = (): CardColorConfig => ({
			init: {
				id: initCard.id,
				section: initCard.properties.labelList.section,
				colorList: initCard.properties.colorList,
			},
			current: {
				id,
				section: properties.labelList.section,
				colorList: properties.colorList,
			},
		});

		const createColorDisplay = (): CardColorDisplay => ({
			page: picture.page,
		});

		return (
			<Card key={key} className={picture.page ? 'card--page' : undefined}>
				<WithPicture />

				{picture.page || (
					<CardColor
						className="card__color feature__color feature__fieldset fieldset"
						config={createColorConfig()}
						display={createColorDisplay()}
					/>
				)}

				<CardContext
					className="card__context"
					config={{
						title,
						price: priceList.price,
						page: picture.page,
						section: labelList.section,
					}}
				>
					{!picture.page || (
						<CardFeature className="context__item card__feature form">
							<CardColor
								className="card__color feature__color feature__fieldset fieldset"
								config={createColorConfig()}
								display={createColorDisplay()}
							/>
							<CardSize
								className="card__size feature__size feature__fieldset fieldset"
								config={{
									id: initCard.id,
									sizeList: properties.sizeList,
								}}
								display={{ page: picture.page }}
							/>
							<CardControl
								className="card__control"
								config={{ id, section: labelList.section }}
								display={{ page: picture.page }}
							/>
						</CardFeature>
					)}
				</CardContext>

				{!picture.page || (
					<CardDetails className="card__details">
						<CardDescription
							className="card__description details__item"
							description={description}
						/>
						<CardCompound
							className="card__compound details__item"
							compound={compound}
						/>
						<CardCharacteristics
							className="card__characteristics details__item"
							brand={brand}
							manufacturer={manufacturer}
						/>
					</CardDetails>
				)}

				{picture.page || (
					<CardControl
						className="card__control"
						config={{ id, section: labelList.section }}
						display={{ page: picture.page }}
					/>
				)}
			</Card>
		);
	}

	return WithCard;
}

export default withCard;
