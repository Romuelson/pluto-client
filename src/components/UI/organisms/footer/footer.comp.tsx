import './styles/index.scss';

import Legal from '@components/UI/molecules/legal/legal.comp';
import FooterInfo from './elements/footer-info/footer-info.comp';
import FooterLogo from './elements/footer-logo/footer-logo.comp';
import FooterSocial from './elements/footer-social/footer-social.comp';
import FooterCategories from './elements/footer-categories/footer-categories.comp';

import { FooterProps } from './footer.type';

function Footer(props: FooterProps) {
	return (
		<div className="footer">
			<FooterLogo />
			<FooterCategories />
			<FooterSocial />
			<FooterInfo />
			<Legal className="footer__legal" />
		</div>
	);
}

export default Footer;
