import './styles/index.scss';

import { otherPropsToString } from '@utils/components/props';

import { CardProps } from './card.type';

function Card(props: CardProps) {
	const { className, children, ...otherProps } = props;

	const defaultProps = ['card'];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	return <div className={setClassName}>{children}</div>;
}

export default Card;
