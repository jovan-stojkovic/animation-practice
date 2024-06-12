import "./Style.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

import CatOne from "./Categories/CatOne";
import CatTwo from "./Categories/CatTwo";
import CatThree from "./Categories/CatThree";
import CatFour from "./Categories/CatFour";

const App = () => {
  return (
    <main>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
            <Route path="/Products/category-one" element={<CatOne />}/>
            <Route path="/Products/category-two" element={<CatTwo />}/>
            <Route path="/Products/category-three" element={<CatThree />}/>
            <Route path="/Products/category-four" element={<CatFour />}/>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
};

export default App;
