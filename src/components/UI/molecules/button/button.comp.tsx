import './styles/index.scss';

import useIcons from '@hooks/components/icons/use.icons';
import { otherPropsToString } from '@utils/components/props';

import Text from '../../atoms/text/text.comp';
import { ButtonProps } from './button.type';

import { IconSizeEnum } from '../../atoms/icon/icon.enum';
import { TextAsEnum, TextSizeEnum } from '../../atoms/text/text.enum';

function Button(props: ButtonProps) {
	const { children, className, ...otherProps } = props;
	const { Options } = useIcons();

	const defaultProps = ['button'];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	return (
		<button type="button" className={setClassName}>
			<Text as={TextAsEnum.span} size={TextSizeEnum.XXS}>
				{children || 'Проверка'}
			</Text>
			<Options size={IconSizeEnum.S} />
		</button>
	);
}

export default Button;
