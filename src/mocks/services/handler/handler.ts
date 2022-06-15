import { productCardRouter } from '@mocks/data/product-card/product-card.router';
import { infoRouter } from '@mocks/components/info/info.router';
import { categoriesRouter } from '@components/UI/organisms/categories/mocks/categories.router';

export const handlers = [
	...productCardRouter,
	...infoRouter,
	...categoriesRouter,
];
