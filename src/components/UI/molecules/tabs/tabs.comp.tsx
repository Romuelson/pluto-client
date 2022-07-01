import './styles/index.scss';

import { otherPropsToString } from '@utils/components/props';

import { TabsProps } from './tabs.type';
import { TabsDirectionEnum, TabsLineEnum } from './tabs.enum';

import TabList from './elements/tab-list/tab-list.comp';

function Tabs(props: TabsProps) {
	const {
		data,
		className,
		tabsLine = TabsLineEnum.bottom,
		tabsDirection = TabsDirectionEnum.row,
		...otherProps
	} = props;

	const defaultProps = [tabsLine, tabsDirection];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	return (
		<div className={setClassName}>
			<TabList className="tabs__tablist" items={data} />
		</div>
	);
}

export default Tabs;
