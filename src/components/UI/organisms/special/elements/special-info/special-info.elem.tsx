import { useMediaQuery } from 'react-responsive';

import SpecialContext from '../special-context/special-context.elem';
import SpecialControl from '../special-control/special-control.elem';

import { SpecialInfoProps } from './special-info.type';

function SpecialInfo(props: SpecialInfoProps) {
	const desktop = useMediaQuery({ minWidth: 1024 });

	const { className, data, style, view } = props;

	const { context, control } = data;
	const { display, elements } = view;

	const contextArgs = { ...context, ...elements.context };
	const controlArgs = { ...control, ...elements.control };

	const createClassDisplay = (classDisplay: string) =>
		[classDisplay, ...Object.values(display)].join(' ');

	const changeStyle = {
		...view.style,
		backgroundImage: desktop
			? style.backgroundImage.desktop
			: style.backgroundImage.mobile,
	};

	return (
		<div
			className={[className, 'special__wrapper'].join(' ')}
			style={changeStyle}
		>
			<div className={createClassDisplay('special__info')}>
				<SpecialContext className="special__context" {...contextArgs} />
				<SpecialControl className="special__control" {...controlArgs} />
			</div>
		</div>
	);
}

export default SpecialInfo;
