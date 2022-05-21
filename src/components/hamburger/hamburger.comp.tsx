/* Styles */
import './styles/index.scss';

/* Hooks */
import { useHamburger } from '../../hooks/components/hamburger/use.hamburger';
import { useApp } from '../../hooks/components/app/use.app';

function Hamburger() {
	const { reverseNavigationStatus, navigationStatus } = useApp();
	const { setClassName } = useHamburger();

	return (
		<button
			className={setClassName(navigationStatus)}
			type="button"
			onClick={() => reverseNavigationStatus(navigationStatus)}
		>
			<span className="hamburger__box">
				<span className="hamburger__inner" />
			</span>
			<h4 className="hamburger__title title">Меню</h4>
		</button>
	);
}

export default Hamburger;
