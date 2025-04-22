import React from "react";
import image from "../../assets/lawyer.png";
import licenceIcon from "../../assets/licenceno.png";
import { NavLink } from "react-router";

const Lawyer = ({ lawyer }) => {
  const {
    licenseNumber,
    speciality,
    slogan,
    name,
    fee,
    availability,
    experience,
  } = lawyer;
 
  return (
    <div className=" bg-gray-300  rounded-2xl  flex  justify-center items-center md:flex-wrap md:flex-row flex-col gap-2">
      <div>
        <img src={image} alt={name} />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between gap-x-2">
          <h1 className="bg-orange-50 text-red-500 p-2 rounded-2xl">
            Available
          </h1>
          <h1 className="bg-indigo-200 text-indigo-500 p-2 rounded-2xl">
            {experience} experience
          </h1>
        </div>
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-semibold text-lg text-green-500">{speciality}</p>
        <h1 className="text-green-700 flex gap-x-1.5">
          <img src={licenceIcon} alt={licenseNumber} />
          <span>License No: {licenseNumber}</span>
        </h1>
        <NavLink to={`/lawyerDetails/${licenseNumber}`}>
          <button className="btn btn-outline btn-primary w-full">
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Lawyer;
