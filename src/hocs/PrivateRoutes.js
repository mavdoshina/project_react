import { Navigate, Outlet } from 'react-router-dom';
import  { useAuth } from "../services/firebase";
function PrivateRoutes(){
  const user = useAuth();

  console.log('/////user autheticated', user);

  return typeof user === 'undefined' ? (
    <h1>Loading.....</h1>
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;