/* eslint-disable react/no-children-prop */

import './styles/index.scss';

import useLogos from '@hooks/components/logos/use.logos';
import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

import Hamburger from '@components/UI/molecules/hamburger/hamburger.comp';
import Info from '@components/UI/molecules/info/info.comp';
import { InfoTypeEnums } from '@components/UI/molecules/info/info.enum';

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
		isUnionSwitchLow,
		isUnionSwitchMedium,
	} = useSingleMediaQuery();

	return (
		<header className="header">
			<nav className="header__navigation">
				{!isMinMedium || <Info />}

				<Brand />

				{/* maxWidth: 640, (min-width: 1156, maxWidth: 1365.98 */}
				{(!isMaxSwitchLow && !isUnionSwitchMedium) || (
					<Hamburger className="header__hamburger" />
				)}

				{/* min-width: 640, maxWidth: 1155.98 */}
				<Menu children={isUnionSwitchLow ? Hamburger : undefined} />
				{!isMinMedium || <Categories className="header__categories" />}
			</nav>

			{/* maxWidth: 1155.98 */}
			{!isMaxSwitchMedium || (
				<Sidebar className="header__sidebar">
					<Categories view={CategoriesViewEnum.sidebar}>
						<Info type={InfoTypeEnums.categories} />
					</Categories>
				</Sidebar>
			)}

			{/* minWidth: 1156, maxWidth: 1365.98 */}
			{!isUnionSwitchMedium || (
				<Sidebar
					className="header__sidebar"
					position={SidebarPositionEnum.top}
				>
					<Categories view={CategoriesViewEnum.sidebar}>
						<Info type={InfoTypeEnums.categories} />
					</Categories>
				</Sidebar>
			)}
		</header>
	);
}

export default Header;
