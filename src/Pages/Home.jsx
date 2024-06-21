import { motion } from "framer-motion";
import AnimatedIcon from "../Components/AnimatedIcon";
import HomeInfoGrid from "../Components/HomeInfoGrid";
import Slider from "../Components/Slider";
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
      <motion.p variants={pMotion}>Mi napravimo.</motion.p>
      <motion.p variants={pMotion}>OSAPLAST</motion.p>
      <div className="animated-icon">
        <AnimatedIcon />
      </div>

      {!loading && (
        <div className="home-container">
          <motion.img
            src="/products/11.jpeg"
            alt="img"
            layoutId="main-img-one"
            className="home-main-img"
          />
          <Slider />
          <HomeInfoGrid />
        </div>
      )}
    </motion.div>
  );
};

export default Home;
