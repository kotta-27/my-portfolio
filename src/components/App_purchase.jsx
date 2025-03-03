import React, { useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from "framer-motion";

const App_purchase = () => {
  const { translations } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // blocksをtranslationsから取得
  const blocks = translations.applications.purchase.blocks;

  const nextBlock = () => {
    setSlideDirection(1);
    if (currentIndex < blocks.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevBlock = () => {
    if (currentIndex == blocks.length - 1) {
      console.log("currentIndex == blocks.length - 1です", slideDirection);
      setSlideDirection(-1);
    }
    setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="mx-auto max-w-6xl my-10">
      <div className="flex flex-col space-y-6">
        {/* メインコンテンツ */}
        <div className="justify-center border p-3 bg-gray-900 text-white rounded-lg">
          <div className="text-2xl font-bold underline mb-6 text-center">
            {translations.applications.purchase.title}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                // スライド方向を動的に設定
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
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
                <div className="text-center mt-4 text-gray-300">
                  {blocks[currentIndex].description.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ナビゲーションボタン - 最初のスライドでは左ボタンを非表示 */}
            {currentIndex > 0 && (
              <button
                onClick={prevBlock}
                className="absolute left-1 sm:left-10 top-1/4 sm:top-1/3 md:top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-2xl bg-black text-white p-2 sm:p-3 md:p-3 lg:p-5 rounded hover:bg-gray-500 transition-colors"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}

            {/* 最後のスライドでは右ボタンを非表示 */}
            {currentIndex < blocks.length - 1 && (
              <button
                onClick={nextBlock}
                className="absolute right-1 sm:right-10 top-1/4 sm:top-1/3 md:top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-2xl bg-black text-white p-2 sm:p-3 md:p-3 lg:p-5 rounded hover:bg-gray-500 transition-colors"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )}
          </div>

          {/* インジケーター */}
          <div className="flex justify-center space-x-2 mt-6">
            {blocks.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  // インジケーターをクリックした時もスライド方向を設定
                  setSlideDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
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
  );
};

export default App_purchase;