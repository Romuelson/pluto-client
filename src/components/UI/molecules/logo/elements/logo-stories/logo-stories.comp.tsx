import useLogos from '@src/hooks/components/logos/use.logos';
import { WithProps } from '../../logo.type';

function LogoStories(props: WithProps) {
	const { Brand } = useLogos();

	return (
		<div className="logo__stories">
			<Brand {...props} />
		</div>
	);
}

export default LogoStories;
