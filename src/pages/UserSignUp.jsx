import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import UserContext, { useUserContext } from "../context/userContext";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const {  setUser } = useUserContext();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token)
      navigate("/home");
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
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
          <h3 className=" text-lg font-medium mb-2">What's your name</h3>
          <div className=" flex gap-5 mb-5">
            <input
              className=" w-1/2 bg-[#eeeeee]  rounded px-4 py-2   text-lg  placeholder:text-sm"
              type="text"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              required
              placeholder="first name"
            />
            <input
              className=" w-1/2 bg-[#eeeeee]  rounded px-4 py-2   text-lg  placeholder:text-sm"
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              required
              placeholder="last name"
            />
          </div>
          <h3 className=" text-lg font-medium mb-2">What's your email</h3>
          <input
            className=" bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg  placeholder:text-sm"
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
            className=" bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg  placeholder:text-sm"
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className=" bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg  placeholder:text-sm">
            Create Account
          </button>
          <p className=" text-center">
            Already have an account?{" "}
            <Link to="/login" className=" text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className=" text-xs  leading-tight">
          By proceeding you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
