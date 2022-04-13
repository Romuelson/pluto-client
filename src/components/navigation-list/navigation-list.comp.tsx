/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use.redux';
import { getNavigationStatus } from '../../store/slices/app/app.selectors';

function NavigationList() {
	const status = useAppSelector(getNavigationStatus);

	/*
		Произвести прогрессивную оптимизацию в сторону
		взаимодействия react router dom
	*/

	useEffect(() => {
		const nav = document.querySelector('.navigation__list');
		const navOpen = document.querySelector('.navigation__list--open');

		if (status) {
			nav?.classList.remove('visually-hidden');
			// nav?.classList.remove('navigation__list--closed');
			nav?.classList.add('navigation__list--open');
		} else if (navOpen) {
			nav?.classList.remove('navigation__list--open');
			nav?.classList.add('navigation__list--closed');

			setTimeout(() => {
				nav?.classList.add('visually-hidden');
				nav?.classList.remove('navigation__list--closed');
			}, 800);
		}
	});

	return (
		<ul className="list navigation__list visually-hidden">
			<li className="navigation__item list__item">
				<Link to="0" className="navigation__link link">
					Нижнее бельё
				</Link>
			</li>
			<li className="navigation__item list__item">
				<Link to="0" className="navigation__link link">
					Купальники
				</Link>
			</li>
			<li className="navigation__item list__item">
				<Link to="0" className="navigation__link link">
					Домашняя одежда
				</Link>
			</li>
			<li className="navigation__item list__item">
				<Link to="0" className="navigation__link link">
					Носочно-чулочные изделия
				</Link>
			</li>
			<li className="navigation__item list__item">
				<Link to="0" className="navigation__link link">
					Пляжная одежда
				</Link>
			</li>
			<li className="navigation__item list__item">
				<Link to="0" className="navigation__link link">
					Аксессуары
				</Link>
			</li>
			<li className="navigation__item list__item">
				<Link to="0" className="navigation__link link">
					Мужчинам
				</Link>
			</li>
			<li className="navigation__item list__item">
				<Link to="0" className="navigation__link link">
					Детям
				</Link>
			</li>
			<li className="navigation__item list__item">
				<Link to="0" className="navigation__link link">
					SALE
				</Link>
			</li>
		</ul>
	);
}

export default NavigationList;
