import { Link } from 'react-router-dom';
import ImageLogo from '../../../public/images/common/logo/logo.svg';

function Logo() {
	return (
		<div className="logo">
			<Link className="logo__link" to="/">
				<ImageLogo className="logo__image" />
			</Link>
		</div>
	);
}

export default Logo;
