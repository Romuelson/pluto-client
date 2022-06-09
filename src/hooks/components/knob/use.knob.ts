import Knob from '@components/UI/molecules/knob/knob.comp';
import useIcons from '@hooks/components/icons/use.icons';

const useKnob = () => {
	const { Search, User, Heart, Shop, Menu } = useIcons();

	const collections = {
		KnobSearch: () =>
			Knob({
				Icon: Search,
				children: 'Искать',
				to: '/',
				className: 'knob__search',
			}),
		KnobUser: () =>
			Knob({
				Icon: User,
				children: 'Вход',
				to: '/',
				className: 'knob__user',
			}),
		KnobHeart: () =>
			Knob({
				Icon: Heart,
				children: 'Избранное',
				to: '/',
				className: 'knob__heart',
			}),
		KnobShop: () =>
			Knob({
				Icon: Shop,
				children: 'Корзина',
				to: '/',
				className: 'knob__shop',
			}),
		KnobMenu: () =>
			Knob({
				Icon: Menu,
				children: 'Меню',
				to: '/',
				className: 'knob__menu',
			}),
	};

	const keys = Object.keys(collections) as Array<keyof typeof collections>;

	const list = keys.map((item) => {
		return collections[item];
	});

	return { collections, keys, list };
};

export type UseKnobType = ReturnType<typeof useKnob>;

export default useKnob;
