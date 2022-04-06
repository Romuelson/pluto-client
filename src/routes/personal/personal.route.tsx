import { Route, Routes } from 'react-router-dom';

import PersonalNovelties from '../../components/personal-novelties/personal-novelties.comp';
import PersonalCollections from '../../components/personal-collections/personal-collections.comp';
import PersonalSale from '../../components/personal-sale/personal-sale.comp';

import { DefaultRouteApp } from '../default/default.enum';
import { PersonalRouteApp } from './personal.enum';

function PersonalRoute() {
	return (
		<Routes>
			<Route path="/" element={<PersonalNovelties />} />
			<Route
				path="/:home/collections"
				element={<PersonalCollections />}
			/>
			<Route path="/:home/sale" element={<PersonalSale />} />
		</Routes>
	);
}

export default PersonalRoute;
