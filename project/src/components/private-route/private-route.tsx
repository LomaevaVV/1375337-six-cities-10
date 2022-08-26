import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getIsUserAuth } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isUserAuth = useAppSelector(getIsUserAuth);

  return(
    isUserAuth ? children : <Navigate to={AppRoute.Login} />
  );
}
