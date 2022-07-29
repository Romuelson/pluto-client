import { useState } from 'react';

import { SwitchTransition, Transition } from 'react-transition-group';

import { TabMarkProps } from '../../tabs.type';

function TabMark({ activeWidth, offset }: TabMarkProps) {
	const duration = 300;

	const [prevOffset, setPrevOffset] = useState(offset);
	const [prevActiveWidth, setPrevActiveWidth] = useState(activeWidth);

	const defaultStyle = {
		width: `${prevActiveWidth}px`,

		transform: `translateX(${prevOffset}px)`,
		transition: `transform ${duration}ms ease-in-out, width ${duration}ms ease-in-out`,
	};

	const transitionStyles = {
		entering: {
			width: `${activeWidth}px`,
			transform: `translateX(${offset}px)`,
		},
		entered: {
			width: `${activeWidth}px`,
			transform: `translateX(${offset}px)`,
		},
	} as { [key: string]: React.CSSProperties };

	return (
		<SwitchTransition>
			<Transition
				timeout={{ appear: 0, enter: duration, exit: 0 }}
				classNames="tab__mark-"
				onEntered={() => {
					setPrevOffset(offset);
					setPrevActiveWidth(activeWidth);
				}}
			>
				{(state: string) => (
					<span
						className="tab__mark"
						style={{ ...defaultStyle, ...transitionStyles[state] }}
					/>
				)}
			</Transition>
		</SwitchTransition>
	);
}

export default TabMark;
