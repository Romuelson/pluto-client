import './styles/index.scss';

import LogoDefault from './views/logo-default/logo-default.comp';

import { LogoProps } from './logo.type';

function Logo(props: LogoProps) {
	const { className, ...otherProps } = props;

	return (
		<div className={[className, 'logo'].join(' ')}>
			<LogoDefault {...otherProps} />
		</div>
	);
}

export default Logo;
