import useIcons from '@hooks/components/icons/use.icons';

import { BrowserSVG } from '../../icon.type';

function IconStories(props: BrowserSVG) {
	const { ...Icons } = useIcons();

	return (
		<div className="icon-stories__wrapper">
			<Icons.Chevron {...props} />
			<Icons.Menu {...props} />
			<Icons.Search {...props} />
			<Icons.Close {...props} />
			<Icons.Check {...props} />
			<Icons.User {...props} />
			<Icons.Options {...props} />
			<Icons.Heart {...props} />
			<Icons.HeartFull {...props} />
			<Icons.Shop {...props} />
			<Icons.Inbox {...props} />
			<Icons.Ellipse {...props} />
		</div>
	);
}

export default IconStories;
