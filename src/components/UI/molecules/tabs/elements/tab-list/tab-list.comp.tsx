/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import { TabListProps } from '../../tabs.type';

import Tab from '../tab/tab.comp';
import TabLine from '../tab-mark/tab-mark.comp';

function TabList(props: TabListProps) {
	const { items, className } = props;

	const [activeIdx, setActiveIdx] = useState('0');
	const [activeWidth, setActiveWidth] = useState(108);
	const [offset, setOffset] = useState(0);

	return (
		<ul className={[className, 'tablist', 'list'].join(' ')} role="tablist">
			{items.map((item, index) => (
				<Tab
					key={item.id}
					className="tabs__tab"
					item={item}
					currentIdx={index}
					activeIdx={activeIdx}
					setActiveIdx={setActiveIdx}
					setActiveWidth={setActiveWidth}
					setOffset={setOffset}
				/>
			))}
			<TabLine activeWidth={activeWidth} offset={offset} />
		</ul>
	);
}

export default TabList;
