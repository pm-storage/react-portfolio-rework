import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Welcome from './components/Welcome';
import Skills from  './components/Skills';
import AboutMe from './components/AboutMe';
import ProjectsHead from './components/ProjectsHead';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (

    <div>
    <Navbar />
    <Slider />
    <Welcome />
    <Skills />
    <AboutMe />
    <ProjectsHead />
    <Projects />
    <Contact />
    <Social />
    <Footer />
    </div>

    );
}

export default App;
