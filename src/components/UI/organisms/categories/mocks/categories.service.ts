import { CategoriesListData } from '@store/slices/components/categories/categories.type';

import { categoriesMock } from './categories.mock';
import { CategoriesDataEnum } from '../categories.enum';

class CategoriesService {
	getData(section: CategoriesDataEnum) {
		const { header, footer } = categoriesMock();

		let data: CategoriesListData;

		switch (section) {
			case CategoriesDataEnum.header:
				data = header;
				break;

			case CategoriesDataEnum.footer:
				data = footer;
				break;

			// no default
		}

		return data;
	}
}

export default new CategoriesService();
