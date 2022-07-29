import { Route, Routes } from 'react-router-dom';

import { ELabelSections } from '@components/UI/molecules/card/mocks/card.mock.enum';
import { PersonalRouteApp } from './personal.enum';
import PersonalSection from '../elements/personal-section/personal-section.comp';

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
