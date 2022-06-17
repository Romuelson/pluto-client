import useLogos from '@hooks/components/logos/use.logos';
import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

import {
	LogoChildrenEnum,
	LogoSizeEnum,
} from '@components/UI/molecules/logo/logo.enum';

import {
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

function HeaderLogo() {
	const { Brand } = useLogos();

	const { isMaxSwitchMedium, isMaxMedium } = useSingleMediaQuery();
	const isSwitchAndMedium = !isMaxSwitchMedium && isMaxMedium;

	return (
		<>
			{/* maxWidth: 1155.98 */}
			{!isMaxSwitchMedium || <Brand />}

			{/* minWidth: 1156, maxWidth: 1365.98 */}
			{!isSwitchAndMedium || <Brand logoIconSize={LogoSizeEnum.M} />}

			{/* minWidth: 1366 */}
			{isMaxMedium || (
				<Brand
					children={LogoChildrenEnum.default}
					logoIconSize={LogoSizeEnum.XL}
					logoTextSize={TextSizeEnum.XS}
					logoTextLineHeight={TextLineHeightEnum.XXS}
				/>
			)}
		</>
	);
}

export default HeaderLogo;
