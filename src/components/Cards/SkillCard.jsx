import React from 'react';
import SpanCard from './SpanCard';

const SkillCard = ({ db }) => {


    return (
        <>
            <div className='md:mx-3'>
                <h3 className='my-4 text-lg font-bold tracking-wider text-gray-300'>{db.heading}</h3>
                <div className='flex flex-wrap'>
                    {db.skils.map((e,i) => (
                        <SpanCard key={i} e={e} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SkillCard;