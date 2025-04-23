import React, { useContext, useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Lawyers from "../../Components/Lawyers/Lawyers";
import { JusticeDataProvider } from "../../Context/ContextProvider/ContextProvider";
import ShowSuccess from "../../Components/ShowSuccess/ShowSuccess";

const Home = () => {
  const { lawyers } = useContext(JusticeDataProvider);
  const [showLawyer, setShowLawyer] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    if (show) {
      window.scrollTo({ top: 100, behavior: "smooth" });
    } else {
      window.scrollTo({ bottom: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (show) {
      setShowLawyer(lawyers);
    } else {
      setShowLawyer(lawyers.slice(0, 6));
    }
  }, [show, lawyers]);

  return (
    <div className="max-w-11/12 mx-auto space-y-8">
      <Banner></Banner>
      <Lawyers showLawyer={showLawyer}></Lawyers>
      <div className="flex justify-center items-center">
        <button className="btn bg-green-600 text-white" onClick={handleShow}>
          {show ? "Show Less" : "Show All Lawyer"}
        </button>
      </div>

      <ShowSuccess></ShowSuccess>
    </div>
  );
};

export default Home;
