import './styles/index.scss';

import { useNotFound } from './use.not-found';

function NotFound() {
	const NotFoundContext = useNotFound();

	return (
		<main className="not-found">
			<NotFoundContext className="not-found__context" />
		</main>
	);
}

export default NotFound;
