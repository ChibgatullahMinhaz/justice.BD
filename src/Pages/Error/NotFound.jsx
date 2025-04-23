import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-2xl'>404- Page Not Found!</h1>
            <p className='font-semibold text-xl text-center'>Oops! The page Your are Looking For Doesn't exist</p>
<div className='flex justify-center items-center'>

<Link to='/'>
            <button className='btn btn-outline bg-green-700 text-white'>Go Back Home</button>
            </Link>
</div>
        </div>
    );
};

export default NotFound;