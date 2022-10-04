/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import './styles/index.scss';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/store/redux/use.redux';

import useKnob from '@hooks/components/knob/use.knob';

import { takeCategoriesStatus } from '@store/slices/app/app.selectors';
import { setCategoriesStatus } from '@store/slices/app/app.slice';

import { HamburgerProps } from './hamburger.type';

function Hamburger({ className }: HamburgerProps) {
	const { collections } = useKnob();
	const { KnobMenu, KnobCloseMenu } = collections;

	const dispatch = useAppDispatch();
	const status = useAppSelector(takeCategoriesStatus);

	useEffect(() => {
		const page = document.querySelector('.page');

		status
			? page?.classList.add('overflow-hidden')
			: page?.classList.remove('overflow-hidden');
	}, [status]);

	return (
		<div
			className={[className, 'hamburger'].join(' ')}
			onClick={() => dispatch(setCategoriesStatus(!status))}
		>
			{!status ? <KnobMenu /> : <KnobCloseMenu />}
		</div>
	);
}

export default Hamburger;
