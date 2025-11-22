import React, { useContext } from 'react';
import useUserRole from '../Hooks/useUserRole';
import { AuthContext } from '../../Context/AuthContext/Authcontex';
import UserProfile from './UserProfile';
import AdminProfile from './Adminprofile';

const RoleBaseprofile = () => {

 const { user } = useContext(AuthContext);
  const { role, roleLoading } = useUserRole();

  if (roleLoading) return <p>Loading profile...</p>;

  if (!user) return <p>Please login first.</p>;

    return (
        <div>
         {role === "admin" ? <AdminProfile /> : <UserProfile />}
        </div>
    );
};

export default RoleBaseprofile;