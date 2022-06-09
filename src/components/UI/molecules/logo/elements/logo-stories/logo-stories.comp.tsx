import useLogos from '@src/hooks/components/logos/use.logos';
import { LogoProps } from '../../logo.type';

function LogoStories(props: LogoProps) {
	const { Brand } = useLogos();

	return (
		<div className="logo__stories">
			<Brand {...props} />
		</div>
	);
}

export default LogoStories;
