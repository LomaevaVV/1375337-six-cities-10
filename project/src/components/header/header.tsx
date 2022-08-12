import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';

export default function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isUserAuth = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  function UsersInfo (): JSX.Element {
    return (
      <a className="header__nav-link header__nav-link--profile" href="/#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        <span className="header__favorite-count">3</span>
      </a>
    );
  }

  function SignIn (): JSX.Element {
    return (
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    );
  }

  function SignOut (): JSX.Element {
    return (
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.Login}>
          <span className="header__signout" onClick={() => dispatch(logoutAction())}>Sign out</span>
        </Link>
      </li>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isUserAuth ? UsersInfo() : SignIn()}
              </li>
              {isUserAuth && SignOut()}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
