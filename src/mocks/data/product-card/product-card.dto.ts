import { PathParams, RestRequest } from 'msw';

class ProductCardDto {
	label;

	constructor(model: RestRequest<never, PathParams>) {
		this.label = model.url.searchParams.get('section');
	}
}

export default ProductCardDto;
