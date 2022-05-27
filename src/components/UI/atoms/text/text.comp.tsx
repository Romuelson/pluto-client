import './styles/index.scss';

export type TextProps = {
	value: number;
};

function Text(props: TextProps) {
	const { value } = props;

	return <p>value</p>;
}

export default Text;
