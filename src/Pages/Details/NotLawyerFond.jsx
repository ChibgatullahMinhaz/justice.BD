import React from 'react'
import { useParams } from 'react-router'
import { CiCirclePlus } from "react-icons/ci";

export const NotLawyerFond = () => {
    const {lucence} = useParams();

  return (
    <div className='bg-gray-300 text-center rounded-2xl w-3/4 mx-auto py-5'>
        <h1 className='text-2xl text-center font-bold'>Not Doctor Found!</h1>
        
        
            <p>No Doctor Found with this Registration No:-
            </p>
       <p className='flex justify-center items-center gap-x-1'>
<CiCirclePlus />
        {lucence}
       </p>
    </div>
  )
}
