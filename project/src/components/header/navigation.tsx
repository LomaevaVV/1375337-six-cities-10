import { AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserEmail } from '../../store/user-process/selectors';
import { getFavorites } from '../../store/data-favorites/selectors';


export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector(getFavorites);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isUserAuth = authorizationStatus === AuthorizationStatus.Auth;
  const userEmail = useAppSelector(getUserEmail);

  function UsersInfo (): JSX.Element {
    return (
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{userEmail}</span>
        <span className="header__favorite-count">{favorites.length}</span>
      </Link>
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
        <Link
          className="header__nav-link"
          to={AppRoute.Main}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    );
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {isUserAuth ? UsersInfo() : SignIn()}
        </li>
        {isUserAuth && SignOut()}
      </ul>
    </nav>
  );
}
