import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch } from '../../hooks';
import { AppRoute, CitiesList } from '../../const';
import { changeCity } from '../../store/action';
import { loginAction } from '../../store/api-actions';
import { toast } from 'react-toastify';
import { validateEmailAndPassword } from '../../utils';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    navigate(AppRoute.Main);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null
      && passwordRef.current !== null
      && validateEmailAndPassword(emailRef.current, passwordRef.current )
    ) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      toast.warn('Invalid Email or password. The password must consist of at least one letter and a number.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={() => dispatch(changeCity(CitiesList[0].name))}>
                <span>{CitiesList[0].name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
