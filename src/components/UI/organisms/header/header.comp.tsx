import './styles/index.scss';

import HeaderNavigation from './elements/header-navigation/header-navigation.comp';
import HeaderSidebar from './elements/header-sidebar/header-sidebar.comp';

function Header() {
	return (
		<header className="header">
			<HeaderNavigation />
			<HeaderSidebar />
		</header>
	);
}

export default Header;
