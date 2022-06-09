/* eslint-disable react/no-children-prop */

import './styles/index.scss';

import { useMediaQuery } from 'react-responsive';

import useLogos from '@hooks/components/logos/use.logos';
import useKnob from '@hooks/components/knob/use.knob';

import Menu from '../menu/menu.comp';

function Header() {
	const { Brand } = useLogos();

	const { collections } = useKnob();
	const { KnobMenu } = collections;

	const isLowScreen = useMediaQuery({ maxWidth: 639.98 });
	const isMediumScreen = useMediaQuery({ maxWidth: 1155.98 });

	const isKnobMenu = !isLowScreen && isMediumScreen;

	return (
		<header className="header">
			<Brand />
			{!isKnobMenu ? <KnobMenu /> : null}
			<Menu children={isKnobMenu ? KnobMenu : undefined} />
		</header>
	);
}

export default Header;
