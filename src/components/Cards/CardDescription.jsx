import React from 'react';

const CardDescription = ({ item }) => {
    return (
        <div className='p-4 h-[72px] overflow-y-hidden bg-black text-black rounded-b-2xl border-x-2 border-b-2 border-gray-800'>
            <h2 className=' text-lg font-semibold whitespace-nowrap text-white'>{item?.name}</h2>
            <p className=' relative text-base text-white overflow-x-hidden'>
                {item.des?.body}
            </p>
        </div>
    );
};

export default CardDescription;;