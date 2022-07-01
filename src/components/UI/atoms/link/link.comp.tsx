/* eslint-disable consistent-return */

/* Styles */
import './styles/index.scss';

/* Modules */
import { Link as RouterLink, NavLink } from 'react-router-dom';

/* Utils */
import { otherPropsToString } from '@utils/components/props';

/* Components */
import { LinkAsEnum, LinkColor, LinkDecoration } from './link.enum';
import { LinkProps } from './link.type';

function Link(props: LinkProps) {
	const {
		children,
		as,
		to = '#!',
		className,
		linkDecoration = LinkDecoration.none,
		linkColor = LinkColor.inherit,
		...otherProps
	} = props;

	const defaultProps = ['link', linkDecoration, linkColor];
	const setClassName = (activeClassName?: string) =>
		otherPropsToString(
			otherProps,
			defaultProps,
			className,
			activeClassName
		);

	const setContent = () => {
		switch (as) {
			case LinkAsEnum.Link:
				return (
					<RouterLink to={to} className={setClassName()}>
						{children}
					</RouterLink>
				);
			case LinkAsEnum.NavLink:
				return (
					<NavLink
						to={to}
						className={(isActive) => {
							if (typeof className === 'function') {
								return setClassName(className(isActive));
							}
						}}
					>
						{children}
					</NavLink>
				);
			default:
				return (
					<LinkAsEnum.a href={to} className={setClassName()}>
						{children}
					</LinkAsEnum.a>
				);
		}
	};

	return setContent();
}

export default Link;
