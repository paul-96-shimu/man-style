import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/Authcontex';
import useUserRole from '../components/Hooks/useUserRole';
import { Navigate, useLocation } from 'react-router';

const AdminRoute = ({ children }) => {

    const {user, loading} = useContext(AuthContext)
    const {role, roleLoading} = useUserRole()
      const location = useLocation();

    
    if(loading|| roleLoading){
        return <span className="loading loading-spinner text-error"></span>
    }


        if(user && role !== 'admin'){

            return <Navigate to="/forbiddenpage" state={{from: location}} replace />
        }
    return children
};

export default AdminRoute;