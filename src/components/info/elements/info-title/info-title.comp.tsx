/* Hooks */
import { useInfoDispath } from '../../../../hooks/components/info/use.info.dispath';
import { useInfoSelector } from '../../../../hooks/components/info/use.info.selector';

/* Types */
import { InfoAddressContent } from '../../../../store/slices/components/info/info.type';

/* Enums */
import { InfoTypeStyle } from '../../info.enum';

type InfoTitleProps = {
	index: number;
	item: InfoAddressContent;
};

function InfoTitle({ item, index }: InfoTitleProps) {
	const { dispathActiveIndex } = useInfoDispath();
	const { listType, activeButton } = useInfoSelector();

	const defineListType = () => {
		switch (listType) {
			case InfoTypeStyle.A:
				return <span className="info__title title">{item.title}</span>;
			default:
				return (
					<button
						className={
							activeButton === index
								? 'info__button info__button--active button'
								: 'info__button button'
						}
						type="button"
						onClick={() => dispathActiveIndex(index)}
					>
						{item.title}
					</button>
				);
		}
	};

	return <>{defineListType()}</>;
}

export default InfoTitle;
