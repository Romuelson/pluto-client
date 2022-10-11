import './assets/styles/index.scss';

import { StrictMode } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import History from './components/history/history.comp';
import browserHistory from './utils/routes/browser-history/browser-history';

import App from './components/app/app.comp';

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
