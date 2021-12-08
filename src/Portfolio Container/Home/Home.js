import React from 'react';
import Contact from '../Contact/Contact';


import Footer from './Footer/Footer';
import Projects from './Home Projects/Projects';
import Profile from './Profile';

const Home = () => {
    return (
        <div>
            <Profile/>
            <Projects/>
        <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;