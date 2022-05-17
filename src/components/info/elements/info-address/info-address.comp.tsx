import { InfoAddressContent } from '../../../../store/slices/components/info/info.type';

export type InfoAddressProps = {
	currentAddress: InfoAddressContent;
};

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
