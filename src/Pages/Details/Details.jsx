import React from "react";
import image from "../../assets/lawyer.png";
import rgLogo from "../../assets/licenceno.png";
import { CgDanger } from "react-icons/cg";
import { useNavigate } from "react-router";
import { addToLawyer } from "../../Utilities/utilities";
import toast from "react-hot-toast";


const Details = ({ lawyerDetails }) => {
  const { name, experience, licenseNumber, speciality, availability, fee } =
    lawyerDetails;
    const navigate = useNavigate()

    const handleAppointment = ()=> {
     const addToStore =  addToLawyer('lawyer',licenseNumber )
      if(addToStore){
        toast.success('Appointment Today for' + ' '+ name)
       setTimeout(() => {
        navigate('/My-Bookings')
       }, 200);
      }
      else{
        toast.error('Already appointment For' + ' ' + name)
      }
    }



  return (
    <div className="md:max-w-10/12 mx-w-11/12 mx-auto ">
      <div className="bg-gray-300 text-center rounded-2xl  mx-auto py-3 lg:p-8">
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

      <div className="flex flex-col lg:flex-row  items-center py-3 lg:my-8 gap-x-3 border-2 border-gray-300 p-2 rounded-2xl">


        <div className="rounded-2xl bg-gray-200">
          <img src={image} alt={name} />
        </div>
        <div>
          <p className="text-indigo-600 bg-indigo-300 p-2 rounded-2xl">
            {experience} experience
          </p>
          <h1 className="text-xl font-black">{name}</h1>
          <h1 className="flex justify-between items-center gap-x-8 mt-3">
            <span>{speciality}</span>
            <h1 className="flex gap-x-1.5">
              <img src={rgLogo} alt={name} />
              <span>{licenseNumber}</span>
            </h1>
          </h1>
          <div className="flex items-center gap-x-3 my-4">
            <p className="font-bold text-gray-500">availability</p>
            {Array.isArray(availability) &&
              availability.map((available, index) => (
                <span
                  key={index}
                  className="p-2 text-yellow-400 bg-amber-100 rounded-2xl"
                >
                  {available}
                </span>
              ))}
          </div>
          <div className="flex items-center gap-x-4">
            <h1 className=" font-bold text-gray-500">Consultation Fee:</h1>
            <span className=" text-green-600 font-bold">Taka: {fee}</span>
          </div>
        </div>
      </div>

      {/* appointment */}
      <div className="border-2 border-gray-300 p-2 rounded-2xl ">
        <h1 className="text-center font-bold text-2xl mb-2.5">Book an Appointment</h1>
        <div className="border-1 border-dashed border-gray-300"></div>
        <div className="flex justify-between items-center my-3">
          <h1 className="font-bold">Availability</h1>
          <h1 className="bg-red-200 text-red-400 p-2 rounded-2xl">Lawyer  Available Today</h1>
        </div>
        <div className="border-1 border-dashed border-gray-300 my-5"></div>

        <h1 className="flex gap-x-1.5 bg-red-300 text-red-500 items-center p-1 rounded-2xl" >
          <CgDanger />
          <span>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span>
        </h1>

        <button onClick={handleAppointment} className="btn bg-green-600 text-white rounded-2xl w-full my-4">Book Appointment Now</button>

      </div>
      
    </div>
  );
};

export default Details;
