import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Lawyers from '../../Components/Lawyers/Lawyers';

const Home = () => {
    return (
        <div className='max-w-11/12 mx-auto space-y-8'>
            <Banner></Banner>
            <Lawyers></Lawyers>
        </div>
    );
};

export default Home;