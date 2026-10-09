import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RutaProtegida = ({ allowedRoles = [], redirectPath = '/login' }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const currentRole = user?.role;

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  if (allowedRoles.length > 0 && (!currentRole || !allowedRoles.includes(currentRole))) {
    return <Navigate to="/unauthorized" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RutaProtegida;
