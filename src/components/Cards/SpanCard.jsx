import React from 'react';

const SpanCard = ({ e }) => {
    return (
        <span className=' text-sm cursor-pointer text-gray-300 m-1 px-2 py-1 border-2 rounded-md border-gray-400'>
            {e}
        </span>
    );
};

export default SpanCard;