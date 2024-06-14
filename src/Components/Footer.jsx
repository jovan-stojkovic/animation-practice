import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/HeaderFooter.scss";


const footerMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerMotion}
      initial="hidden"
      whileInView="visible"
    >
      <div className="footer-cont">
        <div className="left">
          <p>064 000 000 0</p>
          <p>Miljakovačke Staze 00</p>
          <p>osaplast@gmail.com</p>
        </div>
        <div className="center">
          <h3>OsaPlast doo Beograd</h3>
          <p>25 godina sa Vama</p>
        </div>
        <div className="right">
          <Link target="_blank" to="https://www.instagram.com/"></Link>
          <Link target="_blank" to="https://www.facebook.com/"></Link>
          <Link target="_blank" to="https://www.youtube.com/"></Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
