import useLogos from '@src/hooks/components/logos/use.logos';

function Header() {
	const { Brand } = useLogos();
	/* Прописать размеры для Logo */
	return (
		<div className="header">
			<Brand />
		</div>
	);
}

export default Header;
