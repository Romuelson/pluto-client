import { Route, Routes } from 'react-router-dom';

/* Components */
import PersonalNovelties from '../../components/personal-novelties/personal-novelties.comp';
import PersonalCollections from '../../components/personal-collections/personal-collections.comp';
import PersonalSale from '../../components/personal-sale/personal-sale.comp';

/* Enums */
import { PersonalRouteApp } from './personal.enum';

function PersonalRoute() {
	return (
		<Routes>
			<Route index element={<PersonalNovelties />} />
			<Route
				path={PersonalRouteApp.Collections}
				element={<PersonalCollections />}
			/>
			<Route path={PersonalRouteApp.Sale} element={<PersonalSale />} />
		</Routes>
	);
}

export default PersonalRoute;
