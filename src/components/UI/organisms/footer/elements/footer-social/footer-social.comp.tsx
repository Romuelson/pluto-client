import { LogoSizeEnum } from '@components/UI/molecules/logo/logo.enum';
import useLogos from '@hooks/components/logos/use.logos';

function FooterSocial() {
	const { Social } = useLogos();

	return <Social className="footer__social" logoIconSize={LogoSizeEnum.MS} />;
}

export default FooterSocial;
