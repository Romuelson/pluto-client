import './styles/index.scss';

import { otherPropsToString } from '@utils/components/props';

import { TextProps } from './text.type';
import { TextAsEnum } from './text.enum';

function Text(props: TextProps) {
	const {
		id,
		children = 'default',
		as = TextAsEnum.div,
		className,
		onClick,
		...otherProps
	} = props;

	const Tag = as;

	const defaultProps = ['text'];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	return (
		<Tag
			key={id}
			className={setClassName}
			onClick={() => !onClick || onClick()}
		>
			{children}
		</Tag>
	);
}

export default Text;
