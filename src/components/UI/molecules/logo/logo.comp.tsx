/* eslint-disable react/no-children-prop */

import './styles/index.scss';

import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';
import LogoDefault from './views/logo-default/logo-default.comp';

import { LogoProps } from './logo.type';
import { LogoChildrenEnum, LogoSizeEnum } from './logo.enum';
import { TextLineHeightEnum, TextSizeEnum } from '../../atoms/text/text.enum';

function Logo(props: LogoProps) {
	const { children, ...otherProps } = props;

	const { isMaxSwitchMedium, isMaxMedium } = useSingleMediaQuery();
	const isSwitchAndMedium = !isMaxSwitchMedium && isMaxMedium;

	return (
		<div className="logo">
			{/* maxWidth: 1155.98 */}
			{!isMaxSwitchMedium || (
				<LogoDefault children={children} {...otherProps} />
			)}

			{/* minWidth: 1156, maxWidth: 1365.98 */}
			{!isSwitchAndMedium || (
				<LogoDefault
					children={children}
					logoIconSize={LogoSizeEnum.M}
					{...otherProps}
				/>
			)}

			{/* minWidth: 1366 */}
			{isMaxMedium || (
				<LogoDefault
					children={children || LogoChildrenEnum.default}
					logoIconSize={LogoSizeEnum.XL}
					logoTextSize={TextSizeEnum.XS}
					logoTextLineHeight={TextLineHeightEnum.XXS}
					{...otherProps}
				/>
			)}
		</div>
	);
}

export default Logo;
