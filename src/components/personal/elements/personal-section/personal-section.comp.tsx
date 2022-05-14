/* Hooks */
import { useCardList } from '../../../../hooks/card/use.card-list';

/* Types */
import { ELabelSections } from '../../../../types/data/product-card/product-card.enum';

export type PresonalSectionProps = {
	type: ELabelSections;
};

function PersonalSection({ type }: PresonalSectionProps) {
	const CardList = useCardList({ type });

	return (
		<div className={`personal__${type}`}>
			<div className="personal__container">
				<CardList />
			</div>
		</div>
	);
}

export default PersonalSection;
