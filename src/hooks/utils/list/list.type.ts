export type ComponentProps<T, K = undefined> = {
	children: T;
	key: string;
	display?: K;
};

export type UseListComponentProp<T, K = undefined> = (
	props: ComponentProps<T, K>
) => () => JSX.Element;

export type UseListDataProp<T> = Array<T | undefined>;

export type UseListProps<T, K = undefined> = {
	Component: UseListComponentProp<T, K>;
	data: UseListDataProp<T>;
	config?: K;
};
