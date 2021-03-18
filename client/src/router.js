import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import LoginPage from './pages/login-page';
import { useAuthContext } from './store/auth/auth.context';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const { auth } = useAuthContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.username && auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Router;
