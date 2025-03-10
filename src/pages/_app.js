// pages/_app.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from 'next/head';
import "@/styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import EnhancedLoading from "../components/EnhancedLoading";
import { LanguageProvider } from '../contexts/LanguageContext';

export default function App({ Component, pageProps }) {
  const [showWelcome, setShowWelcome] = useState(true);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ウェルカム画面を2秒後に非表示
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    // ローディング状態の管理
    const fetchLoadingState = async () => {
      try {
        const response = await fetch('/api/loading');
        const data = await response.json();

        if (data.progress >= 100) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Loading error:', error);
        setIsLoading(false);
      }
    };

    const interval = setInterval(fetchLoadingState, 1000);

    // 2秒後に強制的にローディングを終了
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(welcomeTimer);
      clearInterval(interval);
      clearTimeout(loadingTimer);
    };
  }, []);

  // ページ遷移用のアニメーション設定
  const pageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 1.0, x: -100, transition: { duration: 0.5 } },
  };

  return (
    <LanguageProvider>
      <Head>
        <title>Kota's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <EnhancedLoading key="welcome" />
        ) : isLoading ? (
          <EnhancedLoading key="loading" />
        ) : (
          <Layout key="main">
            <motion.div
              key={router.route}
              variants={pageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ position: "relative", width: "100%" }}
            >
              <Component {...pageProps} />
            </motion.div>
          </Layout>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
}