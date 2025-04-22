import React from 'react';

const Details = ({lawyerDetails}) => {
    const {name} = lawyerDetails;
    return (
        <div>
            lawyer name is: {name}
        </div>
    );
};

export default Details;