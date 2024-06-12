import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const navElementsMotion = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const navlinksMotion = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <nav>
      <div className="nav-cont">
        <Link to="/" className="logo"></Link>
        <div
          className="nav-elements"
          variants={navElementsMotion}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="navlinks"
            variants={navElementsMotion}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={navlinksMotion}>
              <NavLink to="/">Home</NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion} className="products-navlink">
              <NavLink to="/Products">Products</NavLink>
              <div className="hidden-div">
              <div className="hidden-div-cont">
                <NavLink to="/Products/category-one">Kategorija 1</NavLink>
                <NavLink to="/Products/category-two">Kategorija 2</NavLink>
                <NavLink to="/Products/category-three">Kategorija 3</NavLink>
                <NavLink to="/Products/category-four">Kategorija 4</NavLink>
              </div>
              </div>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <NavLink to="/About">About</NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <NavLink to="/Contact">Contact</NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <button className="theme"></button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
