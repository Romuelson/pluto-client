import CardDescription from '../card-description/card-description.comp';

import CardCompound from '../card-compound/card-compound.comp';
import { CardCompound as TCardCompound } from '../../mocks/card.mock.type';

export type CardDetailsConfig = {
	description: string;
	compound: TCardCompound;
};

export type CardDetailsProps = {
	className: string;
	children: React.ReactNode;
};

function CardDetails({ className, children }: CardDetailsProps) {
	return <div className={className}>{children}</div>;
}

export default CardDetails;
