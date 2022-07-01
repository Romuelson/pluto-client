import './styles/index.scss';

import { otherPropsToString } from '@utils/components/props';

import { TextProps } from './text.type';
import { TextAsEnum } from './text.enum';

function Text(props: TextProps) {
	const {
		children = 'default',
		as = TextAsEnum.div,
		className,
		...otherProps
	} = props;

	const Tag = as;

	const defaultProps = ['text'];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	return <Tag className={setClassName}>{children}</Tag>;
}

export default Text;
