import './styles/index.scss';

import useLogos from '@hooks/components/logos/use.logos';
import { LogoSizeEnum } from '../../molecules/logo/logo.enum';
import { IconColorEnum } from '../../atoms/icon/icon.enum';

function Header() {
	const { Brand } = useLogos();

	return (
		<div className="header">
			<Brand logoSize={LogoSizeEnum.S} logoColor={IconColorEnum.Brand} />
		</div>
	);
}

export default Header;
