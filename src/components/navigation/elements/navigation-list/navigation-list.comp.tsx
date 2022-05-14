/* Modules */
import { Link } from 'react-router-dom';

/* Hooks */
import { useNavigationList } from '../../../../hooks/navigation/use.navigation-list';

function NavigationList() {
	const { setClassName, getStatus, data } = useNavigationList();

	return (
		<ul className={setClassName(getStatus)}>
			{data.map((item) => (
				<li key={item.id} className="navigation__item list__item">
					<Link to={item.link} className="navigation__link link">
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default NavigationList;
