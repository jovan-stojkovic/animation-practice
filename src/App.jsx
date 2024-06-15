import "./Styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import LoadingPage from "./Pages/LoadingPage";

import CatOne from "./Categories/CatOne";
import CatTwo from "./Categories/CatTwo";
import CatThree from "./Categories/CatThree";
import CatFour from "./Categories/CatFour";
import { useEffect, useState } from "react";

import ThemeContext from "./Helpers/ThemeContext";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <LayoutGroup type="crossfade">
      <AnimatePresence>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {loading ? (
            <motion.div key="loader">
              <LoadingPage setLoading={setLoading} />
            </motion.div>
          ) : (
            <main className={theme}>
              <Header />
              <div className="app">
                <Routes>
                  <Route path="/" element={<Home loading={loading} />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Products" element={<Products />} />
                  <Route path="/Products/category-one" element={<CatOne />} />
                  <Route path="/Products/category-two" element={<CatTwo />} />
                  <Route
                    path="/Products/category-three"
                    element={<CatThree />}
                  />
                  <Route path="/Products/category-four" element={<CatFour />} />
                  <Route path="/Contact" element={<Contact />} />
                </Routes>
              </div>
              <Footer />
            </main>
          )}
        </ThemeContext.Provider>
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default App;
