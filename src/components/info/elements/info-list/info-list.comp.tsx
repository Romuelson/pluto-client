/* eslint-disable react/require-default-props */

/* Modules */
import { cloneElement } from 'react';

/* Elements */
import InfoTitle from '../info-title/info-title.comp';

/* Hooks */
import { useInfoSelector } from '../../../../hooks/components/info/use.info.selector';

export type InfoListProps = {
	children?: JSX.Element;
};

function InfoList({ children }: InfoListProps) {
	const { addressList } = useInfoSelector();

	return (
		<ul className="info__list list">
			{addressList.map((item, index) => (
				<li key={item.id} className="info__item list__item">
					<InfoTitle item={item} index={index} />
					{children
						? cloneElement(children, {
								currentAddress: addressList[index],
						  })
						: null}
				</li>
			))}
		</ul>
	);
}

export default InfoList;
