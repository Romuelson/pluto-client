import { Fragment } from 'react';

import { useSpecialText } from '../special-text/use.special-text';

import { SpecialContextProps } from './special-context.type';

function SpecialContext({ className, data, view }: SpecialContextProps) {
	const { createSpecialText } = useSpecialText();

	return (
		<div className={className}>
			{data.map(({ id, title, description }) => (
				<Fragment key={id}>
					{createSpecialText(view.title)({ children: title })}

					{description.map((content) => (
						<Fragment key={content.id}>
							{createSpecialText(view.description)({
								children: content.text,
							})}
						</Fragment>
					))}
				</Fragment>
			))}
		</div>
	);
}

export default SpecialContext;
