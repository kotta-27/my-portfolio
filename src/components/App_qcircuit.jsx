import React, { useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const App_qcircuit = () => {
  const { translations } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // blocksを取得
  const blocks = translations?.applications?.qcircuit?.blocks || [];

  // InView hookの設定
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  // タイトルが表示されたら吹き出しを表示
  React.useEffect(() => {
    if (inView) {
      setShowTooltip(true);
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  const nextBlock = () => {
    setSlideDirection(1);
    if (currentIndex < blocks.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevBlock = () => {
    if (currentIndex == blocks.length - 1) {
      setSlideDirection(-1);
    }
    setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="justify-center border p-3 bg-gray-900 text-white mt-20 rounded-lg">
        <div ref={ref} className="relative text-2xl font-bold underline py-2 my-5 text-center">
          <a
            href="https://kotta-27.github.io/react-quantumcircuit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            {translations.applications.qcircuit.title}
          </a>

          {/* 吹き出し */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-16 left-1/2 transform -translate-x-1/2"
              >
                <div className="relative bg-blue-500 text-white px-6 py-3 rounded-2xl text-sm whitespace-nowrap shadow-lg">
                  {translations.applications.qcircuit.tooltip}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8L0 0H16L8 8Z" fill="#3B82F6" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="relative group w-full max-w-3xl mx-auto">
                <img
                  src={blocks[currentIndex].image}
                  alt={blocks[currentIndex].title}
                  className="w-full object-contain rounded-lg shadow-md cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-200 rounded-lg"
                >
                  <i className="fa-solid fa-expand text-3xl text-white/0 group-hover:text-white/90"></i>
                </button>
              </div>
              <div className="text-xl font-bold my-4 text-center">
                {blocks[currentIndex].title}
              </div>
              <div className="text-center mt-4 text-gray-100">
                {blocks[currentIndex].description.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {currentIndex > 0 && (
            <button
              onClick={prevBlock}
              className="absolute left-1 sm:left-10 top-1/4 sm:top-1/3 md:top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-2xl bg-black text-white p-2 sm:p-3 md:p-3 lg:p-5 rounded hover:bg-gray-500 transition-colors"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}

          {currentIndex < blocks.length - 1 && (
            <button
              onClick={nextBlock}
              className="absolute right-1 sm:right-10 top-1/4 sm:top-1/3 md:top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-2xl bg-black text-white p-2 sm:p-3 md:p-3 lg:p-5 rounded hover:bg-gray-500 transition-colors"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {blocks.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSlideDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <a href="https://github.com/kotta-27/react-quantumcircuit" target="_blank">
            <i
              className="fa-brands fa-github text-3xl py-4 px-2 scale-on-hover-github translate shadow"
              style={{ fontSize: "3rem" }}
            ></i>
          </a>
        </div>
      </div>

      {/* モーダル */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-5/6">
              <img
                src={blocks[currentIndex].image}
                alt={blocks[currentIndex].title}
                className="w-full h-auto object-contain"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App_qcircuit;
