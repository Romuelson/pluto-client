import { useLocation } from 'react-router-dom';
import { ELabelSections } from '../../types/data/product-card/product-card.enum';

type PresonalSectionProps = {
	children: JSX.Element;
};

function PersonalSection({ children }: PresonalSectionProps) {
	const to = useLocation();
	const label = to.pathname.split('/').pop();

	return (
		<div
			className={
				label ? `personal__${label}` : `personal__${ELabelSections.new}`
			}
		>
			<div className="personal__container">{children}</div>
		</div>
	);
}

export default PersonalSection;
