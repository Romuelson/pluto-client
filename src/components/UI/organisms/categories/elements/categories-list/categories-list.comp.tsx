import Link from '@components/UI/atoms/link/link.comp';
import Text from '@components/UI/atoms/text/text.comp';

import {
	TextAsEnum,
	TextFontEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';
import { CategoriesListProps } from '../../categories.type';

function CategoriesList({ data }: CategoriesListProps) {
	return (
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
	);
}

export default CategoriesList;
