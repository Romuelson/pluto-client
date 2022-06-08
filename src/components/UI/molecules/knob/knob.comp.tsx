import './styles/index.scss';

import Link from '@components/UI/atoms/link/link.comp';

import { IconSizeEnum } from '@components/UI/atoms/icon/icon.enum';

import Text from '@components/UI/atoms/text/text.comp';
import { TextAsEnum } from '@components/UI/atoms/text/text.enum';

import { KnobProps } from './knob.type';

function Knob(props: KnobProps) {
	const { Icon, children, to } = props;

	return (
		<Link to={to} className="knob__link link">
			<>
				<Icon className="knob__icon icon" size={IconSizeEnum.L} />
				<Text as={TextAsEnum.span} className="knob__text text">
					{children}
				</Text>
			</>
		</Link>
	);
}

export default Knob;
