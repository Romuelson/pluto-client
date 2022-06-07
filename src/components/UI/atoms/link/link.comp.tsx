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
		to,
		className,
		linkDecoration = LinkDecoration.none,
		linkColor = LinkColor.inherit,
		...otherProps
	} = props;

	const setTag = () => {
		switch (as) {
			case LinkAsEnum.a:
				return LinkAsEnum.a;
			case LinkAsEnum.Link:
				return RouterLink;
			case LinkAsEnum.NavLink:
				return NavLink;
			default:
				return LinkAsEnum.a;
		}
	};

	const Tag = setTag();

	const defaultProps = [linkDecoration, linkColor];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	const setContent = () => {
		if (Tag === LinkAsEnum.a) {
			return (
				<Tag href={to} className={setClassName}>
					{children}
				</Tag>
			);
		}

		return (
			<Tag to={to} className={setClassName}>
				{children}
			</Tag>
		);
	};

	return setContent();
}

export default Link;
