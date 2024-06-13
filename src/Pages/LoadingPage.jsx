import { useEffect } from "react";
import { motion } from "framer-motion";

const LoadingPage = ({ setLoading }) => {
  const containerMotion = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemMotion = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },

    exit: {
      opacity: 0,
    },
  };

  const itemMainMotion = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="loader"
      variants={containerMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div className="main-img" variants={itemMainMotion}>
        <motion.img src="/products/7.jpg" alt="img" layoutId="main-img-one" />
      </motion.div>
      <motion.div className="latter-img" variants={itemMotion}></motion.div>
      <motion.div className="latter-img" variants={itemMotion}></motion.div>
      <motion.div className="latter-img" variants={itemMotion}></motion.div>
      <motion.div className="latter-img" variants={itemMotion}></motion.div>
    </motion.div>
  );
};

export default LoadingPage;
