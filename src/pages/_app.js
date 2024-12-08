// pages/_app.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

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
        damping: 10,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
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
        background: "linear-gradient(45deg, #0000DE 0%, #000066 100%)",
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
            color: "#CCC",
            fontFamily: "Caveat",
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
