import { CardPropsDisplay } from '@components/UI/molecules/card/card.type';
import { ELabelSections } from '@components/UI/molecules/card/mocks/card.mock.enum';

export type PersonalItem = {
	id: string;
	title: string;
	link: string;
};

export type PersonalData = PersonalItem[];

// ---

export type PresonalSectionProps = {
	type: ELabelSections;
};

export type PersonalProps = {
	className: string;
};
