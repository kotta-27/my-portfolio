import React, { useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Badge = ({ gradient, textColor, children }) => (
  <div className="w-full px-3">
    <div
      className={`
        px-3 py-3 rounded-lg font-bold text-center
        transform transition-all duration-300 hover:scale-105
        shadow-lg
      `}
      style={{
        background: gradient,
        color: textColor,
        fontSize: "0.8rem",
        textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      {children}
    </div>
  </div>
);

const App_qpizza = () => {
  const { translations } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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
      }, 5000); // 5秒後に非表示

      return () => clearTimeout(timer);
    }
  }, [inView]);

  // blocksとbadgesを取得
  const blocks = translations?.applications?.pizza?.blocks || [];
  const badges = translations?.applications?.pizza?.badges;

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

  // blocksが存在しない場合は何も表示しない
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto max-w-8xl my-10 px-1 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="justify-center border p-3 bg-gray-900 text-white rounded-lg">
            {/* タイトルとバッジのコンテナ */}
            <div className="relative flex flex-col sm:flex-row items-center mb-6">
              <div className="w-full sm:w-1/3" />
              <div ref={ref} className="relative text-2xl font-bold underline py-2 my-5 sm:my-0 w-full sm:w-1/3 text-center">
                <a
                  href="https://qpizza-game.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  {translations.applications.pizza.title}
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
                        {translations.applications.pizza.tooltip}
                        {/* 吹き出しの尻尾 */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="16"
                            height="8"
                            viewBox="0 0 16 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 8L0 0H16L8 8Z"
                              fill="#3B82F6" // bg-blue-500 と同じ色
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* バッジコンテナ */}
              <div className="w-full sm:w-1/3 flex flex-row justify-end gap-2 px-2">
                <Badge
                  gradient="linear-gradient(135deg, #00A8FF, #AAA5FF)"
                  textColor="#000"
                >
                  <span>{badges.exhibition.line1}</span>
                  <br />
                  <span>{badges.exhibition.line2}</span>
                </Badge>

                <Badge
                  gradient="linear-gradient(135deg, #0044FF, #7766FF)"
                  textColor="#fff"
                >
                  <span>{badges.featured.line1}</span>
                  <br />
                  <span>{badges.featured.line2}</span>
                </Badge>
              </div>
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

              <div className="w-5/6 mx-auto border-t-2 border-gray-700 my-5" />

              <div className="flex justify-center mt-5">
                {translations.applications.pizza.notes.map((note, index) => (
                  <div className="mb-4 flex flex-col items-center justify-center">
                    <React.Fragment key={index}>
                      {note.note}<br />
                      <a href={note.link} target="_blank" className="underline text-blue-500 hover:text-blue-200 transition-colors duration-300 break-all">
                        {note.link}
                      </a>
                    </React.Fragment>
                  </div>
                ))}
              </div>

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
    </div >
  );
};

export default App_qpizza;
