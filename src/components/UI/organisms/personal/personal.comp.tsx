import './styles/index.scss';

import Tabs from '@components/UI/molecules/tabs/tabs.comp';

import { useCard } from '@components/UI/molecules/card/use.card';

import { CardSizeEnum } from '@components/UI/molecules/card/card.enum';
import { ELabelSections } from '@components/UI/molecules/card/mocks/card.mock.enum';

import PersonalRoute from './routes/personal.route';
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
