export type ComponentProps<T, K> = {
	children: T;
	key: string;
	config?: K;
};

export type UseListComponentProp<T, K> = (
	props: ComponentProps<T, K>
) => () => JSX.Element;

export type UseListDataProp<T> = Array<T | undefined>;

export type UseListProps<T, K = undefined> = {
	Component: UseListComponentProp<T, K>;
	data: UseListDataProp<T>;
	config?: K;
};
