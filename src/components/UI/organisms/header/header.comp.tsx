/* eslint-disable react/no-children-prop */

import './styles/index.scss';

import useLogos from '@hooks/components/logos/use.logos';
import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

import Hamburger from '@components/UI/molecules/hamburger/hamburger.comp';

import Menu from '../menu/menu.comp';
import Sidebar from '../sidebar/sidebar.comp';
import Categories from '../categories/categories.comp';

import { CategoriesViewEnum } from '../categories/categories.enum';
import { SidebarPositionEnum } from '../sidebar/sidebar.enum';

function Header() {
	const { Brand } = useLogos();

	const {
		isMaxSwitchLow,
		isMaxSwitchMedium,
		isMinMedium,
		isUnionSwitchMedium,
	} = useSingleMediaQuery();

	/* minWidth: 640, maxWidth: 1155.98 */
	const isHamburger = !isMaxSwitchLow && isMaxSwitchMedium;

	/* minWidth: 1156, maxWidth: 1365.98 */
	// const isSidebar = isMaxSwitchMedium && isMaxMedium;

	return (
		<header className="header">
			<nav className="header__navigation">
				<Brand />

				{isHamburger || <Hamburger className="header__hamburger" />}
				<Menu children={isHamburger ? Hamburger : undefined} />

				{!isMinMedium || <Categories className="header__categories" />}
			</nav>

			{/* maxWidth: 1155.98 */}
			{!isMaxSwitchMedium || (
				<Sidebar className="header__sidebar">
					<Categories view={CategoriesViewEnum.sidebar} />
				</Sidebar>
			)}

			{/* minWidth: 1156, maxWidth: 1365.98 */}
			{!isUnionSwitchMedium || (
				<Sidebar
					className="header__sidebar"
					position={SidebarPositionEnum.left}
				>
					<Categories view={CategoriesViewEnum.sidebar} />
				</Sidebar>
			)}
		</header>
	);
}

export default Header;
