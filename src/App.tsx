import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import { Layout } from 'layouts/layout';
import { Loader } from 'components/base/loader';

import './config/i18n';

import { AuthRoute } from 'utils/auth-route';

import { PUBLIC_ROUTES, AUTH_ROUTES } from 'config/routes';
import { type RootState } from 'redux/store';
import { getCurrentUserAction } from 'redux/slices/auth.slice';

const Home = lazy(async () => await import('pages/home'));
const SignUp = lazy(async () => await import('pages/auth/signup'));
const Login = lazy(async () => await import('pages/auth/login'));
const Main = lazy(async () => await import('pages/main'));
const Error404 = lazy(async () => await import('pages/404'));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => !!state.auth.me);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getCurrentUserAction());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) navigate(AUTH_ROUTES.main);
  }, [isLoggedIn, navigate]);

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Routes>
          {/* PUBLIC_ROUTES */}
          <Route
            path={PUBLIC_ROUTES.default}
            element={
              isLoggedIn ? <Navigate to={AUTH_ROUTES.main} /> : <Navigate to={PUBLIC_ROUTES.home} />
            }
          />
          <Route path={PUBLIC_ROUTES.home} element={<Home />} />
          <Route path={PUBLIC_ROUTES.login} element={<Login />} />
          <Route path={PUBLIC_ROUTES.signup} element={<SignUp />} />
          {/* AUTH_ROUTES */}
          <Route element={<AuthRoute />}>
            <Route path={AUTH_ROUTES.main} element={<Main />} />
          </Route>
          {/* Error 404 */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
