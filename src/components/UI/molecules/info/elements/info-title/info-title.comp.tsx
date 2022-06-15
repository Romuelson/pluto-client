import { useInfoDispath } from '@hooks/components/info/use.info.dispath';
import { useInfoSelector } from '@hooks/components/info/use.info.selector';
import { InfoTypeEnums } from '../../info.enum';

import { InfoTitleProps } from '../../info.type';

function InfoTitle({ item, index }: InfoTitleProps) {
	const { dispatchActiveIndex } = useInfoDispath();
	const { listType, activeButton } = useInfoSelector();

	const defineListType = () => {
		switch (listType) {
			case InfoTypeEnums.categories:
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
						onClick={() => dispatchActiveIndex(index)}
					>
						{item.title}
					</button>
				);
		}
	};

	return <>{defineListType()}</>;
}

export default InfoTitle;
