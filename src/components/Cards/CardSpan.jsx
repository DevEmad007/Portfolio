import React from 'react';

const CardSpan = ({ e }) => {
    return (
        <span className=' text-sm cursor-pointer text-gray-300 m-1 px-2 py-1 border-2 rounded-md border-gray-400
        lg:hover:bg-[#6a6a6a55] '>
            {e}
        </span>
    );
};

export default CardSpan;