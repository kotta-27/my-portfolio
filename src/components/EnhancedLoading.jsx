// components/EnhancedLoading.js
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useLanguage } from '../contexts/LanguageContext';

export default function EnhancedLoading() {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const { translations } = useLanguage();

    useEffect(() => {
        // クライアントサイドでwindowサイズを設定
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const startTime = Date.now();
        const duration = 1500; // 2秒間

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min((elapsed / duration) * 150, 100);

            if (progress === 100) {
                clearInterval(interval);
            }

            setLoadingProgress(progress);
        }, 50);

        // 確実に100%になるように
        const timeout = setTimeout(() => {
            setLoadingProgress(100);
        }, duration);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    // 粒子の初期位置を計算する関数
    const getRandomPosition = (dimension) => {
        return Math.random() * (dimension || 500); // フォールバック値として500を使用
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900 to-black flex flex-col items-center justify-center z-50">
            {/* Animated particles background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-blue-400 rounded-full opacity-40"
                        initial={{
                            x: getRandomPosition(windowSize.width),
                            y: getRandomPosition(windowSize.height),
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            y: [null, getRandomPosition(windowSize.height), getRandomPosition(windowSize.height)],
                            x: [null, getRandomPosition(windowSize.width), getRandomPosition(windowSize.width)],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            width: `${Math.random() * 8 + 2}px`,
                            height: `${Math.random() * 8 + 2}px`,
                            filter: "blur(1px)"
                        }}
                    />
                ))}
            </div>

            {/* Central loading element */}
            <div className="relative mb-16">
                <motion.div
                    className="w-32 h-32 rounded-full border-t-4 border-r-4 border-blue-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-0 w-32 h-32 rounded-full border-b-4 border-l-4 border-cyan-400"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                >
                    <div className="text-blue-400 font-bold text-xl">
                        {Math.floor(loadingProgress)}%
                    </div>
                </motion.div>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-2 bg-blue-900 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    initial={{ width: "0%" }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ type: "spring", stiffness: 20 }}
                />
            </div>

            {/* Loading text with typing effect */}
            <motion.div
                className="mt-6 text-lg text-blue-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Loading System...
            </motion.div>
        </div>
    );
}