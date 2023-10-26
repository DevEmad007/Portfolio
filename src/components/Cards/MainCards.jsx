import React from 'react';

const MainCards = () => {
    return (
        <div className='m-2 min-w-min max-w-lg flex-auto cursor-pointer border-none '>
            <div className='w-full aspect-6/4 bg-gray-400 flex justify-center items-center rounded-t-lg'>

                Image

            </div>
            <div className='p-2 bg-blue-600 rounded-b-lg'>
                <h2 className=' text-lg font-semibold'>title</h2>
                <p>discreption of the project goes here</p>
            </div>
        </div>
    );
};

export default MainCards;
