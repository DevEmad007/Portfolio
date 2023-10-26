import React from 'react';
import MainCards from '../Cards/MainCards';
// import SuperTicTacToe from '../../../public/Super-tic-tac-toe.jpg';
const Projects = () => {
    const projects = [
        {
            name: 'Adidas Clone',
            link: 'https://adidas-clone-3c3ed.web.app/',
            img: '../../../../public/adidas.jpg',
            des: 'Adidas clone build with React JS and Redux'
        },
        {
            name: 'Social Media Site',
            link: 'https://the-f-site.web.app/',
            img: '../../../../public/adidas.jpg',
            des: 'build with React JS,firebase'
        },
        {
            name: 'Super Tic-Tac-Toe',
            link: 'https://super-tic-tac-toe-f7b62.web.app/',
            img: '../../../../public/Super-tic-tac-toe.jpg',
            des: 'build with React JS and firebase realtime database'
        },
        {
            name: 'Adidas Clone',
            link: 'https://adidas-clone-3c3ed.web.app/',
            img: '../../../../public/adidas.jpg',
            des: 'Adidas clone build with React JS and Redux'
        },
    ];

    return (
        <div className='p-6 mt-12 min-w-full'>
            <h1 className='ml-2 mb-4 text-2xl tracking-wide font-bold'>Projects</h1>
            <div className='w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                {
                    projects.map((e,i) => (
                        <MainCards key={i} item={e} />
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;