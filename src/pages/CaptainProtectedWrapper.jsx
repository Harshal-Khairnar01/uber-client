import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCaptainContext } from "../context/captainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {  setCaptain } = useCaptainContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/captain-login");
      });
  }, [token]);

  if (loading) {
    return <div>Loading ... </div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
