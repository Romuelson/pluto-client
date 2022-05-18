/* Styles */
import './styles/index.scss';

/* Elements */
import InfoList from './elements/info-list/info-list.comp';
import InfoAddress from './elements/info-address/info-address.comp';

/* Thunks */
import { useInfoSelector } from '../../hooks/components/info/use.info.selector';
import { InfoProps } from './info.type';

/* Enums */
import { InfoTypeStyle } from './info.enum';

/* Hooks */
import { useInfoMount } from '../../hooks/components/info/use.info.mount';

function Info({ type }: InfoProps) {
	useInfoMount(type);

	const { currentAddress } = useInfoSelector();

	const defineType = (typeStyle: InfoTypeStyle) => {
		switch (typeStyle) {
			case InfoTypeStyle.A:
				return (
					<InfoList>
						<InfoAddress />
					</InfoList>
				);
			default:
				return (
					<>
						<InfoList />
						<InfoAddress currentAddress={currentAddress} />
					</>
				);
		}
	};

	return <div className="navigation__info info">{defineType(type)}</div>;
}

export default Info;
