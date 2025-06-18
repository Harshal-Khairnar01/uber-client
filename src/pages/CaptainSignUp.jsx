import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCaptainContext } from "../context/captainContext";
import axios from "axios";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { setCaptain } = useCaptainContext();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <div className=" h-screen py-5 px-5 flex flex-col justify-between">
      <div>
        <img
          className=" w-16 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className=" text-lg font-medium mb-1">
            What's our captain's name
          </h3>
          <div className=" flex gap-5 mb-4 ">
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
          <h3 className=" text-lg font-medium mb-2">
            What's our captain's email
          </h3>
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

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-5 mb-5">
            <input
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 text-lg placeholder:text-sm"
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              placeholder="Vehicle color"
            />
            <input
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 text-lg placeholder:text-sm"
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              placeholder="Plate number"
            />
          </div>
          <div className="flex gap-5 mb-5">
            <input
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 text-md placeholder:text-sm"
              type="number"
              min="1"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
              placeholder="Capacity"
            />
            <select
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 text-lg placeholder:text-sm"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select vehicle type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>

          <button className=" bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg  placeholder:text-sm">
            Create Captain Account
          </button>
          <p className=" text-center">
            Already have an account?{" "}
            <Link to="/captain-login" className=" text-blue-600">
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

export default CaptainSignUp;
