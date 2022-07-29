import { ComponentProps } from '@hooks/utils/list/list.type';

export type WithComponentArgs<T, K = undefined> = {
	Component: (props: ComponentProps<T, K>) => () => JSX.Element;
	children: T;
	key: string;
	config?: K;
};
