/* Modules */
import { Link } from 'react-router-dom';

/* Hooks */
import { useNavigationList } from '../../../../hooks/components/navigation/use.navigation-list';

type NavigationListProps = {
	children: JSX.Element | null;
};

function NavigationList({ children }: NavigationListProps) {
	const { data } = useNavigationList();

	return (
		<>
			<ul className="navigation__list list">
				{data.map((item) => (
					<li key={item.id} className="navigation__item list__item">
						<Link to={item.link} className="navigation__link link">
							{item.title}
						</Link>
					</li>
				))}
			</ul>
			{children}
		</>
	);
}

export default NavigationList;
