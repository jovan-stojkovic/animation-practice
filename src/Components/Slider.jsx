import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";

const Slider = () => {
  const slides = [
    {
      url: "/products/11.jpeg",
      text: "Izrada industrijskog nameštaja po Vašoj želji.",
    },

    {
      url: "/products/6.jpg",
      text: "Kombinacija gvoždja i stakla.",
    },
    {
      url: "/products/25.jpg",
      text: "Ukrasi sa Led osvetljenjem.",
    },
    {
      url: "/products/32.jpg",
      text: "Police po Vašoj meri.",
    },
  ];

  const slideMotion = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, transition: 0.5 } },
  };

  return (
    <>
      <motion.div
        className="slide-container"
        variants={slideMotion}
        initial="hidden"
        animate="visible"
      >
        <Slide>
          {slides.map((image, index) => (
            <div key={index}>
              <div id="slide" style={{ backgroundImage: `url(${image.url})` }}>
                <p className="caption">{image.text}</p>
              </div>
            </div>
          ))}
        </Slide>
      </motion.div>
    </>
  );
};

export default Slider;
