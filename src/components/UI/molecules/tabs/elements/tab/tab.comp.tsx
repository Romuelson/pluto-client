/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useLocation } from 'react-router-dom';

import Link from '@components/UI/atoms/link/link.comp';
import Text from '@components/UI/atoms/text/text.comp';

import { LinkAsEnum } from '@components/UI/atoms/link/link.enum';

import {
	TextAlignEnum,
	TextAsEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

import { TabProps } from '../../tabs.type';

function Tab(props: TabProps) {
	const {
		item,
		className,
		setActiveIdx,
		setActiveWidth,
		setOffset,
		currentIdx,
	} = props;

	const { search } = useLocation();

	const setRouterActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? 'tab__link tab__link--active' : 'tab__link';

	return (
		<li
			className={[className, 'tab', 'list__item'].join(' ')}
			role="tab"
			onClick={(evt) => {
				// setActiveIdx depricated (example)
				setActiveIdx(evt.currentTarget.getAttribute('data-key') || '');

				setActiveWidth(evt.currentTarget.clientWidth);
				setOffset(evt.currentTarget.offsetLeft);
			}}
			data-key={currentIdx}
		>
			<Link
				as={LinkAsEnum.NavLink}
				to={`${item?.link}${search}`}
				className={setRouterActive}
			>
				<Text
					as={TextAsEnum.span}
					className="tab__text"
					size={TextSizeEnum.XS}
					textAlign={TextAlignEnum.center}
					lineHeight={TextLineHeightEnum.L}
				>
					{item?.title}
				</Text>
			</Link>
		</li>
	);
}

export default Tab;
