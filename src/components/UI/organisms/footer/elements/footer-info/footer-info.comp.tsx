import Info from '@components/UI/molecules/info/info.comp';

import { InfoTypeEnums } from '@components/UI/molecules/info/info.enum';
import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

function FooterInfo() {
	const { isMinSwitchLow } = useSingleMediaQuery();

	return (
		<>
			{!isMinSwitchLow || (
				<Info
					className="footer__info"
					type={InfoTypeEnums.categories}
				/>
			)}
		</>
	);
}

export default FooterInfo;
