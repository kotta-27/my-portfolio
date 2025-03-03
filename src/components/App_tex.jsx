import React, { useState } from "react";
import ApplicationTitle from "./ApplicationTitle";
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from "framer-motion";

const App_tex = () => {
  const { translations } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/texapp.png", alt: "Main View" },
    { src: "/texapp2.png", alt: "Input View" },
    { src: "/texapp3.png", alt: "Result View" }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mx-auto max-w-7xl my-10">
      <div className="justify-center border p-3 bg-gray-900 text-white rounded-lg">
        <div className="relative flex flex-col sm:flex-row items-center mb-6">
          <div className="w-full sm:w-1/3" />
          <div className="text-2xl font-bold underline py-2 my-5 sm:my-0 w-full sm:w-1/3 text-center">
            {translations.applications.tex.title}
          </div>
        </div>

        <div className="relative w-full max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <motion.div
              className="flex"
              animate={{ x: `${-100 * currentIndex}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full"
                > 
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-contain shadow-md"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-r-lg hover:bg-black/75 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-l-lg hover:bg-black/75 transition-colors"
          >
            →
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="flex-col items-center justify-center py-3 text-center mt-4">
          {translations.applications.tex.description.map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}
          <br />
          <span className="underline">{translations.applications.tex.note}</span>
        </div>

        <div className="flex justify-end">
          <a href="https://github.com/kotta-27/img2tex-app" target="_blank">
            <i className="fa-brands fa-github text-3xl py-4 px-2 scale-on-hover-github translate shadow"
              style={{ fontSize: "3rem" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App_tex;
