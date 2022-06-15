/* eslint-disable react/require-default-props */

import { useInfoSelector } from '@hooks/components/info/use.info.selector';
import { cloneElement } from 'react';

import { InfoListProps } from '../../info.type';
import InfoTitle from '../info-title/info-title.comp';

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
