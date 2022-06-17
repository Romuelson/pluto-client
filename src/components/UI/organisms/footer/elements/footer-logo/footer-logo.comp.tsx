import useLogos from '@hooks/components/logos/use.logos';
import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

import {
	LogoChildrenEnum,
	LogoSizeEnum,
} from '@components/UI/molecules/logo/logo.enum';

function FooterLogo() {
	const { Brand } = useLogos();
	const { isMinSwitchLow } = useSingleMediaQuery();

	return (
		<>
			{!isMinSwitchLow ? (
				<Brand
					className="footer__logo"
					children={LogoChildrenEnum.default}
					logoIconSize={LogoSizeEnum.L}
				/>
			) : (
				<Brand
					className="footer__logo"
					logoIconSize={LogoSizeEnum.XL}
				/>
			)}
		</>
	);
}

export default FooterLogo;
