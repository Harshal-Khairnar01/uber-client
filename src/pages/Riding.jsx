import React from "react";

import { FaChevronDown, FaHome } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className=" h-screen">
        <Link to="/" className=" ring-2 top-2 fixed h-10  w-10  bg-white flex items-center justify-center rounded-full">
            <FaHome />
        </Link>
      <div className=" h-1/2">
        <img
          className=" w-full h-full object-cover"
          src="https://img.sfist.com/assets_c/2015/07/ubermapvisuals-thumb-640xauto-905052.png"
          alt=""
        />
      </div>
      <div className=" h-1/2  p-4">
        <div className=" flex items-center justify-between">
          <img
            className=" h-12"
            src="https://file.aiquickdraw.com/imgcompressed/img/compressed_a07ec028bfd0cea8c8150ea0781d4383.webp"
            alt=""
          />
          <div className=" text-right">
            <h2 className=" text-lg font-medium">Kunal</h2>
            <h4 className=" text-xl font-semibold -mt-1 -mb-1">MP04 BSDK</h4>
            <p className=" text-sm  text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className=" gap-2 flex flex-col justify-between items-center">
          <div className="   w-full mt-5">
            <div className=" flex items-center gap-5 p-3 mb-2 border-b-2 border-gray-400">
              <MdAddLocationAlt />
              <div>
                <h3 className=" text-lg font-medium">562/11-A</h3>
                <p className=" text-sm -mt-1  text-gray-600">
                  Vijay Nagar Indore, MP
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-5 p-3 ">
              <RiMoneyRupeeCircleFill />
              <div>
                <h3 className=" text-lg font-medium">Rs 342.2</h3>
                <p className=" text-sm -mt-1  text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className=" mt-4  w-full bg-green-500 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
