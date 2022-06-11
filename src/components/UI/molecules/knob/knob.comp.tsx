/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import './styles/index.scss';

import { useAppDispatch, useAppSelector } from '@hooks/store/redux/use.redux';

import Link from '@components/UI/atoms/link/link.comp';
import { IconSizeEnum } from '@components/UI/atoms/icon/icon.enum';

import Text from '@components/UI/atoms/text/text.comp';
import { TextAsEnum } from '@components/UI/atoms/text/text.enum';

import { KnobProps } from './knob.type';

function Knob(props: KnobProps) {
	const { Icon, children, className } = props;

	return (
		<div className={[className, 'knob'].join(' ')}>
			<Icon className="knob__icon" size={IconSizeEnum.L} />
			<Text as={TextAsEnum.span} className="knob__text">
				{children}
			</Text>
		</div>
	);
}

export default Knob;
