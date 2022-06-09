import './styles/index.scss';

import Link from '@components/UI/atoms/link/link.comp';

import { IconSizeEnum } from '@components/UI/atoms/icon/icon.enum';

import Text from '@components/UI/atoms/text/text.comp';
import {
	TextAsEnum,
	TextLineHeightEnum,
} from '@components/UI/atoms/text/text.enum';

import { KnobProps } from './knob.type';

function Knob(props: KnobProps) {
	const { Icon, children, to, className } = props;

	return (
		<Link to={to} className={[className, 'knob__link'].join(' ')}>
			<>
				<Icon className="knob__icon" size={IconSizeEnum.L} />
				<Text as={TextAsEnum.span} className="knob__text">
					{children}
				</Text>
			</>
		</Link>
	);
}

export default Knob;
