import Knob from '@components/UI/molecules/knob/knob.comp';
import useIcons from '@hooks/components/icons/use.icons';

const useKnob = () => {
	const { Search, User, Heart, Shop, Menu, Close } = useIcons();

	const collections = {
		KnobSearch: () =>
			Knob({
				Icon: Search,
				children: 'Искать',
				className: 'knob__search',
			}),
		KnobUser: () =>
			Knob({
				Icon: User,
				children: 'Вход',
				className: 'knob__user',
			}),
		KnobHeart: () =>
			Knob({
				Icon: Heart,
				children: 'Избранное',
				className: 'knob__heart',
			}),
		KnobShop: () =>
			Knob({
				Icon: Shop,
				children: 'Корзина',
				className: 'knob__shop',
			}),
		KnobMenu: () =>
			Knob({
				Icon: Menu,
				children: 'Меню',
				className: 'knob__menu',
			}),
		KnobCloseMenu: () =>
			Knob({
				Icon: Close,
				children: 'Меню',
				className: 'knob__menu',
			}),
		// KnobMenu: () => {
		// 	const dispatch = useAppDispatch();
		// 	const status = useAppSelector(takeCategoriesStatus);

		// 	return Knob({
		// 		Icon: Menu,
		// 		children: 'Меню',
		// 		className: 'knob__menu',
		// 		callbackDispatch: () => dispatch(setCategoriesStatus(!status)),
		// 	});
		// },
	};

	const keys = Object.keys(collections) as Array<keyof typeof collections>;

	const list = keys.map((item) => {
		return collections[item];
	});

	return { collections, keys, list };
};

export type UseKnobType = ReturnType<typeof useKnob>;

export default useKnob;
