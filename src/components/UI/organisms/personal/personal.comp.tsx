import './styles/index.scss';

import Tabs from '@components/UI/molecules/tabs/tabs.comp';

import PersonalRoute from './routes/personal.route';
import { personalMock } from './mocks/personal.mock';
import { PersonalProps } from './personal.type';

// Баг: при роутинке не меняется положение секции

function Personal({ className }: PersonalProps) {
	const { data } = personalMock();

	return (
		<section className={[className, 'personal'].join(' ')}>
			<Tabs className="personal__tabs" data={data} />
			<PersonalRoute />
		</section>
	);
}

export default Personal;
