/* Browser Routes */
import { Routes, Route } from 'react-router-dom';
import { DefaultRouteApp } from './default.enum';

/* Pages */
import HomePage from '../../pages/home/home.page';
import LoginPage from '../../pages/login/login.page';
import NotFound from '../../pages/not-found/not-found.page';

/* Components */
// import Header from '../../components/header/header.comp';
// import Footer from '../../components/footer/footer.comp';

function DefaultRoute() {
	return (
		<>
			{/* <Header /> */}
			<Routes>
				<Route path={DefaultRouteApp.Root} element={<HomePage />} />
				{/* <Route path={DefaultRouteApp.Login} element={<LoginPage />} />
				<Route path={DefaultRouteApp.NotFound} element={<NotFound />} /> */}
			</Routes>
		</>
	);
}

export default DefaultRoute;
