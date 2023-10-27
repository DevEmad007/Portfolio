import React from 'react';

const Review = ({ className }) => {
    return (
        <div className={`${className} min-w-260 max-w-lg mt-24 relative rounded-3xl bg-white`}>
            <img className='h-40 w-40 absolute -top-16 left-1/2 -ml-20 border-green-500 border-2 rounded-full' src="./DP.jpeg" alt="reviewer's image" />
            <div className='text-black mt-20 px-4 pt-10 pb-3'>
                <h4 className='text-2xl font-semibold tracking-wider mb-3'>Lorem ipsum dolor sit.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias!</p>
            </div>
        </div>
    );
};

export default Review;