/* Modules */
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

/* Hooks */
import { usePersonalList } from '../../../../hooks/components/personal/use.personal-list';

function PersonalList() {
	const { setRouterActive, data } = usePersonalList();
	const { search } = useLocation();

	return (
		<ul className="personal__list list">
			{data.map((item) => (
				<li key={item.id} className="personal__item list__item">
					<NavLink
						to={`${item.link}${search}`}
						className={setRouterActive}
					>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	);
}

export default PersonalList;
