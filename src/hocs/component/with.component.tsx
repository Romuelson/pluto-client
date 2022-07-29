import { WithComponentArgs } from './component.type';

function withComponent<T, K>(args: WithComponentArgs<T, K>) {
	const { Component, children, key, config } = args;

	function WithComponent() {
		return Component({ children, key, ...config })();
	}

	return WithComponent;
}

export default withComponent;
