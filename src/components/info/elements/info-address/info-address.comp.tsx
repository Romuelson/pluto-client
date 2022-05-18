import { InfoAddressProps } from '../../info.type';

function InfoAddress(props: InfoAddressProps) {
	const { currentAddress } = props;

	return (
		<>
			{currentAddress ? (
				<address className="info__address">
					{currentAddress.address.street}
					<br />
					<a
						className="info__link link"
						href={`tel:${currentAddress.address.phone}`}
					>
						{currentAddress.address.phone}
					</a>
				</address>
			) : null}
		</>
	);
}

export default InfoAddress;
