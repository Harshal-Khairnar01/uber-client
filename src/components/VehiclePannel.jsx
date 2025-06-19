import React from "react";
import { FaChevronDown, FaUser } from "react-icons/fa";

const VehiclePannel = ({ setVehiclePannelOpen, setConfirmRidePannel }) => {
  return (
    <>
      <h5
        onClick={() => setVehiclePannelOpen(false)}
        className=" p-3 flex justify-center absolute top-0 left-0 w-full  text-gray-300"
      >
        {" "}
        <FaChevronDown size={20} />
      </h5>
      <h3 className=" text-2xl font-semibold mb-3">Choose a Vehicle</h3>
      <div
        onClick={() => setConfirmRidePannel(true)}
        className=" mb-2 active:border-2 active:border-black rounded-xl w-full  flex items-center justify-between p-3"
      >
        <img
          src="https://file.aiquickdraw.com/imgcompressed/img/compressed_a07ec028bfd0cea8c8150ea0781d4383.webp"
          alt=""
          className=" h-12"
        />
        <div className="  w-1/2 ml-2">
          <h4 className=" font-medium text-lg">
            UberGo{" "}
            <span className=" inline-block">
              <FaUser size={15} />
            </span>{" "}
            4
          </h4>
          <h5 className=" font-medium text-sm">2 mins away</h5>
          <p className=" font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className=" text-xl font-semibold">Rs. 193.20</h2>
      </div>
      <div
        onClick={() => setConfirmRidePannel(true)}
        className=" mb-2 active:border-2 active:border-black rounded-xl w-full  flex items-center justify-between p-3"
      >
        <img
          src="https://e7.pngegg.com/pngimages/185/46/png-clipart-bajaj-auto-auto-rickshaw-car-bajaj-qute-auto-rickshaw-mode-of-transport-motorcycle-thumbnail.png"
          alt=""
          className=" h-12"
        />
        <div className="  w-1/2 ml-2">
          <h4 className=" font-medium text-lg">
            UberGo{" "}
            <span className=" inline-block">
              <FaUser size={15} />
            </span>{" "}
            3
          </h4>
          <h5 className=" font-medium text-sm">2 mins away</h5>
          <p className=" font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className=" text-xl font-semibold">Rs. 27.20</h2>
      </div>
      <div
        onClick={() => setConfirmRidePannel(true)}
        className=" mb-2 active:border-2 active:border-black rounded-xl w-full  flex items-center justify-between p-3"
      >
        <img
          src="https://e7.pngegg.com/pngimages/9/277/png-clipart-red-and-black-honda-cbr-sports-bike-with-blue-background-honda-cbr1000rr-motorcycle-car-honda-cbr-series-honda-cbr1000rr-sport-bike-exhaust-system-vehicle-thumbnail.png"
          alt=""
          className=" h-12"
        />
        <div className="  w-1/2 ml-2">
          <h4 className=" font-medium text-lg">
            UberGo{" "}
            <span className=" inline-block">
              <FaUser size={15} />
            </span>{" "}
            2
          </h4>
          <h5 className=" font-medium text-sm">2 mins away</h5>
          <p className=" font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className=" text-xl font-semibold">Rs. 120.30</h2>
      </div>
    </>
  );
};

export default VehiclePannel;
