import Knob from '@components/UI/molecules/knob/knob.comp';
import useIcons from '@hooks/components/icons/use.icons';

const useKnob = () => {
	const { Search, User, Heart, Shop, Menu } = useIcons();

	const collections = {
		KnobSearch: () => Knob({ Icon: Search, children: 'Искать', to: '/' }),
		KnobUser: () => Knob({ Icon: User, children: 'Вход', to: '/' }),
		KnobHeart: () => Knob({ Icon: Heart, children: 'Избранное', to: '/' }),
		KnobShop: () => Knob({ Icon: Shop, children: 'Корзина', to: '/' }),
		KnobMenu: () => Knob({ Icon: Menu, children: 'Меню', to: '/' }),
	};

	const keys = Object.keys(collections) as Array<keyof typeof collections>;

	const list = keys.map((item) => {
		return collections[item];
	});

	return { collections, keys, list };
};

export type UseKnobType = ReturnType<typeof useKnob>;

export default useKnob;
