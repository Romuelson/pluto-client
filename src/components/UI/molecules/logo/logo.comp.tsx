/* eslint-disable react/no-children-prop */

import './styles/index.scss';

import useComponentQuery from '@hooks/utils/component-query/use.component-query';

import LogoDefault from './views/logo-default/logo-default.comp';

import { LogoProps } from './logo.type';
import { LogoChildrenEnum, LogoSizeEnum } from './logo.enum';
import { TextLineHeightEnum, TextSizeEnum } from '../../atoms/text/text.enum';

function Logo(props: LogoProps) {
	const { children, ...otherProps } = props;

	const { MaxLow, SwitchMeduim, Medium } = useComponentQuery();

	return (
		<div className="logo">
			<MaxLow>
				<LogoDefault children={children} {...otherProps} />
			</MaxLow>
			<SwitchMeduim>
				<LogoDefault
					children={children}
					logoIconSize={LogoSizeEnum.M}
					{...otherProps}
				/>
			</SwitchMeduim>
			<Medium>
				<LogoDefault
					children={children || LogoChildrenEnum.default}
					logoIconSize={LogoSizeEnum.XL}
					logoTextSize={TextSizeEnum.XS}
					logoTextLineHeight={TextLineHeightEnum.XXS}
					{...otherProps}
				/>
			</Medium>
		</div>
	);
}

export default Logo;
