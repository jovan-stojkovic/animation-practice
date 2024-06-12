import "./Style.scss";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <LoadingPage setLoading={setLoading} />
        </motion.div>
      ) : (
        <main>
          <Header />
          <div className="app">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Products/category-one" element={<CatOne />} />
              <Route path="/Products/category-two" element={<CatTwo />} />
              <Route path="/Products/category-three" element={<CatThree />} />
              <Route path="/Products/category-four" element={<CatFour />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </main>
      )}
    </AnimatePresence>
  );
};

export default App;
