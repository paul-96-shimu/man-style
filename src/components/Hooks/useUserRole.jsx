import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext/Authcontex";

const useUserRole = () => {
  const { user, loading: authLoading } = useContext(AuthContext); 
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user?.email) {
        setRole("user"); // default role
        setRoleLoading(false);
        return;
      }

      try {
        setRoleLoading(true);

        // Backend এ নিশ্চিত হয়ে GET করা
        const res = await axios.get(`http://localhost:3000/users/${user.email}`);
        
        if (res.data && res.data.role) {
          setRole(res.data.role);
        } else {
          setRole("user"); // যদি role না থাকে
        }
      } catch (error) {
        console.error("❌ Failed to fetch user role:", error);
        setRole("user"); // fallback
      } finally {
        setRoleLoading(false);
      }
    };

    if (!authLoading) {
      fetchUserRole();
    }
  }, [user, authLoading]);

  return { role, roleLoading };
};

export default useUserRole;
