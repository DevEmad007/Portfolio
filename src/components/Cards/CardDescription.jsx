import React from 'react';

const CardDescription = ({ item }) => {
    return (
        <div className='p-4 h-26 bg-white text-black rounded-b-2xl'>
            <h2 className=' text-lg font-semibold whitespace-nowrap'>{item?.name}</h2>
            <p className=' text-base'>{item.des}</p>
        </div>
    );
};

export default CardDescription;