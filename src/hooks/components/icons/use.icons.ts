import chevron from '@icons/svg/chevron.svg';
import menu from '@icons/svg/menu.svg';
import search from '@icons/svg/search.svg';
import close from '@icons/svg/close.svg';
import check from '@icons/svg/check.svg';
import user from '@icons/svg/user.svg';
import options from '@icons/svg/options.svg';
import heart from '@icons/svg/heart.svg';
import heartFull from '@icons/svg/heart-full.svg';
import shop from '@icons/svg/shop.svg';
import inbox from '@icons/svg/inbox.svg';
import ellipse from '@icons/svg/ellipse.svg';

import withSVG from '@hocs/svg/with.svg';
import Icon from '@components/UI/atoms/icon/icon.comp';

const useIcons = () => {
	const collections = {
		Chevron: withSVG(Icon, chevron),
		Menu: withSVG(Icon, menu),
		Search: withSVG(Icon, search),
		Close: withSVG(Icon, close),
		Check: withSVG(Icon, check),
		User: withSVG(Icon, user),
		Options: withSVG(Icon, options),
		Heart: withSVG(Icon, heart),
		HeartFull: withSVG(Icon, heartFull),
		Shop: withSVG(Icon, shop),
		Inbox: withSVG(Icon, inbox),
		Ellipse: withSVG(Icon, ellipse),
	};

	return collections;
};

export type UseIconsType = ReturnType<typeof useIcons>;

export default useIcons;
