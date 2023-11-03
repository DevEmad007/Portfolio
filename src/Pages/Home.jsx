import React from 'react';
import Header from '../components/Header/Header';
import MainCards from '../components/Cards/MainCards';
import Projects from '../components/Projects/Projects';
import CodeSkills from '../components/CoreSkills/CodeSkills';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import GithubPage from '../components/GithubPage/GithubPage';
import ProjectPreview from '../components/Modals/ProjectPreview';

const Home = () => {
    return (
        <>
            <Header />
            <Projects />
            <CodeSkills />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;