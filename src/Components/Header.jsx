import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import "../Styles/HeaderFooter.scss";
import { useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";

const Header = () => {
  const [showHiddenDiv, setShowHiddenDiv] = useState("hide");
  const [menu, setMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const navElementsMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delayChildren: 0.8,
        staggerChildren: 0.3,
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
        stiffness: 90,
      },
    },
  };

  return (
    <nav className={theme}>
      <div className="nav-cont">
        <a href="/" className="logo"></a>
        <div
          className={`nav-elements ${menu ? "show" : ""}`}
          variants={navElementsMotion}
          initial="hidden"
          animate="visible"
        >
          <div className="dark-part" onClick={handleMenu}></div>
          <motion.div
            className="navlinks"
            variants={navElementsMotion}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={navlinksMotion}>
              <NavLink
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleMenu();
                }}
              >
                Početna
              </NavLink>
            </motion.div>
            <motion.div
              variants={navlinksMotion}
              className="products-navlink"
              onMouseEnter={() => setShowHiddenDiv("show")}
              onMouseLeave={() => setShowHiddenDiv("hide")}
            >
              <NavLink
                to="/proizvodi"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleMenu();
                }}
              >
                Proizvodi
              </NavLink>
              <div className={`hidden-div ${showHiddenDiv}`}>
                <div className="hidden-div-cont">
                  <NavLink
                    to="/proizvodi/kategorija-jedan"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Kategorija 1
                  </NavLink>
                  <NavLink
                    to="/proizvodi/kategorija-dva"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Kategorija 2
                  </NavLink>
                  <NavLink
                    to="/proizvodi/kategorija-tri"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Kategorija 3
                  </NavLink>
                  <NavLink
                    to="/proizvodi/kategorija-cetiri"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Kategorija 4
                  </NavLink>
                </div>
              </div>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <NavLink
                to="/o-nama"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleMenu();
                }}
              >
                O Nama
              </NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <NavLink
                to="/kontakt"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleMenu();
                }}
              >
                Kontakt
              </NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <button className="theme" onClick={toggleTheme}>
                {theme === "light" ? "Tema: svetla" : "Tema: tamna"}
              </button>
            </motion.div>
          </motion.div>
        </div>
        <button
          className={`menu-btn ${menu ? "show" : ""}`}
          onClick={handleMenu}
        ></button>
      </div>
    </nav>
  );
};

export default Header;
