import { SidebarPositionEnum } from './sidebar.enum';

export type SidebarProps = {
	children: JSX.Element;
	className: string;
	status?: boolean;
	position?: SidebarPositionEnum;
};
