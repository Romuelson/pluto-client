import Link from '@components/UI/atoms/link/link.comp';
import { InfoAddressProps } from '../../info.type';

function InfoAddress(props: InfoAddressProps) {
	const { currentAddress } = props;

	return (
		<>
			{currentAddress ? (
				<address className="info__address">
					{currentAddress.address.street}
					<br />
					<Link
						className="info__link link"
						to={`tel:${currentAddress.address.phone}`}
					>
						{currentAddress.address.phone}
					</Link>
				</address>
			) : null}
		</>
	);
}

export default InfoAddress;
