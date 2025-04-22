import React from "react";
import image from "../../assets/lawyer.png";
const Details = ({ lawyerDetails }) => {
  const { name, experience, licenseNumber, speciality, availability, fee } =
    lawyerDetails;
console.log(availability);
  return (
    <div className="md:max-w-10/12 mx-w-11/12 mx-auto ">
      <div className="bg-gray-300 text-center rounded-2xl w-7/9 mx-auto py-3 lg:p-8">
        <h1 className="text-2xl text-center font-bold">
          Lawyer’s Profile Details
        </h1>

        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row  items-center py-3 lg:my-8 gap-x-3 ">
        <div className="rounded-2xl bg-gray-200">
          <img src={image} alt={name} />
        </div>
        <div className="">
          <p className="text-indigo-600 bg-indigo-300 p-2 rounded-2xl">
            {experience} experience
          </p>

          <h1 className="flex justify-between items-center gap-x-8 mt-3">
            <span>{speciality}</span>
            <span>{licenseNumber}</span>
          </h1>
         
        </div>
      </div>
    </div>
  );
};

export default Details;
