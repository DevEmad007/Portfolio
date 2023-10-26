import React from 'react';
import CardSpan from './CardSpan';

const SkillCard = ({ db }) => {


    return (
        <>
            <div className='md:mx-3 lg:border-r border-gray-600 max-h-fit'>
                <h3 className='my-4 text-lg font-bold tracking-wider text-gray-300'>{db.heading}</h3>
                <div className='flex flex-wrap'>
                    {db.skils.map((e,i) => (
                        <CardSpan key={i} e={e} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SkillCard;