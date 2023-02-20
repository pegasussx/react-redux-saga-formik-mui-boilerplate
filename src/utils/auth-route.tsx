import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PUBLIC_ROUTES } from 'config/routes';
import { type RootState } from '../redux/store';

/*****************************
 * Route with authentication *
 *****************************/
export const AuthRoute = () => {
  const isLoggedIn = useSelector((state: RootState) => !!state.auth.me);

  return !isLoggedIn ? <Navigate to={PUBLIC_ROUTES.login} replace /> : <Outlet />;
};
