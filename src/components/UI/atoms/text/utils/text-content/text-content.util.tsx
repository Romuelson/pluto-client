import { Fragment } from 'react';

import { useTextCreate } from '../../hooks/text-create/use.text-create';
import { TextContentProps } from './text-content.type';

function TextContent({ className, data, view }: TextContentProps) {
	const createText = useTextCreate();

	const TextTitle = createText(view.title);
	const TextDescription = createText(view.description);

	return (
		<div className={className}>
			{data.map(({ id, title, description }) => (
				<Fragment key={id}>
					<TextTitle children={title} />

					{description.map((content) => (
						<Fragment key={content.id}>
							<TextDescription children={content.text} />
						</Fragment>
					))}
				</Fragment>
			))}
		</div>
	);
}

export default TextContent;
