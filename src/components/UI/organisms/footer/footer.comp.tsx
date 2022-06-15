import './styles/index.scss';

import useLogos from '@hooks/components/logos/use.logos';

import Categories from '../categories/categories.comp';

import { FooterProps } from './footer.type';
import { CategoriesViewEnum } from '../categories/categories.enum';

function Footer(props: FooterProps) {
	const { Brand } = useLogos();

	return (
		<div className="footer">
			<Brand />

			<Categories view={CategoriesViewEnum.sidebar} />
		</div>
	);
}

export default Footer;
