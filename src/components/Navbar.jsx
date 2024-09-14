import { useState, useEffect } from "react";

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      setIsTransparent(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const navbarHeight =
        document.querySelector(".nav-container").offsetHeight;
      const targetPosition =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`nav-container ${
        isTransparent ? "bg-opacity-50" : ""
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className={`flex items-center `}>
            <a
              href="/"
              className={`nav-name text-2xl sm:text-3xl font-custom text-white 
              ${isTransparent ? "text-alpha" : ""}`}
              onClick={scrollToTop}
            >
              Kota's Portfolio
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["About", "Skills", "Application", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}-name`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500"
                  onClick={(e) =>
                    scrollToSection(e, `#${item.toLowerCase()}-name`)
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["About", "Skills", "Application", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}-name`}
                className="bg-blue-500 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) =>
                  scrollToSection(e, `#${item.toLowerCase()}-name`)
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
