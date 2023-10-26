import React from 'react';
import MainCards from '../Cards/MainCards';

const Projects = () => {
    return (
        <div className='p-6 mt-12 overflow-y-scroll'>
            <h1 className='ml-2 text-2xl tracking-wide font-bold'>Projects</h1>
            <div className='my-0.5 w-full flex justify-evenly items-center flex-wrap md:flex-nowrap'>
                <MainCards />
                <MainCards />
                <MainCards />
                <MainCards />
            </div>
        </div>
    );
};

export default Projects;