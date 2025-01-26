// pages/_app.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const WelcomeAnimation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const sphereStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at top left, #007bff 0%, #000066 100%)',
    boxShadow: 'inset -5px -5px 15px rgba(0, 0, 0, 0.3), inset 5px 5px 15px rgba(0, 123, 255, 0.3), 0 0 30px rgba(0, 123, 255, 0.9), 0 8px 80px rgba(0, 123, 255, 0.6)',
    animation: 'rotateSphere 6s linear infinite',
  };

  const loadingTextStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    marginTop: '20px',
    fontFamily: 'sans-serif',
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        background: "#000033",
        zIndex: 9999,
      }}
    >
      <motion.div style={sphereStyle} />
      <motion.p style={loadingTextStyle}>Loading...</motion.p>
    </motion.div>
  );
};

export default function App({ Component, pageProps }) {
  const [showWelcome, setShowWelcome] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); // 2秒後にウェルカム画面を非表示にする

    return () => clearTimeout(timer);
  }, []);

  // ページ遷移用のアニメーション設定
  const pageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 1.0, x: -100, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence mode="wait">
      {showWelcome ? (
        <WelcomeAnimation key="welcome" />
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
  );
}
