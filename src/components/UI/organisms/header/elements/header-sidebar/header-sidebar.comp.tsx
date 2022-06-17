import Info from '@components/UI/molecules/info/info.comp';
import Sidebar from '@components/UI/organisms/sidebar/sidebar.comp';
import Categories from '@components/UI/organisms/categories/categories.comp';

import { InfoTypeEnums } from '@components/UI/molecules/info/info.enum';
import { CategoriesViewEnum } from '@components/UI/organisms/categories/categories.enum';
import { SidebarPositionEnum } from '@components/UI/organisms/sidebar/sidebar.enum';

import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

function HeaderSidebar() {
	const { isMaxSwitchMedium, isUnionSwitchMedium } = useSingleMediaQuery();

	return (
		<>
			{/* maxWidth: 1155.98 */}
			{!isMaxSwitchMedium || (
				<Sidebar className="header__sidebar">
					<Categories
						className="header__categories"
						view={CategoriesViewEnum.sidebar}
					>
						<Info
							className="header__info"
							type={InfoTypeEnums.categories}
						/>
					</Categories>
				</Sidebar>
			)}
			{/* minWidth: 1156, maxWidth: 1365.98 */}
			{!isUnionSwitchMedium || (
				<Sidebar
					className="header__sidebar"
					position={SidebarPositionEnum.top}
				>
					<Categories
						className="header__categories"
						view={CategoriesViewEnum.sidebar}
					>
						<Info
							className="header__info"
							type={InfoTypeEnums.categories}
						/>
					</Categories>
				</Sidebar>
			)}
		</>
	);
}

export default HeaderSidebar;
