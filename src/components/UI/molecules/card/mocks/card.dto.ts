import { PathParams, RestRequest } from 'msw';
import { ECardServiceType } from './card.mock.enum';

class CardDto {
	label;

	constructor(model: RestRequest<never, PathParams>) {
		this.label =
			model.url.searchParams.get(ECardServiceType.section) ||
			`${ECardServiceType.all}`;
	}
}

export default CardDto;
