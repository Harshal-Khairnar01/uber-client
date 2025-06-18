import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCaptainContext } from "../context/captainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {setCaptain}=useCaptainContext();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/login`,
      captain
    );

     if(response.status===200){
        const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token)
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className=" w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className=" text-lg font-medium mb-2">What's your email</h3>
          <input
            className=" bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg  placeholder:text-sm"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium">Enter password</h3>
          <input
            className=" bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg  placeholder:text-sm"
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className=" bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg  placeholder:text-sm">
            Login
          </button>
          <p className=" text-center">
            Join a fleet?{" "}
            <Link to="/captain-signup" className=" text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className=" flex items-center justify-center bg-[#f99705] text-[#fff] font-semibold mb-5 rounded px-4 py-2  w-full text-lg  placeholder:text-sm"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
