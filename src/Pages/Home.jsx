import React from 'react';
import Header from '../components/Header/Header';
import MainCards from '../components/Cards/MainCards';
import Projects from '../components/Projects/Projects';
import CodeSkills from '../components/CoreSkills/CodeSkills';

const Home = () => {
    return (
        <>
            <Header />
            <Projects />
            <CodeSkills />
            <div className=' h-20 '></div>
        </>
    );
};

export default Home;