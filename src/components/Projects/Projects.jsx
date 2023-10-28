import React from 'react';
import MainCards from '../Cards/MainCards';
import { projectsdb } from '../../Database/db';

const Projects = () => {

    return (
        <div className='p-6 mt-12 min-w-full'>
            <h1 className='ml-2 mb-4 text-2xl tracking-wide font-bold'>Projects</h1>
            <div className='w-full grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                {
                    projectsdb.map((e,i) => (
                        <MainCards key={i} item={e} />
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;