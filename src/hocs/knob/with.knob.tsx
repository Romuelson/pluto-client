export type WithKnobArgs = {};

function withKnob(args: WithKnobArgs) {
	function WithKnob() {}

	return WithKnob;
}

export default withKnob;
