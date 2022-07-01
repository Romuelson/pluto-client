import { TabsDirectionEnum, TabsLineEnum } from './tabs.enum';

export type TabItem = {
	id: string;
	title: string;
	link: string;
};

export type TabsData = TabItem[];

// ---

export type TabProps = {
	item?: TabItem;
	className?: string;
	setActiveIdx: React.Dispatch<React.SetStateAction<string>>;
	setActiveWidth: React.Dispatch<React.SetStateAction<number>>;
	setOffset: React.Dispatch<React.SetStateAction<number>>;
	currentIdx: number;
	activeIdx: string;
};

// ---

export type TabListProps = {
	// children: JSX.Element;
	items: TabsData;
	className: string;
};

// ---

export type TabsProps = {
	data: TabsData;
	className?: string;
	tabsLine?: TabsLineEnum;
	tabsDirection?: TabsDirectionEnum;
};

// ---

export type TabMarkProps = {
	activeWidth: number;
	offset: number;
};
