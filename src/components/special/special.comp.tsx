/* Modules */
import { Link } from 'react-router-dom';

/* Styles */
import './styles/index.scss';

function Special() {
	return (
		<section className="home__special special">
			<div className="special__info">
				<div className="special__content">
					<h4 className="special__title title">
						Записаться на Бра-фиттинг
					</h4>
					<p className="special__description description">
						Мы занимаемся подбором белья на большую грудь уже более
						10 лет и готовы подтвердить - да, это возможно.
					</p>
					<p className="special__description description">
						Удобно ли Вам в нем? Какие проблемы оно вызывает?
						<br />
						Мы разберемся, в чем источник дискомфорта – и предложим
						решение.
					</p>
				</div>
				<div className="special__controller">
					<Link to="!#" className="special__modal special__link link">
						Записаться
					</Link>
					<Link
						to="!#"
						className="special__redirrect special__link link"
					>
						Смотреть отзывы
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Special;
