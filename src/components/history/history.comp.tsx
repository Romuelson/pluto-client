import { useLayoutEffect, useState } from 'react';

import { BrowserHistory } from 'history';
import { Router } from 'react-router-dom';

export interface HistoryProps {
	history: BrowserHistory;
	basename?: string;
	children?: React.ReactNode;
}

function History(props: HistoryProps) {
	const { history, basename, children } = props;

	const [state, setState] = useState({
		action: history.action,
		location: history.location,
	});

	useLayoutEffect(() => history.listen(setState), [history]);

	return (
		<Router
			basename={basename}
			location={state.location}
			navigationType={state.action}
			navigator={history}
		>
			{children}
		</Router>
	);
}

export default History;
