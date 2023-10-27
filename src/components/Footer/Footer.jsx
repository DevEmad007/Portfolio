import React,{ useEffect,useLayoutEffect,useRef,useState } from 'react';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Github from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import X from '../../assets/twitterx.svg';
import useSkipRender from '../../Hooks/useSkipRender';

const Footer = () => {
    const [ ipAddress,setIpAddress ] = useState();
    const [ country,setCountry ] = useState();
    const skipRender = useRef(true);
    const year = new Date().getFullYear();

    useLayoutEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIpAddress(data.ip));
    },[]);

    useSkipRender(() => {
        fetch("https://api.ipfind.com/?ip=" + ipAddress)
            .then(res => res.json())
            .then(data => setCountry(data.country));
    },ipAddress);

    return (
        <footer className='text-center '>
            <div className='lg:grid grid-cols-3 place-items-center'>
                <h2 className='text-3xl font-bold tracking-wider my-12'>Logo</h2>
                <div className='w-full'>
                    <ul className=' lg:grid grid-cols-4 gap-4'>
                        <li className='my-6 text-xl whitespace-nowrap'>
                            <a href="#">
                                Link One
                            </a>
                        </li>
                        <li className='my-6 text-xl whitespace-nowrap'>
                            <a href="#">
                                Link Two
                            </a>
                        </li>
                        <li className='my-6 text-xl whitespace-nowrap'>
                            <a href="#">
                                Link Three
                            </a>
                        </li>
                        <li className='my-6 text-xl whitespace-nowrap'>
                            <a href="#">
                                Link Four
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='w-full' >
                    <ul className='my-12 mx-10 md:mx-20 grid gap-4 grid-cols-5 place-items-center justify-center'>
                        <li>
                            <a className='font-bold text-lg' href="https://www.facebook.com/farsidibtihag.yemad?mibextid=ZbWKwL">
                                <img className=' w-10' src={Facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='font-bold text-lg' href="https://github.com/DevEmad007">
                                <img className=' w-10' src={Github} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='font-bold text-lg' href="https://www.linkedin.com/in/farshid-ibtihaj-994104293">
                                <img className=' w-10' src={LinkedIn} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='font-bold text-lg' href="https://x.com/FarshidIbtihaj?s=09">
                                <img className=' w-10' src={X} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='font-bold text-lg' href="https://instagram.com/farshidibtihaj?igshid=MzMyNGUyNmU2YQ==">
                                <img className=' w-10' src={Instagram} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t py-10 mx-10">
                <ul className='grid grid-cols-1 gap-4 pb-8'>
                    <li >
                        <a className=' border-b tracking-wider' href="#">
                            Privacy Policy
                        </a>
                    </li>
                    <li >
                        <a className=' border-b tracking-wider' href="#">
                            Terms of Service
                        </a>
                    </li>
                    <li >
                        <a className=' border-b tracking-wider' href="#">
                            About
                        </a>
                    </li>
                </ul>
                <p>© {year} {country}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;