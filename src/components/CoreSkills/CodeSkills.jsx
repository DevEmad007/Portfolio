import React from 'react';
import SkillCard from '../Cards/SkillCard';

const CodeSkills = () => {
    const db = [ {
        heading: 'Frontend',
        skils: [ 'HTML',"CSS","Javascript","Tailwind CSS","Bootstrap","React","RESTFULL API","Redux" ]
    },
    {
        heading: 'Backend',
        skils: [ 'PHP','lavarel' ]
    },
    {
        heading: 'Database',
        skils: [ 'MySQL',"MongoDB","PostgreSQL" ]
    },
    {
        heading: 'Devops',
        skils: [ 'GIT','GITHUB',"AWS","Firebase","Google Cloud" ]
    },
    ];

    const otherProjects = [
        {
            name: 'Project one',
            des: 'React JS,Firebase',
            path: ''
        },
        {
            name: 'Project two',
            des: 'React Tailwind css',
            path: ''
        },
        {
            name: 'Project three',
            des: 'React Bootstrap',
            path: ''
        },
        {
            name: 'Project four',
            des: 'lorem.......',
            path: ''
        },
    ];

    return (
        <div className='mx-6'>
            <h2 className='text-xl font-bold tracking-wider '>
                What Do I Know
            </h2>
            <div className='ml-2 md:ml-1 grid  grid-cols-1 lg:grid-cols-80/20'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                    {
                        db.map((e,i) => (
                            <SkillCard key={i} db={e} />))
                    }
                </div>
                <div className='mt-4'>
                    <h3 className='mb-4 text-xl font-bold tracking-wider '>Other Projects</h3>
                    <ul className=' flex flex-col gap-1'>
                        {
                            otherProjects.map((e,i) => (
                                <li
                                    className='p-2 text-lg 
                                font-semibold 
                                flex justify-between items-center 
                                border-b border-gray-600 ' key={i}>
                                    <div>
                                        {e?.name}
                                        <p className='font-normal text-base text-gray-300'>{e?.des}</p>
                                    </div>
                                    <div className='h-4 w-4 border-b-2 border-l-2 rotate-225'></div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CodeSkills;