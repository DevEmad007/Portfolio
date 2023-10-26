import React,{ useState } from 'react';
import DP from '../DP/DP';
import Button from '../Button/Button';

const Header = () => {
    const handleClick = () => {
        const userAgent = navigator.userAgent;
        if (userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {
            window.open(`https://mail.google.com/mail/?view=cm&to=farshidibtihaj@gmail.com`);
        } else {
            window.open(`https://mail.google.com/mail/?view=cm&to=farshidibtihaj@gmail.com`);
        }
    };

    return (
        <header
            className='h-28'
            style={{ backgroundImage: 'linear-gradient(to right, #370537, #6d0244, #a20f44, #ce3635, #eb6612)' }}>
            <DP />
            <Button
                handleClick={handleClick}
                className=" px-4 py-2 
                absolute top-32 right-6 md:right-16 
                 font-bold tracking-wider rounded-full 
                 bg-green-600 text-gray-800"
            >
                Contact+
            </Button >
        </header>
    );
};

export default Header;