import "../Styles/About.scss";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const [expCount, setExpCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  const clientsRef = useRef(null);
  const isClientsInView = useInView(clientsRef, { once: true, amount: 0.4 });

  const productsRef = useRef(null);
  const isProductsInView = useInView(productsRef, { once: true, amount: 0.4 });

  useEffect(() => {
    let expStart = 0;
    const expEnd = 25;
    const expDuration = 2000;
    const expIncrementTime = Math.floor(expDuration / expEnd);

    const expTimer = setInterval(() => {
      expStart += 1;
      setExpCount(expStart);
      if (expStart === expEnd) {
        clearInterval(expTimer);
      }
    }, expIncrementTime);

    return () => clearInterval(expTimer);
  }, []);

  useEffect(() => {
    if (isClientsInView) {
      let clientsStart = 0;
      const clientsEnd = 150;
      const clientsDuration = 3000;
      const clientsIncrementTime = Math.floor(clientsDuration / clientsEnd);

      const clientsTimer = setInterval(() => {
        clientsStart += 1;
        setClientsCount(clientsStart);
        if (clientsStart === clientsEnd) {
          clearInterval(clientsTimer);
        }
      }, clientsIncrementTime);

      return () => clearInterval(clientsTimer);
    }
  }, [isClientsInView]);

  useEffect(() => {
    if (isProductsInView) {
      let productsStart = 0;
      const productsEnd = 30;
      const productsDuration = 2000;
      const productsIncrementTime = Math.floor(productsDuration / productsEnd);

      const productsTimer = setInterval(() => {
        productsStart += 1;
        setProductsCount(productsStart);
        if (productsStart === productsEnd) {
          clearInterval(productsTimer);
        }
      }, productsIncrementTime);

      return () => clearInterval(productsTimer);
    }
  }, [isProductsInView]);

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
        stiffness: 200,
      },
    },
  };

  const sectionMotionRight = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.2,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className="page about-us">
      <motion.section
        className="about"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className="text-part">
          <h1>O NAMA</h1>
          <div className="div-count">
            <span>{`${expCount} `}</span>
            <p>godina</p>
            <p>iskustva</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            ex recusandae quasi nesciunt, voluptate quia. Dolor eveniet aut,
            error ut temporibus, deleniti labore explicabo ex facere sed
            molestiae quam. Soluta non libero recusandae ipsam quos. Impedit
            nobis quo delectus rerum iusto veritatis perspiciatis deleniti quos,
            expedita culpa voluptatibus minima non reprehenderit repellendus ab
            eum obcaecati, repudiandae architecto in asperiores? Dolore repellat
            vitae praesentium adipisci id distinctio quis ex provident vel,
            pariatur saepe, nemo blanditiis dignissimos similique asperiores
            repudiandae culpa cupiditate sunt quae. Doloremque laborum nisi quos
            magni suscipit minus eum minima totam repellendus et! Eligendi eius
            modi unde et aut.
          </p>
        </div>
        <div className="img-part"></div>
      </motion.section>

      <motion.section
        className="about"
        variants={sectionMotionRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        ref={clientsRef}
      >
        <div className="text-part">
          <h1>O NAMA</h1>
          <div className="div-count">
            <span>{`${clientsCount}+`}</span>
            <p>zadovoljnih</p>
            <p>klijenata</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            ex recusandae quasi nesciunt, voluptate quia. Dolor eveniet aut,
            error ut temporibus, deleniti labore explicabo ex facere sed
            molestiae quam. Soluta non libero recusandae ipsam quos. Impedit
            nobis quo delectus rerum iusto veritatis perspiciatis deleniti quos,
            expedita culpa voluptatibus minima non reprehenderit repellendus ab
            eum obcaecati, repudiandae architecto in asperiores? Dolore repellat
            vitae praesentium adipisci id distinctio quis ex provident vel,
            pariatur saepe, nemo blanditiis dignissimos similique asperiores
            repudiandae culpa cupiditate sunt quae. Doloremque laborum nisi quos
            magni suscipit minus eum minima totam repellendus et! Eligendi eius
            modi unde et aut.
          </p>
        </div>
        <div className="img-part"></div>
      </motion.section>

      <motion.section
        className="about"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        ref={productsRef}
      >
        <div className="text-part">
          <h1>O NAMA</h1>
          <div className="div-count">
            <span>{`${productsCount}+`}</span>
            <p>različitih</p>
            <p>proizvoda</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            ex recusandae quasi nesciunt, voluptate quia. Dolor eveniet aut,
            error ut temporibus, deleniti labore explicabo ex facere sed
            molestiae quam. Soluta non libero recusandae ipsam quos. Impedit
            nobis quo delectus rerum iusto veritatis perspiciatis deleniti quos,
            expedita culpa voluptatibus minima non reprehenderit repellendus ab
            eum obcaecati, repudiandae architecto in asperiores? Dolore repellat
            vitae praesentium adipisci id distinctio quis ex provident vel,
            pariatur saepe, nemo blanditiis dignissimos similique asperiores
            repudiandae culpa cupiditate sunt quae. Doloremque laborum nisi quos
            magni suscipit minus eum minima totam repellendus et! Eligendi eius
            modi unde et aut.
          </p>
        </div>
        <div className="img-part">
            <img src="https://irp.cdn-website.com/96f5c32d/dms3rep/multi/GettyImages-1036742080-8db6a626.jpg" alt="product" />
            <img src="https://images.squarespace-cdn.com/content/v1/610e59d9d1cae528ed7b7bc9/1650217450183-UBJDCCM4NOJBFY9F4C1G/https%3A%2F%2Fi.etsystatic.com%2F24278089%2Fr%2Fil%2Fd8f4c2%2F3308325828%2Fil_fullxfull.3308325828_l5ix.jpg?format=1500w" alt="product" /> 
            <img src="https://scontent.fbeg3-2.fna.fbcdn.net/v/t1.6435-9/140246134_101810798579822_108598922699842858_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B6Fk0PX3bdYQ7kNvgEaIN7V&_nc_ht=scontent.fbeg3-2.fna&oh=00_AYA2O02-39zcWdcCKxLl_amDjiNf6akh6SK9CuNqCVM-yA&oe=66951039" alt="product" />    
            <img src="https://i0.wp.com/bestaroundmetalfab.com/wp-content/uploads/2022/01/Custom-Welded-Gate-Colorado.jpg?fit=500%2C500&ssl=1" alt="product" />    
            <img src="https://preview.redd.it/general-cost-to-build-this-gate-design-in-los-angeles-v0-etk6smowha4b1.png?width=1496&format=png&auto=webp&s=e3625c972d5b6a9f67ff5ea8184d69a1d38cd9df" alt="product" />    
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jthITlu0svs7z7m5XQUvfJWoj3zL8_o2Fg&s" alt="product" />    

            </div>
      </motion.section>
    </div>
  );
};

export default About;
