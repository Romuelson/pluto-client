import './styles/index.scss';

import useKnob from '@hooks/components/knob/use.knob';

function Menu() {
	const { collections } = useKnob();

	const knobs = [
		collections.KnobSearch,
		collections.KnobUser,
		collections.KnobHeart,
		collections.KnobShop,
	];

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
