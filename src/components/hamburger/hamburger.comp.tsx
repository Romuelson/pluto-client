/* Styles */
import './styles/index.scss';

/* Hooks */
import { useHamburger } from '../../hooks/hamburger/use.hamburger';

function Hamburger() {
	const { setClassName, setNavigationStatus, getStatus } = useHamburger();

	return (
		<button
			className={setClassName(getStatus)}
			type="button"
			onClick={(evt) => setNavigationStatus(evt, getStatus)}
		>
			<span className="hamburger__box">
				<span className="hamburger__inner" />
			</span>
			<h4 className="hamburger__title title">Меню</h4>
		</button>
	);
}

export default Hamburger;
