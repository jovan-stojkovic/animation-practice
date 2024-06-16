import "../Styles/Contact.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const schema = yup.object().shape({
    fullName: yup.string().required("Molimo Vas unesite Vaše ime"),
    email: yup
      .string()
      .email("Unesite ispravnu email adresu")
      .required("Molimo Vas unesite Vašu email adresu"),
    number: yup.string().required("Molimo Vas unesite Vaš broj telefona"),
    text: yup.string().required("Polje ne sme ostati prazno"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setSuccess(true);
  };

  const formMotion = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const contactMotion = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="page contact">
      {success ? (
        <div className="success">
          <div className="success-img-cont"></div>
          <p className="p-success">
            Uspešno ste poslali poruku. Naš tim će Vam odgovoriti u najkraćem
            roku!
          </p>
          <button
            className="b-success"
            onClick={() => window.location.reload()}
          >
            Zatvori
          </button>
        </div>
      ) : (
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          variants={formMotion}
          initial="hidden"
          animate="visible"
        >
          <p className="error">{errors.fullName?.message}</p>
          <input
            type="text"
            placeholder="Ime i prezime"
            {...register("fullName")}
          />
          <p className="error">{errors.email?.message}</p>
          <input
            type="text"
            placeholder="Email adresa"
            {...register("email")}
          />
          <p className="error">{errors.number?.message}</p>
          <input
            type="text"
            placeholder="Broj telefona"
            {...register("number")}
          />
          <p className="error">{errors.text?.message}</p>
          <textarea
            name="upit"
            id="area"
            cols="30"
            rows="10"
            placeholder="Tekst poruke"
            {...register("text")}
          />
          <button type="submit">Pošalji</button>
        </motion.form>
      )}
      <motion.div
        className="contact-info"
        variants={contactMotion}
        initial="hidden"
        animate="visible"
      >
        <div className="single-contact-part">
          <div className="contact-img"></div>
          <p>osaplast@gmail.com</p>
        </div>
        <div className="single-contact-part">
          <div className="contact-img"></div>
          <p>064 00 00 000</p>
        </div>
        <div className="single-contact-part">
          <div className="contact-img"></div>
          <p>Miljakovačke staze</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
