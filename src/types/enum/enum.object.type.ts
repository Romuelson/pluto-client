export type EnumObject<T> = {
	[K in keyof T]?: T[K];
};
