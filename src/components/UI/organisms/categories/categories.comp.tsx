import './styles/index.scss';

import Link from '@components/UI/atoms/link/link.comp';
import Text from '@components/UI/atoms/text/text.comp';

import { otherPropsToString } from '@utils/components/props';

import { CategoriesProps } from './categories.type';
import { categoriesMock } from './categories.mock';

import {
	TextAsEnum,
	TextFontEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '../../atoms/text/text.enum';
import { CategoriesViewEnum } from './categories.enum';

function Categories(props: CategoriesProps) {
	const {
		children,
		className,
		view = CategoriesViewEnum.navigation,
		...otherProps
	} = props;

	const { data } = categoriesMock();

	const defaultProps = ['categories', view];
	const setClassName = otherPropsToString(
		otherProps,
		defaultProps,
		className
	);

	return (
		<div className={setClassName}>
			<ul className="categories__list list">
				{data.map((item) => (
					<li key={item.id} className="categories__item list__item">
						<Link to={item.link} className="categories__link link">
							<Text
								className="categories__text"
								as={TextAsEnum.span}
								font={TextFontEnum.ForumRegular}
								size={TextSizeEnum.MLS}
								lineHeight={TextLineHeightEnum.XS}
							>
								{item.title}
							</Text>
						</Link>
					</li>
				))}
			</ul>
			{children}
		</div>
	);
}

export default Categories;
