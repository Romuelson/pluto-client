import { UsePromoItem } from './use.promo-item';

import { PromoItemProps } from './promo-item.type';
import { EPromoItemAs, EPromoItemViews } from './promo-item.enum';

function PromoItem(props: PromoItemProps) {
	const { className, children, config } = props;
	const { as, item, views = EPromoItemViews.default } = config;

	const Tag = as || EPromoItemAs.li;

	const { createContext } = UsePromoItem();

	return (
		<Tag className={className} key={config.item?.id}>
			{item ? createContext(item, views) : children}
		</Tag>
	);
}

export default PromoItem;
