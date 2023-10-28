import React from 'react';

const Review = ({ className,index,item }) => {
    return (
        <div
            className={`${className} min-w-260 max-w-3xl xl:min-h-sl  mt-24 relative rounded-3xl bg-white`}>
            <img
                className='h-40 w-40 
                object-cover
                absolute -top-16 left-1/2 -ml-20 border-green-500 
                border-2 rounded-full'
                src={item?.photo} alt="reviewer's image" />
            <div
                className='text-black mt-20 px-4 pt-10 pb-3'>
                <h4
                    className='text-2xl xl:text-3xl font-semibold tracking-wide mb-3'>
                    {item?.name} {index}
                </h4>
                <p>
                    {item?.testimonial}
                </p>
            </div>
        </div>
    );
};

export default Review;