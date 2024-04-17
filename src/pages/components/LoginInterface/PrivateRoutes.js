import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ServiceContext } from '../../../ServiceContext';
export const PrivateRoutes = () => {
  const { auth } = useContext(ServiceContext);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
