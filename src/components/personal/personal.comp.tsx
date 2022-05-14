/* Styles */
import './styles/index.scss';

/* Routes */
import PersonalRoute from '../../routes/personal/personal.route';

/* Components */
import PersonalList from './elements/personal-list/personal-list.comp';

function Personal() {
	return (
		<section className="home__personal personal">
			<PersonalList />
			<PersonalRoute />
		</section>
	);
}

export default Personal;
