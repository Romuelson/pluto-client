/* Styles */
import './styles/index.scss';

/* Elements */
import InfoList from './elements/info-list/info-list.comp';
import InfoAddress from './elements/info-address/info-address.comp';

/* Thunks */
import { useInfo } from '../../hooks/components/info/use.info';

function Info() {
	const { addressList, activeButton, dispathActiveIndex, currentAddress } =
		useInfo();

	return (
		<div className="navigation__info info">
			<InfoList
				addressList={addressList}
				activeButton={activeButton}
				setActiveIndex={dispathActiveIndex}
			/>
			<InfoAddress currentAddress={currentAddress} />
		</div>
	);
}

export default Info;
