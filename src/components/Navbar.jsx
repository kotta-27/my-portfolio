import { useState, useEffect } from "react";
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

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
    <nav className="fixed top-0 left-0 w-full bg-zinc-800 z-50 border-b border-zinc-700 transition-all duration-300">
      <div className="flex h-16 items-center justify-between">
        {/* logo */}
        <div className="w-full sm:w-1/3 flex items-center">
          <a
            href="/"
            className="text-3xl font-bold text-white lg:pl-20 pl-5"
            onClick={scrollToTop}
          >
            Kota's Portfolio
          </a>
        </div>

        {/* 区切り線 */}
        {/* <div className="ml-10 border-l border-gray-600 w-5" /> */}

        {/* メニュー */}
        <div className="flex flex-row sm:w-2/3 border-l border-gray-600">
          <div className="hidden sm:ml-6 sm:block w-2/3">
            <div className="flex sm:space-x-4 space-x-2 items-center">
              {[
                { id: 'about', text: 'About' },
                { id: 'skills', text: 'Skills' },
                { id: 'applications', text: 'Applications' },
                { id: 'works', text: 'Works' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}-name`}
                  className="rounded py-2 text-base font-bold text-gray-300 hover:bg-gray-300 hover:text-black transition duration-150"
                  onClick={(e) => scrollToSection(e, `#${item.id}-name`)}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* もしjaなら英語への切り替えボタン、enなら日本語への切り替えボタン */}
          {/* モバイルの場合は非表示 */}
          <div className="hidden sm:block w-1/3">
            <div className="flex justify-end md:pr-20 pr-5">
              <button
                onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
                className="px-0 sm:px-4 py-2 w-10 sm:w-24 text-center border transition-colors rounded-md bg-gray-700 text-white"
              >
                {language === "ja" ? "English" : "日本語"}
              </button>
            </div>
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


      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          {/* 言語切り替えボタン */}
          <div className="flex justify-center">
            <button
              onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
              className="w-5/6 py-2 px-3 mb-2 text-left transition-colors rounded-md bg-zinc-500 text-white"
            >
              {language === "ja" ? "Switch to English" : "Switch to Japanese"}
            </button>
          </div>
          <div className="space-y-2 pb-3 flex flex-col items-center">
            {[
              { id: 'about', text: 'About' },
              { id: 'skills', text: 'Skills' },
              { id: 'applications', text: 'Applications' },
              { id: 'works', text: 'Works' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}-name`}
                className="w-5/6 block rounded-md px-3 py-2 text-base font-medium text-white bg-zinc-900"
                onClick={(e) => scrollToSection(e, `#${item.id}-name`)}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
