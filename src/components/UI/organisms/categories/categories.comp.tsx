import './styles/index.scss';

import { otherPropsToString } from '@utils/components/props';
import { useCategories } from './use.categories';

import CategoriesList from './elements/categories-list/categories-list.comp';
import { CategoriesProps } from './categories.type';

import {
	CategoriesDataEnum,
	CategoriesDisplayEnum,
	CategoriesViewEnum,
} from './categories.enum';

function Categories(props: CategoriesProps) {
	const {
		children,
		className,
		view = CategoriesViewEnum.navigation,
		data = CategoriesDataEnum.header,
		display = CategoriesDisplayEnum.block,
		...otherProps
	} = props;

	const { responce } = useCategories({ data });

	const defaultProps = ['categories', view, display];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	return (
		<div className={setClassName}>
			{data === CategoriesDataEnum.footer ? (
				<CategoriesList data={responce.footer.data} />
			) : (
				<CategoriesList data={responce.header.data} />
			)}
			{children}
		</div>
	);
}

export default Categories;
