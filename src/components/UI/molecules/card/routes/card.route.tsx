import { Route, Routes } from 'react-router-dom';

import CardPage from '@components/UI/molecules/card/elements/card-page/card-page.comp';

import { CardRouteApp } from './card.enum';

function CardRoute() {
	const { Root, Id, Section, CurrentSection } = CardRouteApp;
	const path = `${Root}${Id}${Section}${CurrentSection}/*`;

	return <Route path={path} element={<CardPage />} />;

	// return (
	// 	<Routes>
	// 		<Route path={path} element={<CardPage />} />
	// 	</Routes>
	// );
}

export default CardRoute;
