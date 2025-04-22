import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { JusticeDataProvider } from "../../Context/ContextProvider/ContextProvider";
import Details from "./Details";
import { NotLawyerFond } from "./NotLawyerFond";

const LawyerDetails = () => {
  const [lawyerDetails, setLawyerDetails] = useState({});
  const { lawyers } = useContext(JusticeDataProvider);
  const { lucence } = useParams();
  const thisLawyer = lawyers.find((lawyer) => lawyer.licenseNumber == lucence);

  useEffect(() => {
    setLawyerDetails(thisLawyer);
  }, [thisLawyer]);

  return <div>
    {
      thisLawyer ? (<Details lawyerDetails ={lawyerDetails}></Details> ) : (
        <NotLawyerFond></NotLawyerFond>
      )
    }
    
  </div>;
};

export default LawyerDetails;
