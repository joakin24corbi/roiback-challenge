import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from 'views/SplashScreen';
import { uri_home, uri_signup } from './Routes';

const Signup = lazy(() => import('views/Signup'))
const Home = lazy(() => import('views/Home'))

/**
 * Component that routes all the paths
 * @component
 */
const Router = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <Suspense fallback={<SplashScreen />}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path={uri_signup}
            element={user
              ? <Navigate to={uri_home} replace />
              : <Signup />
            }
          />
          <Route
            exact
            path={uri_home}
            element={user
              ? <Home />
              : <Navigate to={uri_signup} replace />
            }
          />
          <Route
            path='*'
            element={<Navigate to={uri_home} replace />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Router;