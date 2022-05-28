import chevron from '@svg/chevron.svg';
import menu from '@svg/menu.svg';
import search from '@svg/search.svg';
import close from '@svg/close.svg';
import check from '@svg/check.svg';
import user from '@svg/user.svg';
import options from '@svg/options.svg';
import heart from '@svg/heart.svg';
import heartFull from '@svg/heart-full.svg';
import shop from '@svg/shop.svg';
import inbox from '@svg/inbox.svg';

import withIcon from '../../../hocs/icon/with.icon';

export const useIcons = () => {
	const icons = {
		Chevron: withIcon(chevron),
		Menu: withIcon(menu),
		Search: withIcon(search),
		Close: withIcon(close),
		Check: withIcon(check),
		User: withIcon(user),
		Options: withIcon(options),
		Heart: withIcon(heart),
		HeartFull: withIcon(heartFull),
		Shop: withIcon(shop),
		Inbox: withIcon(inbox),
	};

	return icons;
};
