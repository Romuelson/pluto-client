// import SpecialModel from './special.model';

import { specialMock } from './mock/special.mock';
import { SpecialGetInfo } from './mock/special.mock.type';

class SpecialService {
	getAll() {
		return specialMock();
	}

	getInfo({ recipient }: SpecialGetInfo) {
		switch (recipient) {
			default:
				return this.getAll().home;
		}
	}
}

export default new SpecialService();
