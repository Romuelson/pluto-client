import { TextProps } from '../../text.type';

export type TextCreateArgs = {
	id?: string;
	children: string;
};

export type TextCreateView = (args: TextCreateArgs) => TextProps;

export type UseTextCreate = () => (
	createView: TextCreateView
) => (args: TextCreateArgs) => JSX.Element;
