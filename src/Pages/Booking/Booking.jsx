import React, { useContext, useEffect, useState } from "react";
import { getLawyers, removeData } from "../../Utilities/utilities";
import { JusticeDataProvider } from "../../Context/ContextProvider/ContextProvider";
import toast from "react-hot-toast";
import NotBooked from "./NotBooked";
import BookChart from "../../Components/Chart/BookChart";

const Booking = () => {
  const { lawyers } = useContext(JusticeDataProvider);
  const [storedAppointment, setAppointment] = useState([]);

  useEffect(() => {
    try {
      const storedData = getLawyers("lawyer");
      const appointments =
        Array.isArray(lawyers) &&
        lawyers.filter((lawyer) => storedData.includes(lawyer.licenseNumber));
      setAppointment(appointments);
    } catch (error) {
      toast.error(error.message);
    }
  }, [lawyers]);

  const handleCancelAppointment = (id) => {
    toast.error("cancel Appointment");
    removeData(id, "lawyer");
    const remainingAppointment = storedAppointment.filter(appointment => appointment.licenseNumber !== id);
    setAppointment(remainingAppointment);
  };

  return (
    <div>
      {storedAppointment.length === 0 ? (
        <NotBooked ></NotBooked>
      ) : (
        <>
        <BookChart storedAppointment={storedAppointment}></BookChart>
          <div className=" text-center">
            <h1 className="text-xl font-bold ">My Today Appointments</h1>
            <p>
              Our platform connects you with verified, experienced Lawyers
              across various specialties — all at your convenience.
            </p>
          </div>
          <div className="max-w-11/12 mx-auto my-3">
            {Array.isArray(storedAppointment) &&
              storedAppointment.map((appointment) => (
                <div
                  className="bg-gray-200 border-1 my-3 p-3"
                  key={appointment?.id}
                >
                  <h1 className="text-xl font-bold">{appointment?.name}</h1>
                  <div className="flex items-center justify-between">
                    <h1>Criminal Expert</h1>
                    <h1>Appointment Fee : {appointment?.fee}</h1>
                  </div>
                  <button
                    onClick={() =>
                      handleCancelAppointment(appointment?.licenseNumber)
                    }
                    className="btn btn-outline btn-error w-full rounded-2xl"
                  >
                    Cancel Appointment
                  </button>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Booking;
