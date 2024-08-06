import Link from "next/link";
import Footer from "./Footer";
import { useState } from "react";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav-container mt-5">
      <div className="logo">
        <a
          href="/"
          className="nav-name text-3xl font-custom "
          onClick={scrollToTop}
        >
          Kota's Portfolio
        </a>
      </div>
      <div className="flex">
        <a
          href="#about-name"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 transition duration-500"
        >
          About me
        </a>
        <a
          href="#skills-name"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 transition duration-500"
        >
          Skills
        </a>
        <a
          href="#application-name"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 transition duration-500"
        >
          Application
        </a>
        <a
          href="#projects-name"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 transition duration-500"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
