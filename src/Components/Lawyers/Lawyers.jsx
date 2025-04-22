import React, { useContext } from "react";
import { JusticeDataProvider } from "../../Context/ContextProvider/ContextProvider";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({showLawyer}) => {
  const { lawyers } = useContext(JusticeDataProvider);

  

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold">Our Best Lawyers</h1>
        <p className="text-center">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {showLawyer.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>
        ))}
      </div>
    </>
  );
};

export default Lawyers;
