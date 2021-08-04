import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';

const PrivateRoute = ({ ...rest }: RouteProps) => {
  const { token } = useAuth();

  if (!token) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

export default PrivateRoute;
