/* Modules */
import { Link } from 'react-router-dom';

/* Styles */
import './styles/index.scss';

/* Images */
import ImageLogo from '../../../public/assets/images/common/logo/logo.svg';

function Logo() {
	return (
		<div className="logo">
			<Link className="logo__link link" to="/">
				<ImageLogo className="logo__image" />
				Жизнь - яркая штука!
			</Link>
		</div>
	);
}

export default Logo;
