import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const ConfirmedRide = ({ setVehicleFound, setConfirmRidePannel }) => {
  return (
    <div>
      <h5
        onClick={() => setConfirmRidePannel(false)}
        className=" p-3 flex justify-center absolute top-0 left-0 w-full  text-gray-300"
      >
        {" "}
        <FaChevronDown size={20} />
      </h5>
      <h3 className=" text-2xl font-semibold mb-3">Confirm Your Ride</h3>
      <div className=" gap-2 flex flex-col justify-between items-center">
        <img
          className=" h-28"
          src="https://file.aiquickdraw.com/imgcompressed/img/compressed_a07ec028bfd0cea8c8150ea0781d4383.webp"
          alt=""
        />
        <div className="   w-full mt-5">
          <div className=" flex items-center gap-5 p-3 mb-2 border-b-2 border-gray-400">
            <IoLocationSharp />
            <div>
              <h3 className=" text-lg font-medium">562/11-A</h3>
              <p className=" text-sm -mt-1  text-gray-600">
                Vijay Nagar Indore, MP
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-5 p-3 mb-2 border-b-2 border-gray-400">
            <MdAddLocationAlt />
            <div>
              <h3 className=" text-lg font-medium">562/11-A</h3>
              <p className=" text-sm -mt-1  text-gray-600">
                Vijay Nagar Indore, MP
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-5 p-3 mb-2">
            <RiMoneyRupeeCircleFill />
            <div>
              <h3 className=" text-lg font-medium">Rs 342.2</h3>
              <p className=" text-sm -mt-1  text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setVehicleFound(true);
            setConfirmRidePannel(false);
          }}
          className=" mt-4  w-full bg-green-500 text-white font-semibold p-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
