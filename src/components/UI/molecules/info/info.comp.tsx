import './styles/index.scss';

import { useInfoMount } from '@hooks/components/info/use.info.mount';
import { useInfoSelector } from '@hooks/components/info/use.info.selector';

import { InfoProps } from './info.type';
import { InfoTypeEnums } from './info.enum';

import InfoList from './elements/info-list/info-list.comp';
import InfoAddress from './elements/info-address/info-address.comp';

function Info({ type = InfoTypeEnums.navigation }: InfoProps) {
	useInfoMount(type);

	const { currentAddress } = useInfoSelector();

	const defineType = () => {
		switch (type) {
			case InfoTypeEnums.categories:
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

	return <div className="navigation__info info">{defineType()}</div>;
}

export default Info;
