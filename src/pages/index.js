// pages/index.js

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Application from "@/components/Application";
import Application2 from "@/components/Application2";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Application3 from "@/components/Application3";

// import Head from 'next/head';

const Home = () => {
  return (
    <main>
      <div>
        {/* <Hero /> */}
        <About />
        <Skills />
        <Application3 />
        <Application />
        <Application2 />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
