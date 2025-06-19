import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePannel from "../components/VehiclePannel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitForDriver";
const Home = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false);
  const vehiclePannelRef = useRef(null);

  const [confirmRidePannel, setConfirmRidePannel] = useState(false);
  const confirmRidePannelRef = useRef(null);

  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);

  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePannelOpen) {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePannelOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePannel) {
        gsap.to(confirmRidePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePannel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className=" h-screen relative  overflow-hidden">
      <img
        className=" w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
        alt=""
      />

      <div className=" h-screen w-screen">
        {/* image for temporary  */}
        <img
          className=" w-full h-full object-cover"
          src="https://img.sfist.com/assets_c/2015/07/ubermapvisuals-thumb-640xauto-905052.png"
          alt=""
        />
      </div>

      <div className="  h-screen absolute top-0 w-full flex flex-col  justify-end">
        <div className=" h-[30%] p-5 bg-white  relative">
          <div className=" flex  justify-between items-center">
            <h4 className="  text-2xl font-semibold">Find a trip</h4>
            <h3
              className=" font-bold text-lg"
              ref={panelCloseRef}
              onClick={() => setPanelOpen(false)}
            >
              <IoIosArrowDown />
            </h3>
          </div>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              className=" bg-[#eee] px-12 py-2  rounded-lg w-full mt-3 "
              onClick={() => {
                setPanelOpen(true);
              }}
              type="text"
              placeholder="Add a pick-up location "
              onChange={(e) => setPickup(e.target.value)}
              value={[pickup]}
            />
            <input
              className=" bg-[#eee] px-12 py-2  rounded-lg w-full mt-3 texce"
              onClick={() => {
                setPanelOpen(true);
              }}
              type="text"
              placeholder="Enter your destination"
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
            />
          </form>
        </div>
        <div ref={panelRef} className=" px-5 h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePannelOpen={setVehiclePannelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePannelRef}
        className=" w-full fixed z-10 bottom-0 translate-y-full px-3 py-8 bg-white"
      >
        <VehiclePannel
          setVehiclePannelOpen={setVehiclePannelOpen}
          setConfirmRidePannel={setConfirmRidePannel}
        />
      </div>

      <div
        ref={confirmRidePannelRef}
        className=" w-full fixed z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
      >
        <ConfirmedRide
          setConfirmRidePannel={setConfirmRidePannel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className=" w-full fixed z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className=" w-full fixed z-10 bottom-0   px-3 py-6 pt-12 bg-white"
      >
        <WaitForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
