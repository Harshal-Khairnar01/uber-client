import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
 
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1736867129397-b1a4071d70a7?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] pt-10  h-screen flex justify-between  flex-col  w-full ">
        <img
          className=" w-14 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <div className=" bg-white pb-7 py-5 px-10">
          <h2 className=" text-2xl font-bold">Get Started with Uber</h2>
          <Link to='/login' className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
