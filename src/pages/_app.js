// pages/_app.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import Layout from "../components/Layout";

const WelcomeAnimation = () => {
  const text = "Welcome!";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        type: "tween",
        ease: "easeInOut",
      },
    },
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
        background: "linear-gradient(45deg, #00DBDE 0%, #FC00FF 100%)",
        zIndex: 9999,
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
          style={{
            display: "inline-block",
            fontSize: "5rem",
            fontWeight: "bold",
            color: "#ff0",
            fontFamily: "Roboto Condensed",
            textShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function App({ Component, pageProps }) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); // 3秒後にウェルカム画面を非表示にする

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showWelcome ? (
        <WelcomeAnimation key="welcome" />
      ) : (
        <Layout key="main">
          <Component {...pageProps} />
        </Layout>
      )}
    </AnimatePresence>
  );
}
