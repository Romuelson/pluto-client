/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/prop-types */

import { Route, Routes } from 'react-router-dom';

/* Components */
import PersonalCards from '../../components/personal-cards/personal-cards.comp';
import PersonalSection from '../../components/personal-section/personal-section.comp';

/* Enums */
import { PersonalRouteApp } from './personal.enum';
import { ELabelSections } from '../../types/data/product-card/product-card.enum';

function PersonalRoute() {
	return (
		<Routes>
			<Route
				index
				element={
					<PersonalSection>
						<PersonalCards type={ELabelSections.novelties} />
					</PersonalSection>
				}
			/>
			<Route
				path={PersonalRouteApp.Collections}
				element={
					<PersonalSection>
						<PersonalCards type={ELabelSections.collections} />
					</PersonalSection>
				}
			/>
			<Route
				path={PersonalRouteApp.Sale}
				element={
					<PersonalSection>
						<PersonalCards type={ELabelSections.sale} />
					</PersonalSection>
				}
			/>
		</Routes>
	);
}

export default PersonalRoute;
