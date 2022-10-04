import { PictureProps } from './picture.type';

function Picture({ className, config, display }: PictureProps) {
	return (
		<picture className={className}>
			{config.picture.source.map(({ media, srcSet }) => (
				<source media={media} srcSet={srcSet} />
			))}
			<img
				className="picture__img"
				src={config.picture.img.src}
				alt={config.picture.img.alt}
			/>
		</picture>
	);
}

export default Picture;
