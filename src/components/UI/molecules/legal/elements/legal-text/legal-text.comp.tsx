import Link from '@components/UI/atoms/link/link.comp';
import Text from '@components/UI/atoms/text/text.comp';

import {
	TextAsEnum,
	TextColorEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

import { LegalTextProps } from '../../legal.type';

function LegalText({ children, to }: LegalTextProps) {
	return (
		<Link to={to}>
			<Text
				as={TextAsEnum.span}
				size={TextSizeEnum.XS}
				color={TextColorEnum.Tooltip}
			>
				{children}
			</Text>
		</Link>
	);
}

export default LegalText;
