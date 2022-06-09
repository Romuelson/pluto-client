import './styles/index.scss';

import useKnob from '@hooks/components/knob/use.knob';

import { MenuProps } from './menu.type';

function Menu({ children }: MenuProps) {
	const { collections } = useKnob();

	const knobs = [
		collections.KnobSearch,
		collections.KnobUser,
		collections.KnobHeart,
		collections.KnobShop,
	];

	if (children) {
		knobs.push(children);
	}

	return (
		<div className="menu">
			<h1 className="visually-hidden">Меню приложения</h1>
			<ul className="menu__list list">
				{knobs.map((Item) => (
					<li className="menu__item list__item">
						<Item />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Menu;
