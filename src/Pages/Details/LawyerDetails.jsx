import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { JusticeDataProvider } from "../../Context/ContextProvider/ContextProvider";

const LawyerDetails = () => {
    const [lawyerDetails, setLawyerDetails]= useState({});
   const { lawyers } = useContext(JusticeDataProvider);
   console.log(lawyers);
  const {lucence} = useParams();
const thisLawyer = lawyers.find(lawyer => lawyer.licenseNumber == lucence);
console.log(thisLawyer);

  return <div></div>;
};

export default LawyerDetails;
