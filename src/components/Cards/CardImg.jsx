import React from 'react';

const CardImg = ({ img }) => {
    return (
        <div
            className='w-full h-60  bg-white flex justify-center items-center rounded-t-2xl text-3xl '>
            <img
                loading='lazy'
                className='w-full h-full  rounded-t-2xl object-cover object-center border-b rounded-b-2xl'
                src={img}
                alt={img} />
        </div>
    );
};

export default CardImg;