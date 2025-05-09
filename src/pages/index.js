// pages/index.js

import About from "../components/About";
import Skills from "../components/Skills";
import App_qcircuit from "@/components/App_qcircuit";
import App_qual from "@/components/App_qual";
import Works from '../components/Works';
import Contact from "../components/Contact";
import App_nanj from "@/components/App_nanj";
import App_qpizza from "@/components/App_qpizza";
import App_qmario from "@/components/App_qmario";
import App_tex from "@/components/App_tex";
import App_purchase from "@/components/App_purchase";
// import Head from 'next/head';

const Home = () => {
  return (
    <main>
      <div>
        {/* <Hero /> */}
        <About />
        <Skills />
        <App_purchase />
        <App_tex />
        <App_qpizza />
        <App_qmario />
        <App_nanj />
        <App_qcircuit />
        <App_qual />
        <Works />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
