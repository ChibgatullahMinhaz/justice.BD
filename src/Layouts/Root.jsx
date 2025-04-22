import React, { useContext, useEffect } from "react";
import { LoaderContext } from "../Context/ContextProvider/ContextProvider";
import { Outlet, useLocation } from "react-router";
import Loading from "../Components/Loading/Loading";
import Navbar from "../Components/Navba/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  const { loading } = useContext(LoaderContext);
  const { setLoading } = useContext(LoaderContext);

  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [location, setLoading]);
  return (
    <>
      <Navbar></Navbar>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="minHight">
          <Outlet></Outlet>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default Root;
