import Info from '@components/UI/molecules/info/info.comp';
import Menu from '@components/UI/organisms/menu/menu.comp';
import Hamburger from '@components/UI/molecules/hamburger/hamburger.comp';
import Categories from '@components/UI/organisms/categories/categories.comp';

import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';
import { CategoriesDisplayEnum } from '@components/UI/organisms/categories/categories.enum';

import { InfoListRecipientEnum } from '@store/slices/components/info/info.thunk';
import HeaderLogo from '../header-logo/header-logo.comp';

function HeaderNavigation() {
	const {
		isMaxSwitchLow,
		isMinMedium,
		isUnionSwitchLow,
		isUnionSwitchMedium,
	} = useSingleMediaQuery();

	return (
		<nav className="header__navigation">
			{!isMinMedium || (
				<Info
					className="header__info"
					recipient={InfoListRecipientEnum.header}
				/>
			)}

			<HeaderLogo />

			{/* maxWidth: 640, (min-width: 1156, maxWidth: 1365.98 */}
			{(!isMaxSwitchLow && !isUnionSwitchMedium) || (
				<Hamburger className="header__hamburger" />
			)}

			{/* min-width: 640, maxWidth: 1155.98 */}
			<Menu
				children={isUnionSwitchLow ? () => <Hamburger /> : undefined}
			/>

			{!isMinMedium || (
				<Categories
					className="header__categories"
					display={CategoriesDisplayEnum.flex}
				/>
			)}
		</nav>
	);
}

export default HeaderNavigation;
