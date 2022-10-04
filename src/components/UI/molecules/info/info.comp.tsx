import './styles/index.scss';

import { useInfoMount } from '@hooks/components/info/use.info.mount';
import { useInfoSelector } from '@hooks/components/info/use.info.selector';

import { InfoProps } from './info.type';
import { InfoTypeEnums } from './info.enum';

import InfoList from './elements/info-list/info-list.comp';
import InfoAddress from './elements/info-address/info-address.comp';

function Info(props: InfoProps) {
	const { className, type = InfoTypeEnums.navigation, recipient } = props;

	useInfoMount(recipient, type);

	const { currentAddress } = useInfoSelector({ recipient });

	const defineType = () => {
		switch (type) {
			case InfoTypeEnums.categories:
				return (
					<InfoList recipient={recipient}>
						<InfoAddress />
					</InfoList>
				);
			default:
				return (
					<>
						<InfoList recipient={recipient} />
						<InfoAddress currentAddress={currentAddress} />
					</>
				);
		}
	};

	return <div className={[className, 'info'].join(' ')}>{defineType()}</div>;
}

export default Info;
