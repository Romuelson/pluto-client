import { Route, Routes } from 'react-router-dom';

import PersonalSection from '../../components/personal/elements/personal-section/personal-section.comp';

import { PersonalRouteApp } from './personal.enum';
import { ELabelSections } from '../../types/data/product-card/product-card.enum';

function PersonalRoute() {
	return (
		<Routes>
			<Route
				index
				element={<PersonalSection type={ELabelSections.novelties} />}
			/>
			<Route
				path={PersonalRouteApp.Collections}
				element={<PersonalSection type={ELabelSections.collections} />}
			/>
			<Route
				path={PersonalRouteApp.Sale}
				element={<PersonalSection type={ELabelSections.sale} />}
			/>
		</Routes>
	);
}

export default PersonalRoute;
