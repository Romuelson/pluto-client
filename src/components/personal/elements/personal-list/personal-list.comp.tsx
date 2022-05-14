/* Modules */
import { NavLink } from 'react-router-dom';

/* Hooks */
import { usePersonalList } from '../../../../hooks/personal/use.personal-list';

function PersonalList() {
	const { setRouterActive, data } = usePersonalList();

	return (
		<ul className="personal__list list">
			{data.map((item) => (
				<li key={item.id} className="personal__item list__item">
					<NavLink to={item.link} className={setRouterActive}>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	);
}

export default PersonalList;
