import { Link } from "react-router-dom";
import "../Styles/Products.scss";
import { motion } from "framer-motion";

const Products = () => {
  const sectionMotion = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.2,
        type: "spring",
        stiffness: 150,
      },
    },
  };

  return (
    <div className="page products">
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className="text-part">
          <h1>Category 1</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis! Kitaque nisi
            quasi at cumque nemo ipsa. Possimus esse omnis commodi hic volupt
            atibus? Ipsa repudi andae sint, aperiam incidunt distinctio tempora
            tempor ibus perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link
            to="/proizvodi/kategorija-jedan"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Pogledaj kompletnu ponudu
          </Link>
        </div>
        <div className="img-part"></div>
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className="text-part">
          <h1>Category 2</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis! Kitaque nisi
            quasi at cumque nemo ipsa. Possimus esse omnis commodi hic volupt
            atibus? Ipsa repudi andae sint, aperiam incidunt distinctio tempora
            tempor ibus perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link
            to="/proizvodi/kategorija-dva"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Pogledaj kompletnu ponudu
          </Link>
        </div>
        <div className="img-part"></div>
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className="text-part">
          <h1>Category 3</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis! Kitaque nisi
            quasi at cumque nemo ipsa. Possimus esse omnis commodi hic volupt
            atibus? Ipsa repudi andae sint, aperiam incidunt distinctio tempora
            tempor ibus perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link
            to="/proizvodi/kategorija-tri"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Pogledaj kompletnu ponudu
          </Link>
        </div>
        <div className="img-part"></div>
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className="text-part">
          <h1>Category 4</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis! Kitaque nisi
            quasi at cumque nemo ipsa. Possimus esse omnis commodi hic volupt
            atibus? Ipsa repudi andae sint, aperiam incidunt distinctio tempora
            tempor ibus perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link
            to="/proizvodi/kategorija-cetiri"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Pogledaj kompletnu ponudu
          </Link>
        </div>
        <div className="img-part"></div>
      </motion.section>
    </div>
  );
};

export default Products;
