import './styles/index.scss';

import LegalText from './elements/legal-text/legal-text.comp';

import { LegalProps } from './legal.type';
import { legalMock } from './mocks/legal.mock';

function Legal({ className }: LegalProps) {
	const { responce } = legalMock();

	return (
		<div className={[className, 'legal'].join(' ')}>
			<div className="legal__container">
				{responce.map(({ id, link, title }) => (
					<LegalText key={id} to={link} children={title} />
				))}
			</div>
		</div>
	);
}

export default Legal;
