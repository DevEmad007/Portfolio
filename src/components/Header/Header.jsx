import React,{ useEffect,useRef,useState } from 'react';
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

    const [ show,setShow ] = useState(true);
    const [ lastScrollY,setLastScrollY ] = useState(0);
    const [ isScrolled,setIsScrolled ] = useState(false);
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
                setIsScrolled(true);
            } else { // if scroll up show the navbar
                setShow(true);
                setIsScrolled(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll',controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll',controlNavbar);
            };
        }
    },[ lastScrollY ]);

    return (
        <>
            <header
                className={`
                ${!show ? 'short-height ' : window.scrollY < 50 ? 'long-height' : 'short-height'} 
                bg-header fixed top-0 left-0 right-0 
                flex justify-center items-center
                scroll-smooth transition-all z-30`}
            >
                <h4 className=' font-sans font-semibold text-2xl tracking-widest'>Emad</h4>
                <DP className={`${!show ? 'moveDP ' : window.scrollY < 50 ? 'moveBackDP' : 'moveDP'}
                    absolute lg:right-32
                    rounded-full border-2 border-white
                    scroll-smooth transition-all`} />
                <Button
                    handleClick={handleClick}
                    className={`px-4 py-2 
                    ${window.scrollY < 30 ? 'moveBackBTN' : 'moveBTN'} 
                    md:right-16 
                    font-bold tracking-wider rounded-full 
                     bg-green-600 text-gray-800
                     scroll-smooth transition-all`}
                >
                    Contact+
                </Button >
            </header>
            <div className='mb-40'></div>
        </>
    );
};

export default Header;