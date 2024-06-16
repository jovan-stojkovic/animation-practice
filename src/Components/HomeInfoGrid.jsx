import { motion } from "framer-motion";

const HomeInfoGrid = () => {
  const containerMotion = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const itemMotion = {
    hidden: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      className="home-info-grid"
      variants={containerMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div className="home-info-div" variants={itemMotion}>
        <div className="img-cont"></div>
        <div className="logo-cont"></div>
        <h2>Izrada ograda i Balkona</h2>
      </motion.div>

      <motion.div className="home-info-div" variants={itemMotion}>
        <div className="img-cont"></div>
        <div className="logo-cont"></div>
        <h2>Izrada industrijskog nameštaja</h2>
      </motion.div>

      <motion.div className="home-info-div" variants={itemMotion}>
        <div className="img-cont"></div>
        <div className="logo-cont"></div>
        <h2>Vi birate boju i dimenzije</h2>
      </motion.div>

      <motion.div className="home-info-div" variants={itemMotion}>
        <div className="img-cont"></div>
        <div className="logo-cont"></div>
        <h2>Montaža i servis</h2>
      </motion.div>
    </motion.div>
  );
};

export default HomeInfoGrid;
