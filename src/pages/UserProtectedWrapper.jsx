import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token=localStorage.getItem('token');
  const navigate = useNavigate();
  const {setUser}=useUserContext();
    const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    if (!token) {
      navigate("/login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.captain);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem('token');
        navigate("/captain-login");
      });
  }, [token]);


    if(loading){
    return(
      <div>Loading ... </div>
    )
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
