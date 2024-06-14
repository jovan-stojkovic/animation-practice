import "../Styles/Category.scss";
import { motion } from "framer-motion";

const CatFour = () => {
  const products = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];

  const containerMotion = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const productMotion = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className="page category four">
      <div className="top-part">
        <h1>Category 4</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
          delectus.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolores
          corporis fuga. Iusto veritatis quasi, laudantium nam blanditiis
          temporibus unde doloremque minus numquam voluptas odio est repellat.
          Expedita ea dignissimos rerum nemo aliquam ipsa velit tempora delectus
          recusandae id distinctio repellat optio. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Aut dolores corporis fuga. Iusto
          veritatis quasi, laudantium nam blanditiis temporibus unde doloremque
          minus numquam voluptas odio est repellat. Expedita ea dignissimos
          rerum nemo aliquam ipsa velit tempora delectus recusandae id
          distinctio repellat optio.
        </p>
      </div>
      <motion.div
        className="product-grid"
        variants={containerMotion}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product}
            className="single-product"
            variants={productMotion}
          >
            <div className="product-info-text">
              <p className="name">{`Proizvod ${product}`}</p>
              <p className="hidden-text">Osnovne informacije o proizvodu </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CatFour;
