import Footer from '@components/UI/organisms/footer/footer.comp';
import Header from '@components/UI/organisms/header/header.comp';

export type DefaultProps = {
	routes: React.ReactNode;
};

function Default({ routes }: DefaultProps) {
	return (
		<>
			<Header />
			{routes}
			<Footer />
		</>
	);
}

export default Default;
