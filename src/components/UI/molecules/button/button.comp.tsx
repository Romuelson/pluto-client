/* eslint-disable jsx-a11y/anchor-is-valid */

import './styles/index.scss';

import { otherPropsToString } from '@utils/components/props';

import Link from '@components/UI/atoms/link/link.comp';
import { LinkAsEnum } from '@components/UI/atoms/link/link.enum';

import { ButtonProps } from './button.type';
import { ButtonTypeEnum } from './button.enum';

function Button(props: ButtonProps) {
	const { key, children, className, clickHandler, type, to, ...otherProps } =
		props;

	const defaultProps = ['button'];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	const setTypeButton = () => {
		switch (type) {
			case ButtonTypeEnum.link:
				return (
					<Link
						key={key}
						as={LinkAsEnum.Link}
						className={setClassName}
						to={to}
					>
						{children}
					</Link>
				);
			default:
				return (
					<button
						key={key}
						type="button"
						className={setClassName}
						onClick={
							clickHandler ? () => clickHandler() : undefined
						}
					>
						{children}
					</button>
				);
		}
	};

	return setTypeButton();
}

export default Button;
