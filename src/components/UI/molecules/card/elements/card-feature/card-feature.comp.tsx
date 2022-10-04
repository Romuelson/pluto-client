import { CardFeatureProps } from '../../card.type';

function CardFeature({ className, children }: CardFeatureProps) {
	return <form className={className}>{children}</form>;
}

export default CardFeature;
