import React,{ useEffect,useRef,useState } from 'react';
import DP from '../DP/DP';
import Button from '../Button/Button';

const Header = () => {
    const handleClick = () => {
        window.open(`https://www.linkedin.com/in/farshid-ibtihaj-994104293`);
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
                flex justify-center items-center transition-all z-30`}
            >
                <h4 className=' font-sans font-semibold text-2xl tracking-widest'>
                    Dev Imad
                </h4>
                <DP className={`${!show ? 'moveDP ' : window.scrollY < 50 ? 'moveBackDP' : 'moveDP'}
                    absolute lg:right-32
                    rounded-full border-2 object-cover object-center
                    border-white transition-all`} />
                <Button
                    handleClick={handleClick}
                    className={`px-4 py-2 
                    ${!show ? 'moveBTN ' : window.scrollY < 50 ? 'moveBackBTN' : 'moveBTN'} 
                    md:right-16 
                    font-bold tracking-wider rounded-full 
                     bg-green-600 text-gray-800
                     transition-all`}
                >
                    {
                        !show ? (<span className=' font-bold text-xl'> C+ </span>) : window.scrollY < 50 ?
                            (<> Contact+</>)
                            :
                            (<span className=' font-bold text-xl'> C+ </span>)
                    }

                </Button >
            </header>
            <div className='mb-40'></div>
        </>
    );
};

export default Header;