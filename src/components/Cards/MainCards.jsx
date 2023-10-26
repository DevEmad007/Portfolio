import React from 'react';
import CardImg from './CardImg';
import CardDescription from './CardDescription';

const MainCards = ({ item }) => {
    return (
        <a href={item?.link} className='my-2 sm:my-0 min-w-min max-w-xl cursor-pointer border-none '>
            <CardImg img={item.img} />
            <CardDescription item={item} />
        </a>
    );
};

export default MainCards;
