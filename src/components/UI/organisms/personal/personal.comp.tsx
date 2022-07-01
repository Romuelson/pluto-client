import Tabs from '@components/UI/molecules/tabs/tabs.comp';

import PersonalRoute from '@routes/personal/personal.route';

import { personalMock } from './mocks/personal.mock';

function Personal() {
	const { data } = personalMock();

	return (
		<section className="personal">
			<Tabs className="personal__tabs" data={data} />
			<PersonalRoute />
		</section>
	);
}

export default Personal;
