/* eslint-disable @typescript-eslint/no-floating-promises */

/* Core */
import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

/* Hooks */
import { useAppDispatch } from '../../hooks/use.redux';

/* Auth */
import { authLoginThunk } from '../../store/slices/auth/auth.thunk';
import { AuthLoginForm } from '../../types/auth/auth.type';

function LoginPage() {
	const loginRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onSubmit = (authLoginForm: AuthLoginForm) => {
		dispatch(authLoginThunk(authLoginForm));
	};

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		if (loginRef.current !== null && passwordRef.current !== null) {
			onSubmit({
				login: loginRef.current.value,
				password: passwordRef.current.value,
			});
		}
	};

	return (
		<section className="login">
			<form className="login__form" action="" onSubmit={handleSubmit}>
				<p className="login__field">
					<label className="login__label" htmlFor="username">
						<input
							className="login__input"
							type="text"
							name="username"
							id="username"
							ref={loginRef}
						/>
					</label>
				</p>
				<p className="login__field">
					<label className="login__label" htmlFor="password">
						<input
							className="login__input"
							type="text"
							name="password"
							id="password"
							ref={passwordRef}
						/>
					</label>
				</p>
				<button className="login__button button" type="submit">
					Войти
				</button>
			</form>
		</section>
	);
}

export default LoginPage;
