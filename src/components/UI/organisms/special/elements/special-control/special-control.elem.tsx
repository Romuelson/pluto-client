import { Fragment } from 'react';

import { useSpecialText } from '../special-text/use.special-text';
import { useSpecialButton } from '../special-button/use.special-button';

import { SpecialControlProps } from './special-control.type';

function SpecialControl(props: SpecialControlProps) {
	const { className, data, view } = props;
	const { display, elements } = view;

	const { createSpecialText } = useSpecialText();
	const { createSpecialButton } = useSpecialButton();

	return (
		<div className={[className, ...Object.values(display)].join(' ')}>
			{data.map(({ id, title }, index) => (
				<Fragment key={id}>
					{createSpecialButton(elements[index].view)({
						children: createSpecialText(elements[index].title)({
							children: title,
						}),
					})}
				</Fragment>
			))}
		</div>
	);
}

export default SpecialControl;
