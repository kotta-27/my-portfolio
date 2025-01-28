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
      const navbarHeight = document.querySelector("nav").offsetHeight;
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
    <nav className={`fixed top-0 left-0 w-full bg-zinc-800 z-50 border-b border-zinc-700 transition-all
      duration-300 hover:opacity-100 ${isTransparent ? "opacity-40" : "opacity-100"
      }  ${isOpen ? "opacity-0" : ""} `}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-3/3 md:w-5/6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <a
                href="/"
                className={`text-3xl font-bold text-white `}
                onClick={scrollToTop}
              >
                Kota's Portfolio
              </a>
            </div>
            <div className="ml-10 border-l border-gray-600 w-5">
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 justify-center items-center">
                {["About", "Skills", "Applications", "Projects"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}-name`}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:underline"
                    onClick={(e) =>
                      scrollToSection(e, `#${item.toLowerCase()}-name`)
                    }
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6 block"
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
                  className="h-6 w-6 block"
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

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {["About", "Skills", "Applications", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}-name`}
                className="block rounded-md px-3 py-2 text-base font-medium text-white bg-zinc-900"
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
