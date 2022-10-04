import { PromoListProps } from './promo-list.type';
import { usePromoList } from './use.promo-list';

function PromoList(props: PromoListProps) {
	const { children, config } = props;

	const promoList = usePromoList().createListItem({
		children,
		config: {
			className: config.className,
			list: config.list,
		},
	});

	const createList = (items: JSX.Element[]) => (
		<ul className="promo__list list">{items}</ul>
	);

	return createList(promoList);
}

export default PromoList;
