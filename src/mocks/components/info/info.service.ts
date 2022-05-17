/* Mocks */
import { infoMock } from './info.mock';

class InfoService {
	getData() {
		const { data } = infoMock();

		return data;
	}
}

export default new InfoService();
