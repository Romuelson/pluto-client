import { Routes, Route, Navigate } from 'react-router-dom';

import { CardRouteApp } from '@components/UI/molecules/card/routes/card.enum';
import CardPage from '@components/UI/molecules/card/elements/card-page/card-page.comp';

import HomePage from '@pages/home/home.page';
import NotFound from '@pages/not-found/not-found.page';

import { DefaultRouteApp } from './default.enum';

function DefaultRoute() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home" replace />} />
			<Route path="/home/*" element={<HomePage />} />

			<Route path={CardRouteApp.Main} element={<CardPage />} />
			<Route path={DefaultRouteApp.NotFound} element={<NotFound />} />
		</Routes>
	);
}

export default DefaultRoute;
