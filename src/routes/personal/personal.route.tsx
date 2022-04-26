/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/prop-types */

import { Route, Routes } from 'react-router-dom';

/* Components */
import PersonalCards from '../../components/personal-cards/personal-cards.comp';
import PersonalSection from '../../components/personal-section/personal-section.comp';

/* Store */
import {
	getCardNoveltiesThunk,
	getCardCollectionsThunk,
	getCardSaleThunk,
} from '../../store/slices/data/data.thunk';

/* Enums */
import { PersonalRouteApp } from './personal.enum';
import { useAppDispatch, useAppSelector } from '../../hooks/use.redux';

import {
	getNoveltiesCards,
	getCollectionsCards,
	getSaleCards,
} from '../../store/slices/data/data.selectors';

function PersonalRoute() {
	const dispatch = useAppDispatch();

	const CardNovelties = () => useAppSelector(getNoveltiesCards);
	const CardCollections = () => useAppSelector(getCollectionsCards);
	const CardSale = () => useAppSelector(getSaleCards);

	const onCardNovelties = () => {
		dispatch(getCardNoveltiesThunk());
	};

	const onCardCollections = () => {
		dispatch(getCardCollectionsThunk());
	};

	const onCardSales = () => {
		dispatch(getCardSaleThunk());
	};

	return (
		<Routes>
			<Route
				index
				element={
					<PersonalSection>
						<PersonalCards
							getCards={onCardNovelties}
							cards={CardNovelties()}
						/>
					</PersonalSection>
				}
			/>
			<Route
				path={PersonalRouteApp.Collections}
				element={
					<PersonalSection>
						<PersonalCards
							getCards={onCardCollections}
							cards={CardCollections()}
						/>
					</PersonalSection>
				}
			/>
			<Route
				path={PersonalRouteApp.Sale}
				element={
					<PersonalSection>
						<PersonalCards
							getCards={onCardSales}
							cards={CardSale()}
						/>
					</PersonalSection>
				}
			/>
		</Routes>
	);
}

export default PersonalRoute;
