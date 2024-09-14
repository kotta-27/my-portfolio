import { useState, useEffect } from "react";

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30;
      if (show) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`nav-container ${
        isTransparent ? "bg-opacity-50" : ""
      } transition-all duration-300`}
    >
      <div className="logo">
        <a
          href="/"
          className={`nav-name font-custom ${
            isTransparent ? "text-alpha" : ""
          }`}
          onClick={scrollToTop}
        >
          Kota's Portfolio
        </a>
      </div>
      <div className="link-container">
        <a
          href="#about-name"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mx-2 transition duration-500"
        >
          About
        </a>
        <a
          href="#skills-name"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mx-2 transition duration-500"
        >
          Skills
        </a>
        <a
          href="#application-name"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mx-2 transition duration-500"
        >
          Application
        </a>
        <a
          href="#projects-name"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mx-2 transition duration-500"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
