import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const ProtectedRoutes = ({children}) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) return <Navigate to="/login" state={{ from: location }} replace />

  return children;
}

export default ProtectedRoutes