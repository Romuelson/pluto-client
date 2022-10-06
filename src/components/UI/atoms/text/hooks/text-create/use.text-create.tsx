import { createElement } from 'react';

import Text from '@components/UI/atoms/text/text.comp';
import { UseTextCreate } from './text-create.type';

export const useTextCreate: UseTextCreate = () => (createView) => (args) =>
	createElement(Text, createView({ ...args }));
