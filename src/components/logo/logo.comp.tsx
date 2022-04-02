import { Link } from 'react-router-dom';
import ImageLogo from '../../../public/images/common/logo.svg';

function Logo() {
	return (
		<div className="logo">
			<Link className="logo__link" to="0">
				<ImageLogo className="logo__image" />
			</Link>
		</div>
	);
}

export default Logo;
