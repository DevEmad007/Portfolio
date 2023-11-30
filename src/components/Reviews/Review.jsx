import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ className,item }) => {
    return (
        <Link to={`/blogs/${item?.id}`}
            className={`${className} min-w-260 max-w-3xl max-h-56 xl:max-h-72 relative rounded-3xl bg-white overflow-hidden dark:bg-slate-900`}>
            <div
                className=' text-black dark:text-white p-3 lg:pt-1 xl:pt-2'>
                <h4
                    className='text-2xl xl:text-3xl font-semibold tracking-wide mb-[8px] lg:mb-[0px] '>
                    {item?.name}
                </h4>
                <p className=' truncate whitespace-break-spaces'>
                    {item?.testimonial}
                </p>
            </div>
        </Link>
    );
};

export default Review;