import React from "react";
import CountUp from "react-countup";
import lawyer from "../../assets/success-doctor.png";
import review from '../../assets/success-review.png';
import CasesInitiated from '../../assets/success-patients.png';
import Stuff from '../../assets/success-staffs.png'
const ShowSuccess = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <div className="bg-gray-300 flex flex-col items-center p-5 rounded-xl">
        <img src={lawyer} alt="" />
        <h1 className="font-bold text-2xl" >
          {" "}
          <CountUp end={199} duration={10} />+
        </h1>
        <p>Total Lawyer</p>
      </div>
      <div className="bg-gray-300 flex flex-col items-center p-5 rounded-xl">
        <img src={review} alt="" />
        <h1 className="font-bold text-xl" >
          {" "}
          <CountUp end={467} duration={10} />+
        </h1>
        <p>Total Reviews</p>
      </div>
      <div className="bg-gray-300 flex flex-col items-center  p-5 rounded-xl">
        <img src={CasesInitiated} alt="" />
        <h1 className="font-bold text-xl" >
          {" "}
          <CountUp end={1900} duration={15} />+
        </h1>
        <p>Cases Initiated</p>
      </div>
      <div className="bg-gray-300 flex flex-col items-center  p-5 rounded-xl">
        <img src={Stuff} alt="" />
        <h1 className="font-bold text-xl" >
          {" "}
          <CountUp end={300} duration={10} />+
        </h1>
        <p>Total Stuffs</p>
      </div>


    </div>
  );
};

export default ShowSuccess;
