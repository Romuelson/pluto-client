import Picture from '../../picture.comp';

import { PictureListProps } from '../../picture.type';

function PictureList({ className, config, display }: PictureListProps) {
	return (
		<>
			{config.map((item) => (
				<Picture
					className={className}
					config={item}
					display={display}
				/>
			))}
		</>
	);
}

export default PictureList;
