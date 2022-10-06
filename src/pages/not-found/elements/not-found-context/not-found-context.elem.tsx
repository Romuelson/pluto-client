import TextContent from '@components/UI/atoms/text/utils/text-content/text-content.util';

import { NotFoundContextProps } from './not-found-context.type';

function NotFoundContext(props: NotFoundContextProps) {
	const { className, data, view } = props;

	const { content } = data;
	const { display, elements } = view;

	const contentArgs = { ...content, ...elements.content };
	// const controlArgs = { ...control, ...elements.control };

	const createClassDisplay = () =>
		[className, ...Object.values(display)].join(' ');

	return (
		<section className={createClassDisplay()}>
			<TextContent className="not-found__content" {...contentArgs} />
		</section>
	);
}

export default NotFoundContext;
