import { infoRouter } from '@mocks/components/info/info.router';

import { cardRouter } from '@components/UI/molecules/card/mocks/card.router';
import { categoriesRouter } from '@components/UI/organisms/categories/mocks/categories.router';
import { specialRouter } from '@components/UI/organisms/special/mocks/special.router';

export const handlers = [
	...cardRouter,
	...infoRouter,
	...categoriesRouter,
	...specialRouter,
];
