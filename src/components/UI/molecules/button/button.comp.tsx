import './styles/index.scss';

import { otherPropsToString } from '@utils/components/props';
import { ButtonProps } from './button.type';

function Button(props: ButtonProps) {
	const { children, className, clickHandler, ...otherProps } = props;

	const defaultProps = ['button'];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	return (
		<button
			type="button"
			className={setClassName}
			onClick={clickHandler ? () => clickHandler() : undefined}
		>
			{children}
		</button>
	);
}

export default Button;
