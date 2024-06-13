import { motion } from "framer-motion";

const Home = ({ loading }) => {
  return (
    <div className="page home">
      <p>Vi zamislite</p>
      <p>OSAPLAST</p>
      <p>Mi ostvarimo</p>
      {!loading && (
        <div className="transition-img final">
          <motion.img src="/products/7.jpg" alt="img" layoutId="main-img-one" />
        </div>
      )}
    </div>
  );
};

export default Home;
