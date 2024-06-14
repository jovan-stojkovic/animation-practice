import { Link } from "react-router-dom";
import "../Styles/Products.scss";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

const Products = () => {
 useEffect(() => {
    let elements = document.querySelectorAll(".vanilla-section");
    VanillaTilt.init(elements, {
      max: 4,
      speed: 300,
      scale: 1.015,
    });

    // Cleanup function to destroy VanillaTilt on unmount
    return () => {
      elements.forEach((element) => {
        element.vanillaTilt.destroy();
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="page products">
      <section className="vanilla-section">
        <div className="text-part">
          <h1>Category 1</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link to="/products/category-one">Pogledaj kompletnu ponudu</Link>
        </div>
        <div className="img-part"></div>
      </section>
      <section className="vanilla-section">
        <div className="text-part">
        <h1>Category 2</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link to="/products/category-two">Pogledaj kompletnu ponudu</Link>
        </div>
        <div className="img-part"></div>
      </section>
      <section className="vanilla-section">
        <div className="text-part">
        <h1>Category 3</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link to="/products/category-three">Pogledaj kompletnu ponudu</Link>
        </div>
        <div className="img-part"></div>
      </section>
      <section className="vanilla-section">
        <div className="text-part">
        <h1>Category 4</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link to="/products/category-four">Pogledaj kompletnu ponudu</Link>
        </div>
        <div className="img-part"></div>
      </section>
    </div>
  );
};

export default Products;
