import './styles/index.scss';

import Link from '@components/UI/atoms/link/link.comp';
import Text from '@components/UI/atoms/text/text.comp';

import useIcons from '@hooks/components/icons/use.icons';

import { IconSizeEnum } from '../../atoms/icon/icon.enum';
import { TextAsEnum } from '../../atoms/text/text.enum';

function Menu() {
	const { Search, User, Heart, Shop } = useIcons();

	return (
		<div className="menu">
			<h1 className="visually-hidden">Меню приложения</h1>
			<ul className="menu__list list">
				<li className="menu__item list__item">
					<Link to="/" className="menu__link link">
						<>
							<Search
								className="menu__icon"
								size={IconSizeEnum.L}
							/>
							<Text as={TextAsEnum.span} className="menu__text">
								Искать
							</Text>
						</>
					</Link>
				</li>
				<li className="menu__item list__item">
					<Link to="/" className="menu__link link">
						<>
							<User
								className="menu__icon"
								size={IconSizeEnum.L}
							/>
							<Text as={TextAsEnum.span} className="menu__text">
								Вход
							</Text>
						</>
					</Link>
				</li>
				<li className="menu__item list__item">
					<Link to="/" className="menu__link link">
						<>
							<Heart
								className="menu__icon"
								size={IconSizeEnum.L}
							/>
							<Text as={TextAsEnum.span} className="menu__text">
								Избранное
							</Text>
						</>
					</Link>
				</li>
				<li className="menu__item list__item">
					<Link to="/" className="menu__link link">
						<>
							<Shop
								className="menu__icon"
								size={IconSizeEnum.L}
							/>
							<Text as={TextAsEnum.span} className="menu__text">
								Корзина
							</Text>
						</>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
