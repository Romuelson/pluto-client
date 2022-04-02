/* Hooks */
import { useAppDispatch, useAppSelector } from '../../hooks/use.redux';
import { getNavigationStatus } from '../../store/slices/app/app.selectors';

/* Store - Actions */
import { navigationStatus } from '../../store/slices/app/app.slice';

function Hamburger() {
	const dispath = useAppDispatch();
	const status = useAppSelector(getNavigationStatus);

	// const foo = async () => {
	// 	const navigation = document.querySelector('.navigation__list');
	// 	if (status) {
	// 		// navigation?.classList.remove('visually-hidden');
	// 		navigation?.classList.remove('navigation__list--closed');
	// 		navigation?.classList.add('navigation__list--open');
	// 	} else {
	// 		navigation?.classList.remove('navigation__list--open');
	// 		navigation?.classList.add('navigation__list--closed');
	// 	}
	// 	return console.log('zbs');
	// };

	return (
		<button
			className={
				status
					? 'hamburger hamburger--collapse hamburger--open'
					: 'hamburger hamburger--collapse'
			}
			type="button"
			onClick={(evt) => {
				evt.preventDefault();
				dispath(navigationStatus(!status));
			}}
		>
			<span className="hamburger__box">
				<span className="hamburger__inner" />
			</span>
			<h4 className="hamburger__title">Меню</h4>
		</button>
	);
}

export default Hamburger;
