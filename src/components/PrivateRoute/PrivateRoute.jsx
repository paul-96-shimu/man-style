import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/Authcontex';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const {user, loading} =use(AuthContext);
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace />
    }
    return children
        
};

export default PrivateRoute;