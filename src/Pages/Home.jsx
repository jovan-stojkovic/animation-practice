import { motion } from "framer-motion";
import "../Styles/HomePage.scss";


const Home = ({ loading }) => {
  const homeContainerMotion = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const pMotion = {
    hidden: {
      opacity: 0,
      x: 500,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="page home"
      variants={homeContainerMotion}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={pMotion}>Vi zamislite,</motion.p>
      <motion.p variants={pMotion}>Mi ostvarimo.</motion.p>
      <motion.p variants={pMotion}>OSAPLAST</motion.p>
      {!loading && (
        <div className="transition-img final">
          <motion.img src="/products/11.jpeg" alt="img" layoutId="main-img-one" />
        </div>
      )}
    </motion.div>
  );
};

export default Home;
