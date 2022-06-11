/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import './styles/index.scss';

import { CSSTransition } from 'react-transition-group';

import { useAppDispatch, useAppSelector } from '@hooks/store/redux/use.redux';

import { setCategoriesStatus } from '@store/slices/app/app.slice';
import { takeCategoriesStatus } from '@store/slices/app/app.selectors';

import { otherPropsToString } from '@utils/components/props';

import { SidebarProps } from './sidebar.type';

/* 1. Настроить плавную анимацию, которая зависит от props */
/* 2. Добавить две анимации для состояния left, right */

function Sidebar(props: SidebarProps) {
	const { children, className, status, ...otherProps } = props;

	const categoriesStatus = useAppSelector(takeCategoriesStatus);

	const CSSTransitionDuration = 2000;

	const defaultProps = ['sidebar'];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	const dispatch = useAppDispatch();

	return (
		<CSSTransition
			in={categoriesStatus}
			timeout={CSSTransitionDuration}
			classNames="sidebar"
			unmountOnExit
		>
			<div className={setClassName}>
				<div
					className="sidebar__overlay"
					onClick={() =>
						dispatch(setCategoriesStatus(!categoriesStatus))
					}
				/>
				<div className="sidebar__window">{children}</div>
			</div>
		</CSSTransition>
	);
}

export default Sidebar;
