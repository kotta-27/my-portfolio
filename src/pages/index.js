// pages/index.js

import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Application from '@/components/Application';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

// import Head from 'next/head';

const Home = () => {
  return (
    <main>
      <div>
        {/* <Hero /> */}
        <About />
        <Skills />
        <Application />
        <Projects />
        <Contact /> 
      </div>
    </main>
  );
};

export default Home;