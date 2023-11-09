import React from 'react';
import Projects from '../components/Projects/Projects';
import CodeSkills from '../components/CoreSkills/CodeSkills';
import Reviews from '../components/Reviews/Reviews';
import GithubPage from '../components/GithubPage/GithubPage';
import ProjectPreview from '../components/Modals/ProjectPreview';

const Home = () => {
    return (
        <>
            <Projects />
            <CodeSkills />
            <Reviews />
        </>
    );
};

export default Home;