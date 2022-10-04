import './styles/index.scss';

import SpecialInfo from './elements/special-info/special-info.elem';
import { SpecialProps } from './special.type';

function Special({ className, data }: SpecialProps) {
	const { listInfo, view } = data.info;

	return (
		<section className={[className, 'special'].join(' ')}>
			{listInfo.map((item) => (
				<SpecialInfo key={item.id} view={view} {...item} />
			))}
		</section>
	);
}

export default Special;
