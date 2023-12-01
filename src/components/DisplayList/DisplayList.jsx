import React from 'react';

const DisplayList = ({ list }) => {
    return (
        <ul className='ml-12 list-disc '>
            {
                list?.map((item,index) => (
                    <li className='list-disc text-slate-400' key={index} >
                        <b className='text-white'>{item?.keyWord}</b> - {item.description}
                    </li>
                ))
            }
        </ul>
    );
};

export default DisplayList;