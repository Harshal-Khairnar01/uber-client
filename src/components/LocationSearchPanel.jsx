import React from "react";
import { IoLocation } from "react-icons/io5";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePannelOpen }) => {
  // sample array for location
  const locations = [
    "jfj dej dj eddj edejde dene ejd ekenneje edn",
    "jfj dej dj eddj edejde dene ejd ekennejedfjddjdn  edn",
    "jfj dej dj eddj edejde dene ejd ekenneje cnjccd edn",
    "jfj dej dj eddj edejde ddjedjddoid jdkd ene ejd ekenneje edn",
  ];
  return (
    <div>
      {/* this is just a sample data  */}
      {locations.map(function (el, index) {
        return (
          <div
            key={index}
            onClick={() => {
              setVehiclePannelOpen(true);
              setPanelOpen(false);
            }}
            className=" border-2 p-3 rounded-xl  flex items-center justify-start gap-3 my-2 border-gray-200 active:border-black"
          >
            <h2 className=" w-5 h-5">
              <IoLocation />
            </h2>
            <h4 className=" font-medium">{el}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
