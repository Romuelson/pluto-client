import '../public/styles/index.scss';

/* View */
import { StrictMode } from 'react';
import { render } from 'react-dom';

/* Store */
import { Provider } from 'react-redux';
import { store } from './store/store';

/* Browser Routes */
import History from './components/history/history.comp';
import browserHistory from './utils/routes/browser-history/browser-history';

/* Components */
import App from './components/app/app.comp';

/* Mock Service Worker */
import { initMockServiceWorker } from './utils/msw/init-worker/init-worker';

initMockServiceWorker();

render(
	<StrictMode>
		<Provider store={store}>
			<History history={browserHistory}>
				<App />
			</History>
		</Provider>
	</StrictMode>,
	document.getElementById('root')
);
