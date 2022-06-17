import Categories from '@components/UI/organisms/categories/categories.comp';

import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

import {
	CategoriesDataEnum,
	CategoriesDisplayEnum,
	CategoriesViewEnum,
} from '@components/UI/organisms/categories/categories.enum';

function FooterCategories() {
	const { isMaxSwitchLow } = useSingleMediaQuery();

	return (
		<>
			{isMaxSwitchLow ? (
				<Categories
					className="footer__categories"
					view={CategoriesViewEnum.sidebar}
					data={CategoriesDataEnum.footer}
				/>
			) : (
				<Categories
					className="footer__categories"
					view={CategoriesViewEnum.navigation}
					data={CategoriesDataEnum.footer}
					display={CategoriesDisplayEnum.flex}
				/>
			)}
		</>
	);
}

export default FooterCategories;
