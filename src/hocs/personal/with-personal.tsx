import { Pathname } from 'react-router-dom';
import { ELabelSections } from '../../types/data/product-card/product-card.enum';

interface WithPersonalProps {
	pathname: Pathname;
	children: JSX.Element;
}

function WithPersonal({ pathname, children }: WithPersonalProps) {
	const label = pathname.split('/').pop();

	return (
		<div
			className={
				label
					? `personal__${label}`
					: `personal__${ELabelSections.novelties}`
			}
		>
			<div className="personal__container">{children}</div>
		</div>
	);
}

export default WithPersonal;
